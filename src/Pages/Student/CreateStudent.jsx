import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStudent } from '../../Redux/Slicees/StudentSlice';
import NavigateArrow from '../../Component/NavigateArrow';
import Footer from '../../Component/Footer';

function CreateStudent() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  function handleUserInput(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }
  async function createNewAccount(event) {
    event.preventDefault();

    if (!data.name || !data.email || !data.phone) {
      toast.error("All required")
      return;
    }

    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone)

    const response = dispatch(createStudent(formData))
    if (response?.payload?.success)
      console.log('this is the payload data >', response?.payload?.success)
    // navigate('/show-student')
    setData({
      name: "",
      email: "",
      phone: "",
    })
  }
  return (

    <>
      <div className=' w-[100vw] h-[80vh] flex items-center justify-center'>
        <NavigateArrow />
        <form
          onSubmit={createNewAccount}
          noValidate
          className='h-[80%] w-96 bg-blue-400  rounded-xl py-3 px-7 flex flex-col'>
          <h1 className=' text-3xl capitalize text-white text-center'>registration form</h1>

          <div className=' flex flex-col gap-2 mt-2'>
            <label htmlFor='name' className=' text-white text-xl'>
              Name
            </label>
            <input
              type="text"
              required
              name='name'
              id='name'
              placeholder='Enter your name'
              value={data.name}
              onChange={handleUserInput}
              className='px-2 bg-transparent border border-white rounded-md'
            />
          </div>
          <div className=' flex flex-col gap-2 mt-2'>
            <label className=' text-white text-xl'>
              Eamil
            </label>
            <input
              type='email'
              required
              name='email'
              id='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleUserInput}
              className='px-2 bg-transparent border border-white rounded-md'
            />
          </div>
          <div className=' flex flex-col gap-2 mt-2'>
            <label className=' text-white text-xl'>
              Phone
            </label>
            <input
              type='number'
              required
              name='phone'
              id='phone'
              placeholder='Enter your phone'
              value={data.phone}
              onChange={handleUserInput}
              className=' px-2 text-black bg-transparent border border-white rounded-md'
            />
          </div>
          <button className=' mt-4 text-black border border-black rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600' type='submit'>Create Student</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CreateStudent
