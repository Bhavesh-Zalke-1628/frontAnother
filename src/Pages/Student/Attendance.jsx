import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import { IoPersonCircleOutline } from "react-icons/io5"
import Footer from '../../Component/Footer'
import Days from '../../Constant/Days'
function Attendance() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const date = new Date()
    console.log(date)
    const [rollNumber, setRollNumber] = useState(1)

    const { studentData } = useSelector((state) => {
        return state.students
    })


    async function onGetData() {
        dispatch(getStudentData())
    }

    const [singleData, setSingleData] = useState(JSON.parse(localStorage.getItem('student')))
    function handleClick() {
        if (rollNumber < studentData.length) {
            setSingleData(studentData[rollNumber])
            console.log(singleData.name)
            setRollNumber(rollNumber + 1)
        }
    }

    function present() {
        handleClick()
    }
    function absent() {
        handleClick()
    }
    useEffect(() => {
        onGetData()
    }, []);
    return (
        <div className=' w-full h-screen flex items-center justify-center flex-col '>
            <h1 className=' text-4xl fixed top-10'>Attendance</h1>
            <h1>
                Date : {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </h1>
            <div className=' h-96 w-96 mt-2 bg-orange-400 flex flex-col items-center py-6 rounded-lg'>
                <IoPersonCircleOutline
                    className=' text-white h-52 w-40' />
                <h1 className=' text-white font-semibold text-xl'>{rollNumber}  </h1>
                <h1 className=' text-xl font-semibold text-center mt-5 text-white'>Name : {singleData.name}</h1>
                <p className=' font-semibold text-center mt-5 text-white'>Email : {singleData.email}</p>

                <div className=' w-[90%] mt-10 h-28 flex gap-10 items-center justify-center'>
                    <button
                        onClick={present}
                        className=' border-2 text-white border-white rounded-md hover:bg-white hover:border-none hover:text-orange-400 font-semibold text-xl outline-none py-2 px-4 transition-all ease-in-out duration-300'>
                        Present
                    </button>
                    <button
                        onClick={absent}
                        className=' border-2 text-white border-white rounded-md hover:bg-white font-semibold text-xl outline-none hover:text-orange-400 py-2 px-4 transition-all ease-in-out duration-300'>
                        Absent
                    </button>

                </div>
            </div>
            {/* <Days/>   */}
            <Footer />
        </div>
    )
}

export default Attendance;
