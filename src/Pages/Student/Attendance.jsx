import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import { IoPersonCircleOutline } from "react-icons/io5"
function Attendance() {
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const [rollNumber, setRollNumber] = useState(1)

    const { studentData } = useSelector((state) => {
        return state.students
    })

    console.log(studentData)

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

    function present (){
        handleClick()
    }
    function  absent () {
        handleClick()
    }
    useEffect(() => {
        onGetData()
    }, []);
    return (
        <div className=' w-full h-screen flex items-center justify-center flex-col '>
            <h1 className=' text-4xl fixed top-10'>Attendance</h1>
            <div className=' h-96 w-96 mt-2 bg-orange-400 flex flex-col items-center py-10 rounded-lg'>
                <IoPersonCircleOutline
                    className=' text-white h-32 w-40' />
                <h1 className=' text-xl font-semibold text-center mt-5 text-white'>Name : {singleData.name}</h1>
                <div className=' w-[90%] mt-10 h-36 flex gap-10 items-center justify-center'>
                    <button
                        onClick={present}
                        className=' border-2 text-white border-white rounded-md hover:bg-white hover:border-none hover:text-orange-400 font-semibold text-xl outline-none py-2 px-4 transition-all ease-in-out duration-300'>Present </button>
                    <button
                        onClick={absent}
                        className=' border-2 text-white border-white rounded-md hover:bg-white font-semibold text-xl outline-none hover:text-orange-400 py-2 px-4 transition-all ease-in-out duration-300'>Absent </button>

                </div>
            </div>
            <div className=' flex gap-4 mt-2'>
                <div className=' w-10 h-10 bg-purple-500 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>s</div>
                <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>m</div>
                <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>t</div>
                <div className=' w-10 h-10 bg-red-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>w</div>
                <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>t</div>
                <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>f</div>
                <div className=' w-10 h-10 bg-red-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>s</div>
            </div>
            <Footer/>
        </div>
    )
}

export default Attendance;
