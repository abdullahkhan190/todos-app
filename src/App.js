import './styles/App.css';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Footer from './components/Footer';
import AddTodo from './components/AddTodo';
import React, { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

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
