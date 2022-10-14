import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom";

export default function GameItem({ gameData }) {
    return (
        <div className="flex py-2 px-4">
            <div className='image'>
                <img src={gameData.icon} />
            </div>
            <div className="">
                <h1 className='font-black'>{gameData.name}</h1>
                <p>{gameData.description}</p>
                <Link className="float-right py-2 px-4 bg-black text-white rounded-sm" to={{
                    pathname: `/${gameData.name}`,
                    state: gameData
                }}>Play <ArrowForwardIcon/></Link>
            </div>
        </div>
    )
}
