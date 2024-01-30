import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData } from '../../Redux/Slicees/StudentSlice'
import StudentCard from '../../Component/StudentCard'
import HomeLayout from '../../Layout/HomeLayout'
import Footer from '../../Component/Footer'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function CreateStudent() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { studentData } = useSelector((state) => {
    return state.student
  })

  const { numberOfStudent } = useSelector((state) => { 
    return state.student
  })
console.log('numberOfStudent >', numberOfStudent)
  console.log(studentData)
  async function onLoad() {
    dispatch(getData())
  }


  useEffect(() => {
    onLoad()
  }, []);
  return (
    <>
      <div className='flex items-center justify-center flex-col  bg-blue-200 relative'>
        <FaRegArrowAltCircleLeft
          onClick={() => {
            navigate(-1)
          }}
          className=' text-3xl absolute top-7 left-10 hover:text-white cursor-pointer'
        />

        <table className=' w-[70%] h-12 sticky top-0 left-0 '>
          <tr>
            <th className=' border-2 text-xl capitalize border-black text-center w-11 px-1'>roll</th>
            <th className=' border-2 text-xl capitalize border-black text-center w-80'>name</th>
            <th className=' border-2 text-xl capitalize border-black text-center w-96'>Email</th>
            <th className=' border-2 text-xl capitalize border-black text-center'>phone</th>
          </tr>
        </table>
        {studentData.map((element) => {
          return <StudentCard key={element._id} data={element} />
        })}
        {console.log(studentData[1])}
      </div>
    </>
  )
}

export default CreateStudent
