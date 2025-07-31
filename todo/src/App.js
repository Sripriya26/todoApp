
import './App.css';
import Header from './Header/Header.jsx';
import Footer from './Footer/Footer.jsx';
import Todo from './Components/TodoApp/Todo.jsx';
import React from 'react';

function App() {
  return (
    <div className="App">
      <Header className="App-header">
      </Header>
      <Todo></Todo>
      <Footer className="App-footer">
      </Footer>
    </div>
  );
}

export default App;
