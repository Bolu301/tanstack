import Link from "next/link";

export default function Home() {
  return (
    <div className="p-5 text-center">
      <div className={"text-3xl"}>Practice Project</div>

      <div className="my-5">
        <Link href="/notes">
          <button className="bg-orange-500 p-5 rounded-full">
            Notes App 📝
          </button>
        </Link>
      </div>
    </div>
  );
}
