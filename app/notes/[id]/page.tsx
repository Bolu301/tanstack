import Link from "next/link";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data;
}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  return (
    <div className="p-5">
      <div className="space-y-3">
        <h1>
          <Link href={"/notes"}>
            <span>&larr;</span> Notes App
          </Link>
        </h1>
        <h1 className="font-semibold text-center">Note ID: {note.id}</h1>
        <div className="bg-orange-500 rounded-lg space-y-5 w-1/3 mx-auto text-center">
          <h3>{note.title}</h3>
          <h5>{note.conent}</h5>
          <p>{note.created}</p>
        </div>
      </div>
    </div>
  );
}
