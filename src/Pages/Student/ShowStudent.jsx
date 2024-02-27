import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import StudentCard from '../../Constant/StudentCard'
import { useNavigate } from 'react-router-dom'
import NavigateArrow from '../../Component/NavigateArrow'
function ShowStudent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { studentData } = useSelector((state) => {
    return state.students
  })

  console.log(studentData)

  async function onLoadData() {
    await dispatch(getStudentData())
  }


  useEffect(() => {
    onLoadData()
  }, []);


  return (
    <>
      <div className='flex  items-center flex-col min-h-[100vh] bg-blue-200 relative'>
        <NavigateArrow />
        <table className=' w-[70%] h-12 sticky top-0 left-0 bg-white mt-10'>
          <tbody>
            <tr>
              <th className=' border-2 text-xl capitalize border-black text-center w-11 px-1'>roll</th>
              <th className=' border-2 text-xl capitalize border-black text-center w-80'>name</th>
              <th className=' border-2 text-xl capitalize border-black text-center w-96'>Email</th>
              <th className=' border-2 text-xl capitalize border-black text-center'>phone</th>
            </tr>
          </tbody>
        </table>
        {studentData.map((element, index) => {
          return <StudentCard key={element._id} data={element} index={index} />
        })}
      </div>
    </>
  )
}

export default ShowStudent
