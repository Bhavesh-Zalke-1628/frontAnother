import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function Attendance() {

    const studentData = useSelector((state) => {
        return state.student.studentData
    })
    console.log(studentData)
    console.log(studentData)
    return (
        <div>
        </div>
    )
}

export default Attendance
