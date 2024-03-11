import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createStudent } from '../../Redux/Slicees/StudentSlice';
import NavigateArrow from '../../Component/NavigateArrow';
import Footer from '../../Component/Footer';
import registerStudent from '../../assets/Images/registerStudent.png'
import TypeWriter from 'typewriter-effect'
function CreateStudent() {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  // theam changer 
  const theam = useSelector((state) => { return state.Theam })

  // state for the studentData 
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  // hadnle user chagnes in input field 
  function handleUserInput(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    })
  }

  // function to createStudent 
  async function createNewAccount(event) {
    event.preventDefault();

    // chaeck all fields F
    if (!data.name || !data.email || !data.phone) {
      toast.error("All required")
      return;
    }

    // formData instance 
    const formData = new FormData()
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('phone', data.phone)

    const response = dispatch(createStudent(formData))
    if (response?.payload?.success)
      // response is success the navigate to '/show-student'
      navigate('/show-student')
    setData({
      name: "",
      email: "",
      phone: "",
    })
  }
  return (

    <>
      <div className={' w-full flex items-center justify-center px-20' + (theam ? "" : " text-white bg-black border-none")}>
        <NavigateArrow />
        <div>
          <img
            src={registerStudent}
            alt="register student img"
            className=' w-[45vw]'
          />
        </div>
        <form
          onSubmit={createNewAccount}
          noValidate
          className='h-[70%] w-96 bg-blue-400  rounded-xl py-3 px-7 flex flex-col gap-5 shadow-[0_0_10px_black]'>
          <h1 className=' text-3xl capitalize text-white text-center font-semibold italic'>

            {/* tyope writer for the form heading */}
            <TypeWriter
              options={{
                strings: ['Student Registration'],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                delay: 100,
                pauseFor: 1000,
                cursor: "👉🏻",
              }}
            />
          </h1>

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
              className='px-2 bg-transparent border border-white rounded-md outline-none'
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
              className='px-2 bg-transparent border border-white text-black rounded-md outline-none'
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
              className=' px-2 text-black bg-transparent border border-white rounded-md outline-none'
            />
          </div>
          <button className=' mt-4 text-black border rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600 hover:border-white hover:border-2  hover:text-white hover:border-none transition-all ease-in duration-300 outline-none border-white' type='submit'>Create Student</button>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default CreateStudent
