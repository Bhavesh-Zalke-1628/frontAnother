import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoMdPerson } from "react-icons/io";
import NavigateArrow from '../Component/NavigateArrow';
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
                <NavigateArrow />
                <div className=' flex flex-col items-center py-10 gap-14 w-[70vw] h-[70vh] bg-orange-400 rounded'>
                    <div className=' w-[90%] h-[70%] flex  items-center justify-between'>
                        <div className='w-[20%] h-[90%]'>

                            <div className='  shadow-[0_0_15px_black] overflow-hidden rounded-lg'>
                                {
                                    <img
                                        src={adminData?.profile?.secure_url}
                                        className=' object-cover w-full object-center overflow-hidden roundedl-lg h-full'
                                        alt="" />
                                }
                            </div>
                                <p className=' text-xl text-center capitalize mt-10'>name :<br/><span>{adminData.fullname}</span></p>
                                <p className=' text-lg text-center'>Email  {adminData.email}</p>
                        </div>
                        <div className=' w-[75%] h-[90%]  flex flex-col gap-14'>
                            <h1 className=' text-7xl capitalize text-center font-semibold'>{adminData.fullname}</h1>
                            <ul className=' flex flex-row items-center justify-around gap-10 mt-10'>
                                <li className=' px-10 py-3 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-orange-300 border-2 border-white cursor-pointer hover:bg-cyan-200 transition-all ease-in-out duration-300'> Computer Science</li>
                                <li className=' px-10 py-3 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-orange-300 border-2 border-white cursor-pointer hover:bg-cyan-200 transition-all ease-in-out duration-300'>BCA III</li>
                                <li className=' px-10 py-3 text-xm font-semibold capitalize shadow-indigo-500/40 rounded-lg bg-orange-300 border-2 border-white cursor-pointer hover:bg-cyan-200 transition-all ease-in-out duration-300'> {year - 1}-{year}</li>

                            </ul>
                            <p className=' text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora facilis vero maiores exercitationem voluptates tempore! Rerum minus consequuntur eos quaerat vel aliquam laboriosam illum ab culpa fuga, laborum rem incidunt beatae sit est ad earum modi aspernatur natus quam! Obcaecati quam iste a minus impedit enim consectetur placeat ut aut.</p>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-10 ml-[35%]'>
                    <button className=' text-xl cursor-pointer border-2 px-4 py-2 rounded-lg capitalize font-semibold shadow-lg shadow-indigo-500/40'>
                        <Link to='/show-student'>
                            Show Student
                        </Link>
                    </button>
                    <button className=' text-xl cursor-pointer border-2 px-4 py-2 rounded-lg capitalize font-semibold shadow-lg shadow-indigo-500/40'>
                        <Link to='/create-student'>
                            Create Student
                        </Link>
                    </button>
                    <button className=' text-xl cursor-pointer border-2 px-4 py-2 rounded-lg capitalize font-semibold shadow-lg shadow-indigo-500/40'>
                        <Link to='/student/attendance'>
                            attendance
                        </Link>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AdminProfile
