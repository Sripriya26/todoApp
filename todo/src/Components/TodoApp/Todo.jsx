import React from 'react';
import Categories from './../Categories.jsx';

const Todo = () => {
  return (
    <div className="Todo">
      <h2>Your Todo List</h2>
        <p>Here you can manage your tasks.</p>
        <Categories/>
    </div>
  );
}   

export default Todo;