import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { VscSignOut } from "react-icons/vsc"
import { logout } from '../../services/authAPICall/authAPI';
import { BsCartPlus } from "react-icons/bs";

const Navbar = () => {

    const { token } = useSelector((state) => state.auth);
    const { darkMode } = useSelector((state) => state.mode);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <div className={`flex h-20 items-center justify-center ${darkMode ? "bg-richblack-900 " : "bg-black"} border-b-[1px] border-richblack-25 `}>

            <div className={`text-2xl cursor-pointer mr-[100px]`}>
                <p className='text-3xl text-pink-5 font-bold'>E Shopii</p>
            </div>

            <div className='flex flex-row-reverse w-11/12 max-w-maxContent items-center justify-between gap-5'>
                <div className='flex gap-x-5 items-center'>

                    {
                        <div
                            className='cursor-pointer'

                        >
                            <Link to={"/cart"}>
                                <div className='text-white'>
                                    <BsCartPlus className="w-6 h-6 flex items-center relative" />
                                </div>
                                <div className='absolute w-3 h-3 bg-pink-5 rounded-full top-6 right-[152px] text-white text-[9px] flex items-center justify-center'>
                                    1
                                </div>
                            </Link>
                        </div>
                    }

                    {
                        token === null && (
                            <Link to="/login" >
                                <button className={` 
                                px-[12px] py-[8px] 
                                ${darkMode ? "bg-richblack-800  rounded-md text-richblack-100 border border-richblack-700" : "bg-pink-5 text-white border-b border-richblack-700"}
                                `}>
                                    Login
                                </button>
                            </Link>
                        )
                    }

                    {
                        token === null && (
                            <Link to="/signup">
                                <button className={`
                                px-[12px] py-[8px]
                                ${darkMode ? "bg-richblack-800  rounded-md text-richblack-100 border border-richblack-700" : "bg-richblack-5 text-richblack-700 border-b border-richblack-700"}
                                `} >
                                    Sign up
                                </button>
                            </Link>
                        )
                    }

                    {
                        token != null && (
                            <button
                                onClick={() => {
                                    dispatch(logout(navigate))
                                }}
                                className={`px-[12px] py-[8px] flex items-center gap-x-2 ${darkMode ? "bg-richblack-800  rounded-md text-richblack-100 border border-richblack-700" : "bg-pink-5 text-white border-b border-richblack-700"}
                                `} >
                                Logout
                                <VscSignOut
                                    className="text-lg" />
                            </button>
                        )
                    }
                </div>

                <div className='flex flex-row gap-10'>
                    <div className='text-richblack-100'>
                        <Link to={"/"}>
                            Home
                        </Link>
                    </div>

                    <div className='text-richblack-100 '>
                        <Link to={"/"}>
                            About
                        </Link>
                    </div>

                    <div className='text-richblack-100 '>
                        <Link to={"/"}>
                            Contact
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar