import './styles/App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    // { id: 1, title: "Learn React", description: "Learn the basics of React", completed: false },
    // { id: 2, title: "Build a Todo App", description: "Create a simple todo app with React", completed: false },
    // { id: 3, title: "Master JavaScript", description: "Get proficient in JavaScript", completed: false },
    // { id: 4, title: "Learn CSS", description: "Understand CSS for styling", completed: false },
    // { id: 5, title: "Learn HTML", description: "Understand the structure of web pages", completed: false },
    // { id: 6, title: "Learn Node.js", description: "Learn server-side JavaScript with Node.js", completed: false },
  ]);

  const handleAdd = (newTodo) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), ...newTodo }
    ]);
  };

  const handleDelete = (todo) => {
    console.log("Delete todo:", todo);
    setTodos((prevTodos) => prevTodos.filter((e) => e !== todo));
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main>
        <AddTodo onAdd={handleAdd} />
        <Todos todos={todos} onDelete={handleDelete} />
      </main>
      <Footer>

      </Footer>
    </div>
  );
}

export default App;
