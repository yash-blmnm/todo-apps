import { prisma } from "@/db";
import Link from "next/link";
import { redirect } from "next/navigation";

async function createTodo(data) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }
  await prisma.todo.create({ data: { title, status: false } });
  redirect("/");
}

export default function NewPage() {
  return (
    <>
      <header className="flex flex-row justify-center align-middle border-bottom border-slate-600 w-screen bg-slate-800 mb-8 px-12 py-6">
        <h1 className="text-2xl text-slate-50">Todo Form</h1>
      </header>
      <div className="flex justify-center">
        <form
          action={createTodo}
          className="flex flex-col justify-center min-w-[400px]"
        >
          <input
            type="text"
            name="title"
            className="border border-slate-900 rounded px-2 py-1 outline-none w-[100%]"
            required={true}
          />
          <div className="flex gap-2 justify-end mt-10 ">
            <Link
              href=".."
              className="border border-slate-900 px-2 py-1 rounded 
          hover:bg-slate-200 focus-within:bg-slate-200 outline-none"
            >
              Cancel
            </Link>
            <button
              type="submit"
              className="border border-slate-900 px-2 py-1 rounded 
          hover:bg-slate-200 focus-within:bg-slate-200 outline-none"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <></>
    </>
  );
}
