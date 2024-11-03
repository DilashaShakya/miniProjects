'use client'
import React from 'react'
import Tictactoe from '../components/tictactoe/tictactoe'


const game = () => {
  return (
    <div className='flex flex-col items-center bg-[#556B2F] text-white min-h-screen'>
      <Tictactoe/>
    </div>
  )
}

export default game