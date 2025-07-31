import React, { useState } from "react";
import './Categories.css';

const categories = ["Personal", "Professional"];

const Categories = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % categories.length);
  const prev = () => setIndex((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <div className="categories">
      <h2>Categories</h2>
      <p>Manage your tasks by categories.</p>
      <div className="slider-container">
        <button onClick={prev} className="slider-btn">{"<"}</button>
        <div className="slider-window">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {categories.map((cat) => (
              <div className="slider-item" key={cat}>
                {cat}
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