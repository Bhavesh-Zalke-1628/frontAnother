import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Footer from '../../Component/Footer';
import NavigateArrow from '../../Component/NavigateArrow';
import logInPhoto from '../../assets/Images/logInPhoto.png'
import { loginThunk } from '../../Redux/Slicees/AdminSlice';

function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // theam chagner 
  const theam = useSelector((state) => { return state.Theam })
  console.log(theam)

  // state for the enter's data
  const [signInData, setSignInData] = useState({
    email: "",
    password: ""
  })

  // handle the user input
  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignInData({
      ...signInData,
      [name]: value
    })
  }

// funtion for thee login process
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
      <div className={' w-[100vw] absolute right-0 min-h-[90vh] flex items-center justify-evenly gap-20'+ (theam ? "": " text-white bg-black border-none")}>
        <NavigateArrow />
        <img
          className=' w-[40%]'
          src={logInPhoto} alt="" />
        <form
          noValidate
          onSubmit={onLogin}
          className='min-h-[50vh] w-96 bg-blue-400  rounded-xl px-7 flex flex-col gap-3 py-7'>

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
