'use client'

import { useState } from "react";


export default function Home() {
  const [result, setResult] = useState('')
  const [expression, setExpression] = useState('')
  
  const handleButtonClick = (value)=>{
    if (value === '='){
      try{
        setResult(eval(expression).toString());
      } catch(error){
        setResult('Error');
      } 
      }else if (value === 'C'){
        setResult('');
        setExpression('');
    }else if(value === 'del'){
      setExpression((prevExpression)=> prevExpression.slice(0,-1));
    }
      else{
      setExpression((prevExpression) => prevExpression + value);
    }

  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*', 
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C' , 'del'
  ];
  return (
      <main className="flex min-h-screen flex-col items-center p-24">
       <h1 className="font-playfair text-5xl font-bold mb-10">Calculator</h1>
       <div className="'bg-white p-6 rounded-lg shadow-lg">
        <input
        type ="text"
        className = "w-full mb-2 text-3xl border-b-2 border-gray-400 focus:outline-none"
        value={expression}
        readOnly/>

        <input 
        type = "text"
        className="w-full text-4xl font-bold mb-4 focus-outline"
        value = {result}
        readOnly/>

      <div className = "grid grid-cols-4 gap-2">
        {buttons.map((btn)=>(
          <button
            key ={btn}
            onClick = {() => handleButtonClick(btn)}
            className={`text-4xl p-2 rounded-lg ${
              isNaN(btn) && btn !== '.' // Checks if the button is non-numeric
                ? 'bg-orange-400 hover:bg-orange-500 text-white' // for Non-numeric buttons
                : 'bg-gray-400 hover:bg-gray-500 text-black' // for Numeric buttons
            }`}
          >
            {btn}
          </button>
        ))}

      </div>

       </div>
    </main>
  );
}
