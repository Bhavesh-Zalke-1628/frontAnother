import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../../Component/Footer'
import NavigateArrow from '../../Component/NavigateArrow'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllStudentAttandance } from '../../Redux/Slicees/AttendacneSlice'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'

import AllStudentCard from '../../Constant/AllStudentCard'
import StudentName from '../../Constant/StudentName'
function AllAttandance() {

    const date = new Date()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [availableStudentData, setAvailaableStudentData] = useState([])
    const [availableAttnadanceData, setAvailableAttnadanceData] = useState()

    const { studentData } = useSelector((state) => {
        return state.students
    })

    const attandacneData = useSelector((state) => {
        return state.attendance.allAttendance
    })


    async function onLoadData() {
        await dispatch(getAllStudentAttandance())
        await dispatch(getStudentData())
    }

    useEffect(() => {
        onLoadData()
    }, []);

    return (
        <>
            <div className=''>
                <NavigateArrow />
                <tr className=' relative top-20 left-56'>
                    <th className=' border-2 border-black px-36 py-2 italic text-2xl text-black capitalize' > name</th>
                    <th className=' border-2 border-black px-10 py-2 italic text-2xl text-black capitalize' >{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</th>
                </tr>
                <div className=' flex '>
                    <div>

                        {
                            studentData.map((ele) => {
                                return <StudentName name={ele} />
                            })
                        }
                    </div>
                    <div>

                        {
                            attandacneData.map((attendance) => {
                                const attId = attendance.student_id;
                                const studData = studentData.filter(hello => attId === hello._id);
                                studData.push(attendance);
                                return < AllStudentCard data={studData} />
                            },
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default AllAttandance
