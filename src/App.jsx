import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(() => JSON.parse(localStorage.getItem("tasks")) || [])
  const [text, setText] = useState("")

  const addTask = () => {
    if (!text) return
    const newTasks = [...tasks, text]
    setTasks(newTasks)
    localStorage.setItem("tasks", JSON.stringify(newTasks))
    setText("")
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📋 LifeBoard</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 w-full mb-2"
        placeholder="Add a new task"
      />
      <button onClick={addTask} className="bg-blue-500 text-white px-4 py-2 rounded mb-4">
        Add Task
      </button>
      <ul className="list-disc pl-6">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
