import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../../Component/Footer'
import NavigateArrow from '../../Component/NavigateArrow'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllStudentAttandance } from '../../Redux/Slicees/AttendacneSlice'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import AllStudentCard from '../../Constant/AllStudentCard'

function AllAttandance() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [availableStudentData, setAvailaableStudentData] = useState([])
    const [availableAttnadanceData, setAvailableAttnadanceData] = useState()
    const { studentData } = useSelector((state) => {
        return state.students
    })

    // console.log(studentData)
    const attandacneData = useSelector((state) => {
        return state.attendance.allAttendance
    })

    // console.log(attandacneData)

    async function onLoadData() {
        await dispatch(getAllStudentAttandance())
        await dispatch(getStudentData())
    }

    useEffect(() => {
        onLoadData()
    }, []);

    return (
        <>
            <NavigateArrow />
            {
                attandacneData.map((attendance) => {
                    const attId = attendance.student_id
                    console.log(attendance)
                    const studData = studentData.filter(hello => attId === hello._id)
                    console.log(studData)
                })
            }
            <table className=' w-[70%] h-12 sticky top-0 left-60 bg-white mt-10'>
                <tbody>
                    <tr>
                        <th className=' border-2 text-xl capitalize border-black text-center'>name</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </>
    )
}

export default AllAttandance
