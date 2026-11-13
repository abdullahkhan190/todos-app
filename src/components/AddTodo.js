import React, { useState } from 'react';
import '../styles/AddTodo.css';

export default function AddTodo({ onAdd = () => {} }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();

    if (trimmedTitle && trimmedDescription) {
      onAdd({ title: trimmedTitle, description: trimmedDescription, completed: false });
      setTitle('');
      setDescription('');
    }
    else {
      alert('Please fill in both the title and description fields.');
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
}