import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdPerson } from "react-icons/io";
function AdminProfile() {

    const cuurentDate = new Date()
    const year = cuurentDate.getFullYear()

    const navigator = useNavigate();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const adminData = useSelector((state) => state.admin.data)
    console.log(adminData)
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
                <div className=' flex flex-col items-center py-10 gap-14 w-[70vw] h-[50vh] border-1  border-gray-500 shadow-lg shadow-indigo-500/40 bg-gradient-to-r from-cyan-500 to-blue-500"'>
                    <div className=' w-[90%] h-[70%] flex  items-center justify-between px-8 '>
                        <div className=' w-[20%] h-[90%] shadow-[0_0_15px_black] overflow-hidden'>
                            <img 
                            src={adminData?.profile?.secure_url}    
                            className=' object-cover w-full object-center overflow-hidden rounded-lg'
                            alt="" />
                            {/* <IoMdPerson className=' w-full h-full' /> */}
                        </div>
                        <div className=' w-[75%] h-[90%] border-2 border-gray-600  shadow-[0_0_15px_black] flex flex-col gap-14'>
                            <h1 className=' text-5xl capitalize text-center'>{adminData.fullname}</h1>
                            <ul className=' flex flex-row items-center justify-around gap-10'>
                                <li className=' px-10 py-1 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-cyan-700'> Computer Science</li>
                                <li className=' px-10 py-1 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-cyan-700'>BCA III</li>
                                <li className=' px-10 py-1 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-cyan-700'> {year - 1}-{year}</li>

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
