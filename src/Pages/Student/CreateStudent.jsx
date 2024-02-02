import React, { useState } from 'react'
import Footer from '../../Component/Footer'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NavigateArrow from '../../Component/NavigateArrow';
import Header from '../../Component/Header';
import { BsPhone } from 'react-icons/bs';
import { createStudent } from '../../Redux/Slicees/StudentSlice';

function CreateStudent() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [studentData, setStudentData] = useState({
    name: "",
    email: "",
    phone: ""
  })


  function handleUserInput(e) {
    const { name, value } = e.target;
    setStudentData({
      ...studentData,
      [name]: value
    })
  }
  async function createNewStudent(event) {
    event.preventDefault();
    if (!studentData.name || !studentData.email || !studentData.phone) {
      toast.error("All fields are required");
      return
    }


    const formData = new FormData()

    formData.append('name', studentData.name)
    formData.append('email', studentData.email)
    formData.append('phone', studentData.phone)

    const response = dispatch(createStudent(formData))
    if (response?.payload?.success)
      navigate('/show-student')

    setStudentData({
      name: "",
      email: "",
      phone: ""
    })
  }
  return (

    <>
      {/* <Header/> */}
      <div className=' w-full h-screen flex items-center justify-center'>
        <NavigateArrow />
        <form
          onSubmit={createNewStudent}
          noValidate
          className='flex text-black flex-col w-[30%] bg-blue-300 px-4 py-10 gap-7 rounded-lg shadow-[0_0_10px_black]'>
          <div className=' flex flex-col gap-2 mt-2'>
            <h1 className=' text-5xl text-center font-semibold'>Student Form</h1>
            <label htmlFor='name' className=' text-black text-xl font-semibold '>
              Name
            </label>
            <input
              type="text"
              required
              name='name'
              id='name'
              placeholder='Enter your name'
              value={studentData.name}
              onChange={handleUserInput}
              className='px-2  py-1 bg-transparent border border-white rounded-md'
            />
          </div>
          <div className=' flex flex-col gap-2 mt-2'>
            <label className=' text-black font-semibold text-xl'>
              Eamil
            </label>
            <input
              type='email'
              required
              name='email'
              id='email'
              placeholder='Enter your email'
              value={studentData.email}
              onChange={handleUserInput}
              className='px-2 py-1 bg-transparent border border-white rounded-md'
            />
          </div>
          <div className=' flex flex-col gap-2 mt-2'>
            <label className=' text-black font-semibold text-xl'>
              Phone
            </label>
            <input
              type='text'
              required
              name='phone'
              id='phone'
              placeholder='Enter your phone'
              value={studentData.phone}
              onChange={handleUserInput}
              className='text-black py-1 px-2 bg-transparent border border-white rounded-md'
            />
          </div>
          <button className=' text-2xl border-2 rounded-lg cursor-pointer bg-white hover:bg-blue-400 transition-all ease-in-out duration-300 py-1 font-semibold' type='submit' >Create Student</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CreateStudent
