import React from 'react'
import GameState from './GameState'

const GameOver = ({gameState}) => {
    switch (gameState) { 
        case GameState.inProgress:
          return <></>;
      
        case GameState.playerOWins:
          return (
            <div className="flex justify-center mt-5">
              <div className="text-4xl font-bold text-center text-[#F0E68C] p-3 border-4 border-dotted border-[#D4AF37] rounded-lg">
                O wins!
              </div>
            </div>
          );
      
        case GameState.playerXWins:
          return (
            <div className="flex justify-center mt-5">
              <div className="text-4xl font-bold text-center text-[#FFD700] p-3 border-4 border-dotted border-[#FFD700] rounded-lg">
                X wins!
              </div>
            </div>
          );
      
        case GameState.draw:
          return (
            <div className="flex justify-center mt-5">
              <div className="text-4xl font-bold text-center text-gray-500 p-3 border-4 border-dotted border-gray-400 rounded-lg">
                Draw!
              </div>
            </div>
          );
      }
      
      return (
        <div className="flex justify-center mt-5">
          <div className="text-3xl font-semibold text-center text-red-600 p-3 border-4 border-dotted border-red-500 rounded-lg">
            Game Over
          </div>
        </div>
      );
      
      
      
}

export default GameOver