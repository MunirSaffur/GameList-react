import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userData, logOutHandler } from '../features/loginSlice';
import { searchHandler, baseGames } from '../features/gamesSlice'
import { Flex, Avatar, Box, Badge, Text, Button } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import { useHistory } from "react-router-dom";

export default function Header() {
    const userDataObj = useSelector(userData);
    const allGames = useSelector(baseGames);
    const hestory = useHistory()
    const dispatch = useDispatch()

    const handleLogOut = () => {
        fetch('http://localhost:3001/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: 'rebecka'
            })
        }
        ).then(() => {
            dispatch(logOutHandler("fail"))
            hestory.push('./login')
        })

    }

    // search handler
    const handleSearch = (e)=>{
        dispatch(searchHandler(allGames.filter(game=>game.name.toLowerCase().includes(e.target.value.toLowerCase()))))
    }

    return (
        <div className='flex justify-between'>
            <div>
                <Flex>
                    <Avatar src={userDataObj.avatar} />
                    <Box ml='3'>
                        <Text fontWeight='bold'>
                            {userDataObj.name}
                            <Badge ml='1' colorScheme='green'>
                                Online
                            </Badge>
                        </Text>
                        <Text fontSize='sm'>{userDataObj.event}</Text>
                    </Box>
                </Flex>
                <Button leftIcon={<ArrowBackIcon />} colorScheme='gray' my="3" onClick={() => { handleLogOut() }}>Log Out</Button>
            </div>
            <div className="font-sans text-black bg-white flex items-center justify-center">
                <div className="border rounded overflow-hidden flex">
                    <input type="text" className="px-4 py-2" placeholder="Search..." onChange={(e)=>{handleSearch(e)}} />
                    <button className="flex items-center justify-center px-4 border-l">
                        <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
                    </button>
                </div>
            </div>
        </div>

    )
}
