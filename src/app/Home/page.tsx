import TodoList from "@/components/TodoList";
import { getAllTodos } from "@/services/todo";

export default async function Home() {
    const tasks = await getAllTodos();
    console.log(tasks);
    return (
      <main className="max-w-4xl mx-auto mt-4">
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">ToDo List</h1>
          {/* <AddTask /> */}
        </div>
        <div className="text-center">
          <TodoList tasks={tasks} />
        </div>
      </main>
    );
  }