import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getData } from '../../Redux/Slicees/StudentSlice'
import StudentCard from '../../Constant/StudentCard'
import Footer from '../../Component/Footer'
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

function ShowStudent() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const studentData = useSelector((state) => {
    return state.student.studentData
  })

const availableData = studentData

  console.log('studentData >', availableData)

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
          className=' text-5xl text-black hover:text-red-600 cursor-pointer'
        />

        <table className=' w-[70%] h-12 sticky top-0 left-0 bg-white '>
          <tr>
            <th className=' border-2 text-xl capitalize border-black text-center w-11 px-1'>roll</th>
            <th className=' border-2 text-xl capitalize border-black text-center w-80'>name</th>
            <th className=' border-2 text-xl capitalize border-black text-center w-96'>Email</th>
            <th className=' border-2 text-xl capitalize border-black text-center'>phone</th>
          </tr>
        </table>
        {availableData.map((element) => {
          return <StudentCard key={element._id} data={element} />
        })}
      </div>
    </>
  )
}

export default ShowStudent
