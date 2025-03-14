const TodoList = ({tasks}: any) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
    <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        Todo List
      </h1>
      <div className="space-y-2">
        {tasks.map((task: any) => (
          <div
            key={task.id}
            className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 rounded-md px-4 py-2"
          >
            <div className="flex items-center">
              {task.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

    )
}

export default TodoList