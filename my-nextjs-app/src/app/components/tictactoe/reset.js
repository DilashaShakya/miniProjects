'use client'
import game from '@/app/tictactoe/page'
import React from 'react'
import GameState from './GameState'

const Reset = ({gameState, onReset}) => {
    if (gameState == GameState.inProgress){
        return;
    }
  return (
    <div className='text-center font-poppins mt-5 p-4 bg-[#4B3621] text-white w-full text-xl rounded-lg' > <button onClick={onReset}>Reset</button> </div>
  )
}

export default Reset