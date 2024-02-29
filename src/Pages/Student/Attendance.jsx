import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import { IoPersonCircleOutline } from "react-icons/io5"
import Footer from '../../Component/Footer'
function Attendance() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const date = new Date()
    const [rollNumber, setRollNumber] = useState(1)
    const [presentStudent, setPresentStudent] = useState(0)
    const [absentStudent, setAbsentStudent] = useState(0)
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
            setRollNumber(rollNumber + 1)
        }
    }
    function presentStudentChagne() {
        if (presentStudent + absentStudent < studentData.length) {
            let counter = presentStudent + 1
            setPresentStudent(counter)
        }
    }
    function absentStudentChange() {
        if (absentStudent + presentStudent < studentData.length) {
            let counter = absentStudent + 1
            setAbsentStudent(counter)
        }
    }


    async function present() {
        let data = true
        handleClick()
        presentStudentChagne()
        await dispatch(present(singleData))
    }


    async function absent() {
        let data = true
        handleClick()
        absentStudentChange()
        await dispatch(absent(singleData))
    }


    useEffect(() => {
        onGetData()
    }, []);
    return (
        <div className=' w-full h-screen flex items-center justify-center flex-col relative '>
            <h1 className=' text-4xl fixed top-10'>Attendance</h1>
            <h1>
                Date : {`${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`}
            </h1>

            <div className=' px-7 py-4 bg-blue-400 rounded-lg absolute top-20 right-44 flex items-center justify-center gap-5'>
                <div className=' flex  text-center flex-col gap-2'>
                    <h3 className=' text-xl font-semibold text-white'>Present</h3>
                    <h1 className=' bg-white py-2 rounded-lg text-xl font-semibold'>{presentStudent}</h1>

                </div>
                <h3 className=' text-center text-2xl mt-7 text-white'>+</h3>

                <div className=' flex  text-center flex-col gap-2'>
                    <h3 className=' text-xl font-semibold text-white'>Absent</h3>
                    <h1 className=' bg-white py-2 rounded-lg text-xl font-semibold'>{absentStudent}</h1>

                </div>
                <h3 className=' text-center text-2xl mt-7 text-white'>=</h3>
                <div className=' flex  text-center flex-col gap-2'>
                    <h3 className=' text-xl font-semibold text-white'>Total</h3>
                    <h1 className=' bg-white py-2 rounded-lg text-xl font-semibold'>{studentData.length}</h1>

                </div>
            </div>
            <div className=' h-96 w-96 mt-2 bg-blue-400 flex flex-col items-center py-6 rounded-lg'>
                <IoPersonCircleOutline
                    className=' text-white h-52 w-40'
                />
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
            {/* <Days /> */}
            <Footer />
        </div>
    )
}

export default Attendance;
