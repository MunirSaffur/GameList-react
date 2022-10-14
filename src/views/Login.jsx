import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { loginHandler } from '../features/loginSlice'
import { useHistory } from "react-router-dom";
import { useToast } from '@chakra-ui/react'

export default function Login() {
    const hestory = useHistory();
    const dispatch = useDispatch();
    const toast = useToast();
    const userName = useRef("");
    const password = useRef("");

    // Login Handler
    const handleLogIn = () => {
        userName.current.value === "" || password.current.value === "" ?
        toast({
            title: 'Please check your username or password',
            description: "You have to enter the username and password",
            status: 'warning',
            duration: 5000,
            isClosable: true,
        })
        :
        fetch('http://localhost:3001/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: userName.current.value,
                password: password.current.value
            })
        }
        ).then((res) => res.json())
        .then(res => {
            dispatch(loginHandler(res))
            // login checker
            if (res.status === "success") {
                hestory.push('./home')
            } else {
                toast({
                    title: 'Please check your information',
                    status: 'warning',
                    duration: 5000,
                    isClosable: true,
                })
            }
        }).catch(err => console.error(err))
    }

    return (
        <div className="flex items-center h-screen w-full antialiased bg-gray-200 text-gray-900 font-sans">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <span className="block w-full text-xl uppercase font-bold mb-4">Login</span>
                <div className="mb-4 md:w-full">
                    <label htmlFor="email" className="block text-xs mb-1">Username or Email</label>
                    <input ref={userName} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email" />
                </div>
                <div className="mb-6 md:w-full">
                    <label htmlFor="password" className="block text-xs mb-1">Password</label>
                    <input ref={password} className="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                </div>
                <button onClick={() => { handleLogIn() }} className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login</button>
            </div>
        </div>
    )
}
