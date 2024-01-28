import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
function AdminProfile() {

    const navigate = useNavigate()
    return (
        <>
            < div className=' w-full h-[90vh] relative flex justify-center items-center gap-10 flex-col'>
                <IoArrowBackCircleOutline
                    onClick={
                        () => {
                            navigate(-1)
                        }
                    }
                    className=' text-4xl absolute top-10 left-20  cursor-pointer hover:text-violet-700'
                />
                <div className=' flex flex-col items-center py-10 gap-14 w-[70vw] h-[50vh] border-2 border-gray-500'>
                    <div className=' w-[90%] h-[70%] flex  items-center justify-between px-8 border-2 border-gray-500 '>
                        <div className=' w-[20%] h-[90%] border-2 border-gray-600'>

                        </div>
                        <div className=' w-[75%] h-[90%] border-2 border-gray-600 flex flex-col gap-14'>

                            <h1 className=' text-5xl capitalize text-center'>bhavsh zalke</h1>
                            <ul className=' flex flex-row items-center justify-around gap-10'>
                                <li className=' border-2 px-14 py-1 text-xm font-semibold capitalize'>a</li>
                                <li className=' border-2 px-14 py-1 text-xm font-semibold capitalize'>a</li>
                                <li className=' border-2 px-14 py-1 text-xm font-semibold capitalize'>a</li>

                            </ul>
                        </div>
                    </div>
                    <div className=' flex gap-10'>
                        <button className=' text-xl cursor-pointer border-2 px-4 py-2 rounded-lg capitalize font-semibold'>
                            <Link to='/create-student'>
                                create student
                            </Link>

                        </button>
                        <button className=' text-xl cursor-pointer border-2 px-4 py-2 rounded-lg capitalize font-semibold'>
                            <Link to='/student/attendance'>
                                attendance
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminProfile
