import Link from "next/link";
import CreateNote from "./CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records?page=1&perPage=30",
    { cache: "no-store" }
  );
  const data = await res.json();
  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();

  return (
    <div className="p-10">
      <h1>
        <Link href={"/"}>
          <span>&larr;</span> Home
        </Link>
      </h1>
      <div className="text-center text-3xl font-bold mb-6">
        <h1>Notes App 📝</h1>
      </div>

      <div className="grid grid-cols-3 gap-4 text-center">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <div className="mt-12">
        <CreateNote />
      </div>
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, conent, created } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className="bg-orange-500 rounded-lg space-y-5">
        <h2>{title}</h2>
        <h5>{conent}</h5>
        <p>{created}</p>
      </div>
    </Link>
  );
}
