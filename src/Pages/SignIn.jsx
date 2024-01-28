import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout';
import { Link } from 'react-router-dom';
function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  })

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value
    })
  }


  async function onLogin(event) {
    event.preventDefault();

    if (!signInData.email || !signInData.password) {
      toast.error("Plase Filled all the details")
    }

    // dispatch the data 

    const res = await dispatch(signin(signInData))
    if (res?.payload?.success)
      navigate('/')
    setSignInData({
      email: "",
      password: ""
    })
  }

  return (
    <HomeLayout>
      <div className=' w-[100vw] h-[80vh] border border-black flex items-center justify-center'>
        <form
          noValidate className='h-[65%] w-96 bg-blue-400  rounded-xl py-3 px-7 flex flex-col'>
          <h1 className=' text-3xl capitalize text-white text-center'>Log in form</h1>

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
              value={signInData.email}
              onChange={handleUserInput}
              className='px-2 bg-transparent border border-white rounded-md'
            />
          </div>
          <div className=' flex flex-col gap-2 mt-2'>
            <label className=' text-white text-xl'>
              Password
            </label>
            <input
              type='password'
              required
              name='password'
              id='password'
              placeholder='Enter your password'
              value={signInData.password}
              onChange={handleUserInput}
              className=' px-2 text-black bg-transparent border border-white rounded-md'
            />
          </div>
          <button className=' mt-4 text-black border border-black rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600' type='submit'>Log in</button>
          {/* <p className=' mt-2 text-center text-xm'>Already have an account ?<Link to='/signin' className=' underline text-xl font-semibold'> Login</Link></p> */}
        </form>
      </div>
    </HomeLayout>
  )
}

export default SignIn
