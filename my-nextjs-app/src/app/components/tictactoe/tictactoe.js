import React, { useEffect, useState } from 'react'
import Board from './Board'
import GameOver from './GameOver';
import GameState from './GameState';
import Reset from './reset';


const PLAYER_X = "X";
const PLAYER_0 = "O";

const winningCombinations =[
  {combo: [0, 1, 2], strikeClass: "strike-row-1" },
  { combo: [3, 4, 5], strikeClass: "strike-row-2" },
  { combo: [6, 7, 8], strikeClass: "strike-row-3" },

  //Columns
  { combo: [0, 3, 6], strikeClass: "strike-column-1" },
  { combo: [1, 4, 7], strikeClass: "strike-column-2" },
  { combo: [2, 5, 8], strikeClass: "strike-column-3" },

  //Diagonals
  { combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
  { combo: [2, 4, 6], strikeClass: "strike-diagonal-2" },
];



function checkWinner(tiles, setStrikeClass, setGameState){
  for (const {combo, strikeClass} of winningCombinations){
    const tileValue1 = tiles[combo[0]];
    const tileValue2 = tiles[combo[1]];
    const tileValue3 = tiles[combo[2]];

    if (tileValue1 !== null && tileValue1 === tileValue2 && tileValue1 === tileValue3){
      setStrikeClass(strikeClass)
      if (tileValue1 === PLAYER_X){
        setGameState(GameState.playerXWins)
      }
      else {
        setGameState(GameState.playerOWins)
      }
      return;
    }
    
  }

  const areAllTilesFilledIn = tiles.every((tile)=> tile!==null);
  if (areAllTilesFilledIn){
    setGameState(GameState.draw)
  }
}


const Tictactoe = () => {
  const [tiles, setTiles] = useState(Array(9).fill(null));
  const [playerTurn, setPlayerTurn] = useState(PLAYER_X);
  const [strikeClass, setStrikeClass] = useState();
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleTileClick = (index)=>{
    if (gameState!== GameState.inProgress){
      return;
    }


    if (tiles[index]!== null){
      return ;
    }
    const newTiles = [...tiles];
    newTiles[index] = playerTurn
    setTiles(newTiles);
    if (playerTurn === PLAYER_X){
      setPlayerTurn(PLAYER_0)
    }else{
      setPlayerTurn(PLAYER_X)
    }
  };

  const handleReset =()=>{
    setGameState(GameState.inProgress);
    setTiles(Array(9).fill(null));
    setPlayerTurn(PLAYER_X)
    setStrikeClass(null);
  };

  useEffect(()=>{
    checkWinner(tiles, setStrikeClass, setGameState);
  },[tiles])
  return (
    <div>
        <h1 className='text-5xl font-bold text-center mt-5 font-poppins'>Tic tac toe</h1>
        <Board strikeClass= {strikeClass} playerTurn= {playerTurn} tiles={tiles} onTileClick = {handleTileClick}/>
        <GameOver gameState={gameState}/>
        <Reset gameState={gameState} onReset={handleReset}/>
    </div>
  )
}

export default Tictactoe