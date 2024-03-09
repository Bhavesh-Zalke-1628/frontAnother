import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import NavigateArrow from '../../Component/NavigateArrow';
import logIn from '../../assets/Images/logIn.png'
import { loginThunk } from '../../Redux/Slicees/AdminSlice';

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

    const res = await dispatch(loginThunk(signInData))
    if (res?.payload?.success)
      navigate('/admin/profile')
    setSignInData({
      email: "",
      password: ""
    })
  }

  return (
    <>
      <div className=' bg-blue-200 w-[100vw] absolute right-0 min-h-[90vh] flex items-center justify-evenly gap-20'>
      <NavigateArrow />
        <img
        className=' w-[45%]'
        src={logIn} alt="" />
        <form
          noValidate
          onSubmit={onLogin}
          className='min-h-[70vh] w-96 bg-blue-400  rounded-xl px-7 flex flex-col gap-3 py-3'>
         
          <h1 className=' text-3xl capitalize text-white text-center font-semibold mt-7 '>Log in form</h1>

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
              className='px-2 bg-transparent border border-white rounded-md outline-none  '
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
              className=' px-2 text-black bg-transparent border border-white outline-none rounded-md'
            />
          </div>
          <button className=' mt-4 text-black border border-black rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600' type='submit'>Sign In</button>
          <p className=' text-center text-lg'>Do not have account
            {" ?   "}
            <span className=' text-center text-blue-900 underline text-xl mt-10 hover:text-white'>
              <Link to='/signup'>
                SignUp
              </Link>
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default SignIn
