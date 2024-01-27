import React from 'react'
import { SiSimplenote } from "react-icons/si";
import { Link } from 'react-router-dom';
import Footer from '../Component/Footer';
import SignIn from '../Pages/SignIn';
function HomeLayout({ children }) {
    return (
        // nav bar 
        <div className=' h-[100vh] w-full'>
            <div className='nav h-3 flex items-center justify-between px-9 py-12  border-2 sticky'>
                {<SiSimplenote className=' text-5xl hover:text-blue-400 cursor-pointer' />}
                <ul className=' flex flex-row items-center justify-between gap-10'>
                    <li>
                        <Link to='' className=' text-xl font-semibold font-sans hover:text-blue-400'>Home</Link>
                    </li>
                    <li>
                        <Link to='' className=' text-xl font-semibold font-sans hover:text-blue-400'>Time Table</Link>
                    </li>
                    <li>
                        <Link to='' className=' text-xl font-semibold font-sans hover:text-blue-400'>Staff</Link>
                    </li>
                    <li>
                        <Link to='' className=' text-xl font-semibold font-sans hover:text-blue-400'>About</Link>
                    </li>
                </ul>
                <div className=' flex gap-10 border px-4 py-5'>
                    <Link to='/signin'>
                        <button className=' bg-blue-700 font-semibold px-4 py-2 text-white rounded-md hover:bg-blue-800 transition-all ease-in-out duration-300 shadow-[4px_5px_4px_black]' >Sign In</button>
                    </Link>
                    <Link to='/signup'>
                        <button className=' font-semibold border px-4 py-2 border-blue-500 rounded-md hover:bg-blue-800 transition-all ease-in-out duration-300 hover:text-white hover:shadow-[4px_5px_4px_black]'> Sign Up</button>
                    </Link>
                </div>
            </div>
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
