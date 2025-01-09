import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlices';
import Todo from './Todo'; 

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <div>
      <h1>Add Todo Form</h1>
      <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
        <input
          type="text"
          className="bg-gray-800 rounded border border-gray-700"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter a Todo"
        />
        <button type="submit">Submit</button>
      </form>
      <Todo />
    </div>
  );
};

export default AddTodo;
