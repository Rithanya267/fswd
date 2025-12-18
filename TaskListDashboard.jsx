import { useState } from "react";

export default function TaskListDashboard() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setTasks([
      ...tasks,
      { id: Date.now(), title: task, completed: false },
    ]);
    setTask("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Task List Dashboard
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter new task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 p-2 border rounded-lg"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 text-white px-4 rounded-xl"
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {tasks.map((t) => (
            <li
              key={t.id}
              className="flex justify-between items-center border p-2 rounded-lg"
            >
              <span
                onClick={() => toggleTask(t.id)}
                className={`cursor-pointer ${
                  t.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {t.title}
              </span>
              <button
                onClick={() => deleteTask(t.id)}
                className="text-red-600 text-sm"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-4">No tasks added</p>
        )}
      </div>
    </div>
  );
}
