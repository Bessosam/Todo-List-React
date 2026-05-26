import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const addTask = () => {
    if (!input.trim()) return;
    setTasks([
      ...tasks,
      { text: input, done: false }
    ]);
    setInput("");
  };
  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="todo-container">
      <h2>Att göra-lista</h2>

      <div className="input-group">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Skriv en uppgift..."
        />
        <button onClick={addTask}>Lägg till</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="task-text">{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(index)}>
              ×
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
