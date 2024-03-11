import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStudentData } from '../../Redux/Slicees/StudentSlice'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'
import StudentCard from '../../Constant/StudentCard'
import { useNavigate } from 'react-router-dom'
import NavigateArrow from '../../Component/NavigateArrow'
// show student data
function ShowStudent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // get the studentData 
  const { studentData } = useSelector((state) => {
    return state.students
  })
  // theam changer 
  const theam = useSelector((state) => { return state.Theam })

  async function onLoadData() {
    await dispatch(getStudentData())
  }


  useEffect(() => {
    onLoadData()
  }, []);


  return (
    <>
      <div className={'flex  items-center flex-col min-h-[100vh]  relative' + (theam ? "" : " text-black bg-black border-black")}>
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
          console.log('element', element)
          return <StudentCard key={element._id} data={element} index={index} />
        })}
      </div>
    </>
  )
}

export default ShowStudent
