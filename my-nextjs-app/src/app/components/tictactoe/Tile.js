'use client';
import React from 'react';
import './Board.css'

const Tile = ({ className, style, value, onClick, playerTurn}) => {
  let hoverClass = null;
  if (value == null && playerTurn != null) {
    hoverClass = `${playerTurn.toLowerCase()}-hover`;
  }


  return (
    <div onClick={onClick} className={`relative text-current text-2xl flex justify-center items-center w-[100px] h-[100px] tile ${className} ${hoverClass}`} style={style}>
      {value}
    </div>
  );
};


export default Tile;
