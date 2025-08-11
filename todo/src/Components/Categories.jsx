import React, { useState, useEffect } from "react";
import './Categories.css';

const categories = ["Personal", "Professional"];

const Categories = () => {
  const [index, setIndex] = useState(0);
  const [task, setTask] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [tasks, setTasks] = useState({ Personal: [], Professional: [] });

  // Load tasks from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("tasks");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const next = () => setIndex((prev) => (prev + 1) % categories.length);
  const prev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length);

  const handleAddTask = () => {
    if (task.trim() === "") return;
    setTasks((prev) => ({
      ...prev,
      [selectedCategory]: [...prev[selectedCategory], task]
    }));
    setTask("");
  };

  return (
    <div className="categories">
      <h2>Categories</h2>
      <p>Manage your tasks by categories.</p>
      <div className="add-task-container">
        <input
          type="text"
          value={task}
          onChange={e => setTask(e.target.value)}
          placeholder="Enter task"
        />
        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="slider-container">
        <button onClick={prev} className="slider-btn">{"<"}</button>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {categories.map((cat) => (
              <div className="slider-item" key={cat}>
                <div>{cat}</div>
                <ul>
                  {tasks[cat].map((t, i) => (
                    <li key={i}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <button onClick={next} className="slider-btn">{">"}</button>
      </div>
    </div>
  );
};

export default Categories;