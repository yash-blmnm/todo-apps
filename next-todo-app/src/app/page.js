import TodoItem from "@/components/TodoItem";
import { prisma } from "@/db";
import Link from "next/link";

function getTodos() {
  return prisma.todo.findMany();
}

async function updateStatus(id, status) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { status } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <main className="min-h-screen bg-slate-200">
      <header className="flex flex-row justify-between align-middle border-bottom border-slate-600 w-screen bg-slate-800 mb-8 px-12 py-6">
        <h1 className="text-2xl text-slate-50">Todos List</h1>
        <Link
          href="./new"
          className="text-slate-50 border border-slate-100 px-2 py-1 rounded 
          hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          Add New Todo
        </Link>
      </header>
      <section className="ml-12 h-[80vh]">
        <ul>
          {todos.map((todo) => (
            <TodoItem {...todo} updateStatus={updateStatus} />
          ))}
        </ul>
      </section>
      <footer className="flex justify-center py-2 border-t-2 border-slate-600">
        Todo App built using NextJs
      </footer>
    </main>
  );
}
