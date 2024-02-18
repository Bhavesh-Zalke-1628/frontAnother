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
        <div className={'nav h-3 flex items-center justify-between px-9 py-12  border-2 sticky' + (theam ? "" : 'dark')}>
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
                    <div className={' flex gap-10 border px-4 py-5' + (theam ? '' : 'dark')}>
                        <Link to='/signin'>
                            <button className=' bg-orange-700 font-semibold px-4 py-2 text-white rounded-md hover:bg-blue-800 transition-all ease-in-out duration-300 shadow-[4px_5px_4px_black]' >Sign In</button>
                        </Link>
                        <Link to='/signup'>
                            <button className=' font-semibold border px-4 py-2 border-blue-500 rounded-md hover:bg-blue-800 transition-all ease-in-out duration-300 hover:text-white hover:shadow-[4px_5px_4px_black]'> Sign Up</button>
                        </Link>
                    </div>
                )}

                {/* if the user is logged in */}

                {isLoogedIn && (
                    <div className=' flex gap-10 border px-4 py-5'>
                        <button className=' font-semibold px-4 py-3 bg-orange-400 rounded-md transition-all ease-in-out duration-300 hover:text-black hover:bg-white border-2 hover:border-orange-400'>
                            <Link to='/admin/profile'>
                                Profile
                            </Link>
                        </button>   
                        <button className=' font-semibold border px-4 py-1 border-orange-500 rounded-md transition-all ease-in-out duration-300 hover:text-white hover:bg-orange-400 '>
                            <Link onClick={handleLogout}>
                                Log out
                            </Link>
                        </button>

                    </div>
                )}
                <div className=' cursor-pointer w-10 h-10'
                    onClick={() => {
                        dispatch(toogleTheam())
                    }}
                >
                    {theam &&
                        <MdModeNight
                            className={'icon' + theam ? '' : ' bg-black text-white border-none'}
                        />
                    }
                    {!theam &&
                        <MdOutlineLightMode width={100} height={100} className={'text-8xl' + theam ? "" : 'text-white bg-black'} />}
                </div>
            </div>

        </div>
    )
}

export default Header
