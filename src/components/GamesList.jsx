import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleGamesList, games } from '../features/gamesSlice';
import GameItem from './GameItem'

export default function GamesList() {
    const gamesList = useSelector(games)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://localhost:3001/games', { method: 'get' })
            .then((res) => res.json())
            .then((res) => {
                dispatch(handleGamesList(res))
            })
    }, [])
    return (
        <div>
            {
                gamesList.map((game, index) => (
                    <GameItem key={index} gameData={game} />
                ))
            }
        </div>
    )
}
