import React from 'react'
import { useLocation } from "react-router-dom";

export default function GamePage() {

    const location = useLocation();
    const gameData = location.state;

  return (
    <div>
        <img src={gameData.icon}/>
        <h1 className='font-black'>{gameData.name}</h1>
        <p>{ gameData.description }</p>
    </div>
  )
}
