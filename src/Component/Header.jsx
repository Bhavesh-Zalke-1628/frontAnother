import React from 'react'
import { SiSimplenote } from "react-icons/si";
import { MdModeNight, MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Slicees/AdminSlice';
import { toogleTheam } from '../Redux/Slicees/TheamSlice';
import './mystyle.css'
function Header() {

    const dispatch = useDispatch()
    const navigate = useNavigate();


    // for checking the user is logged in or not 
    const isLoogedIn = useSelector((state) => state?.admin?.status)

    const theam = useSelector((state) => {
        return state.Theam
    })
    console.log(theam)
    async function handleLogout(e) {
        e.preventDefault();
        const res = await dispatch(logout());
        if (res?.payload?.success)
            console.log('this is the res.paylod.success', res?.payload?.success)
        navigate("/");
    }

    return (
        <div className={' bg-[#0a0b32] nav h-3 flex items-center justify-between px-9 py-12 shadow-[0_0_9px] sticky' + (theam ? "" : 'dark')}>
            {<SiSimplenote className=' text-5xl hover:text-blue-400 cursor-pointer' />}
            <ul className=' flex flex-row items-center justify-between gap-10'>
                <li>
                    <Link to='' className=' text-xl font-semibold font-sans hover:text-blue-400'>Home</Link>
                </li>
                <li>
                    <Link to='timetable' className=' text-xl font-semibold font-sans hover:text-blue-400'>Time Table</Link>
                </li>
                <li>
                    <Link to='staff' className=' text-xl font-semibold font-sans hover:text-blue-400'>Staff</Link>
                </li>
                <li>
                    <Link to='about' className=' text-xl font-semibold font-sans hover:text-blue-400'>About</Link>
                </li>
            </ul>
            {/* Not a logged in */}
            <div className=' flex flex-row gap-4 items-center justify-center'>
                {!isLoogedIn && (
                    <div className={'flex gap-10  px-4 py-4' + (theam ? '' : 'dark')}>
                        <button className='font-semibold px-4 py-2  text-white bg-blue-500 hover:bg-blue-600  rounded-md  transition-all ease-in-out duration-300' >
                            <Link to='/signin'>
                                Sign In
                            </Link>
                        </button>
                        <button className='font-semibold border px-4 py-1 border-blue-500 rounded-md hover:bg-blue-800 transition-all ease-in-out duration-300 hover:text-white '>
                            <Link to='/signup'>
                                Sign Up
                            </Link>
                        </button>
                    </div>
                )}

                {/* if the user is logged in */}

                {isLoogedIn && (
                    <div className=' flex gap-10 border px-4 py-5'>
                        <button className=' font-semibold px-4 py-2 text-white bg-blue-700 rounded-md transition-all ease-in-out duration-300 hover:text-black hover:bg-white border-2 hover:border-blue-400'>
                            <Link to='/admin/profile'>
                                Profile
                            </Link>
                        </button>
                        <button className=' font-semibold border px-4 py-2 border-blue-400 rounded-md transition-all ease-in-out duration-300 hover:text-white hover:bg-blue-700  '>
                            <Link onClick={handleLogout}>
                                Log out
                            </Link>
                        </button>

                    </div>
                )}
                <div className=' cursor-pointer flex items-center justify-center'
                    onClick={() => {
                        dispatch(toogleTheam())
                    }}
                >
                    {theam &&
                        <MdModeNight
                            className={'icon text-4xl border-2 border-white ' + theam ? '' : ' bg-black text-white border-none h-screen'}
                        />
                    }
                    {!theam &&
                        <MdOutlineLightMode width={100} height={100} className={' w-full' + theam ? "" : 'text-white bg-black'} />}
                </div>
            </div>

        </div>
    )
}

export default Header
