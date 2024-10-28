'use client'
import React from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

const Todo = ({ task, toggleComplete, editTodo, deleteTodo }) => {
  return (
    <div className='flex items-center justify-center h-28 bg-customPurple rounded-b-lg -mt-10'>
      <div className="bg-purple-500 flex justify-between items-center p-4 rounded-lg w-full mb-4 max-w-[400px] mx-auto">
        <p
          className={`text-white text-lg ${task.completed ? "line-through" : ""}`}
          onClick={() => toggleComplete(task.id)}
        >
          {task.task}
        </p>
        <div className="flex space-x-3">
          <button className="text-white hover:text-gray-200" onClick={() => editTodo(task.id)}>
            <FaPen />
          </button>
          <button className="text-white hover:text-gray-200" onClick={() => deleteTodo(task.id)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
