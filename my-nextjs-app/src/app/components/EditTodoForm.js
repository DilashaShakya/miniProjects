import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center bg-gray-800 p-4 rounded-lg border border-purple-600 w-full max-w-lg mx-auto mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="text-xl font-poppins bg-transparent text-white placeholder-gray-400 w-full p-2 outline-none"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="text-xl ml-3 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-800 transition-colors duration-300"
      >
        Update Task
      </button>
    </form>
  );
};
