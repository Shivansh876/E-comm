import React, { useState } from 'react'
import LoginForm from '../components/LoginForm';
import { useSelector } from 'react-redux';

const LoginPage = () => {

    const { darkMode } = useSelector((state) => state.mode);

    return (
        <div className='flex items-center mx-auto my-auto gap-[150px]'>
            <div className='flex flex-col gap-5 items-center justify-between'>
                <p className='text-5xl text-pink-5'>Welcome back !</p>
                <img width={800} src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg?size=626&ext=jpg&ga=GA1.1.38729491.1698040597&semt=ais" alt="" />
            </div>
            <div className='w-full max-w-[450px] mx-auto p-5 rounded'>
                <div>
                    <div className={`text-3xl ${darkMode ? "text-richblack-5 " : "text-richblack-700"} font-semibold text-center my-5 `}>
                        Login to Continue
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage