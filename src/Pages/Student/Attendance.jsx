import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'

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

    useEffect(() => {
        onGetData()
        handleClick()
    }, []);
    return (
        <div>
            <button
                onClick={handleClick}>
                student
            </button>
            {
                singleData &&
                <h1>name :-{singleData.name}</h1>
            }
        </div>
    )
}

export default Attendance;
