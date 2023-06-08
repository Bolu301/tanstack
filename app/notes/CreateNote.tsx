"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const create = async () => {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });
    setContent("");
    setTitle("");

    router.refresh();
  };

  return (
    <>
      <form onSubmit={create}>
        <div className="space-y-5">
          <h3 className="font-bold text-2xl">Create a new Note</h3>
          <div className="">
            <input
              className="outline outline-2"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="outline outline-2"
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
          </div>
          <button className="bg-black text-white p-2" type="submit">
            Create note
          </button>
        </div>
      </form>
    </>
  );
}
