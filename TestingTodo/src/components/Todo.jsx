import React, { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    const newTodo = {
      title,
      status: false,
    };

    setTodos([...todos, newTodo]);
  };

  return (
    <div data-testid="todo-app">
      <h1>Add Todo</h1>
      <input type="text" placeholder="Add Todo" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd} data-testid="add-todo">Add Todo</button>
      <h1>Todo List</h1>
      <TodoList todos={todos} />
    </div>
  );
};
export default Todo;
