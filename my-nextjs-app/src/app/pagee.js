import React, { useState } from 'react'
'use client'


const pagee = () => {
    const [result, setResult] = useState('')
    const [expression, setExpression] = useState('')
    
    const handleButtonClick=(val)=>{
        if (val === '='){
            try{
                setResult(eval(expression).toString())
            } catch (error){
                setResult("Error")
            } 
        }else if (value === 'C'){
                setResult('');
                setExpression('');
        }else{
            setResult(prevExpression => prevExpression + val)
        }
    }

    const Buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ]

  return (
    <main>
        <div>
        <h1> Calculator</h1>
        <div>
            <input
            type = "text"
            key = {value}
            readOnly/>

            <input 
            type = "text"
            key = {result}
            readOnly/>

            <div>
                {Buttons.map((btn)=>(
                    <button
                    key ={btn}
                    onClick = {()=> handleButtonClick(btn)}
                    className=''
                    >
                    {btn}
                    </button>
                ))}
            </div>
           
        </div>
        </div>
    </main>
  )
}

export default pagee