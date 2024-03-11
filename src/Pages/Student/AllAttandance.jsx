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

    // theam chenger 
    const theam = useSelector((state) => { return state.Theam })

    const [availableStudentData, setAvailaableStudentData] = useState([])
    const [availableAttnadanceData, setAvailableAttnadanceData] = useState()

    // get the student data from state
    const { studentData } = useSelector((state) => {
        return state.students
    })

    // get the attandacneData
    const attandacneData = useSelector((state) => {
        return state.attendance.allAttendance
    })

    //  function to load the data 
    async function onLoadData() {
        await dispatch(getAllStudentAttandance())
        await dispatch(getStudentData())
    }

    // useEffect
    useEffect(() => {
        onLoadData()
    }, []);

    return (
        <>
            <div    >
                <NavigateArrow />
                <tr className=' relative top-20 left-56'>
                    <th className=' border-2 border-black px-[5.3vw] py-2 italic text-2xl text-black capitalize' > name</th>
                    <th className=' border-2 border-black px-2 py-2 italic text-xl text-black capitalize' >{`${date.getDate() - 1}/${date.getMonth()}/${date.getFullYear()}`}</th>
                    {/* <th className=' border-2 border-black px-2 py-2 italic text-xl text-black capitalize' >{`${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`}</th> */}
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
                            // map on attandacneData 
                            attandacneData.map((attendance, index) => {
                                // get the attendance id 
                                const attId = attendance.student_id;

                                // filter on the studentData
                                const studData = studentData.filter(hello => attId === hello._id);

                                // push attendance in studData 
                                studData.push(attendance)

                                // return the component AllStudentCard 
                                return < AllStudentCard data={studData} number={index} />
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
