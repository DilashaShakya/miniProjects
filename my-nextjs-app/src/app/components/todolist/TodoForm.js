'use client'
import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState('')


  const handleSubmit=(e)=>{
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  };
    
  return (
    <div className="flex items-center justify-center h-48 bg-customPurple rounded-t-lg">
      <form onSubmit={handleSubmit} className="flex items-center bg-gray-800 s rounded-lg border border-purple-600 m-12 w-full -mt-4">
        <input
          type="text"
          value = {value}
          placeholder="What is the task today?"
          className=" text-xl font-poppins bg-transparent text-white placeholder-gray-400  w-full p-2 outline-none"
          onChange={(e) => setValue(e.target.value)} 
        />
        <button
          type="submit"
          className=" text-xl ml-3 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-800 transition-colors duration-300 border border-black"
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
