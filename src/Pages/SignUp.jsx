import React, { useState } from 'react'
import HomeLayout from '../Layout/HomeLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { createAccount } from '../Redux/Slicees/AdminSlice'
function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: ""
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

        if (!data.fullname || !data.email || !data.password) {
            toast.error("All required")
            return;
        }

        const formData = new FormData()
        formData.append('fullname', data.fullname)
        formData.append('email', data.email)
        formData.append('password', data.password)

        const response = dispatch(createAccount(formData))
        if (response?.payload?.success)
            navigate('/')
        setData({
            fullname: "",
            email: "",
            password: ""
        })
    }
    return (
        <HomeLayout>
            <div className=' w-[100vw] h-[80vh] border border-black flex items-center justify-center'>
                <form
                    onSubmit={createNewAccount}
                    noValidate className='h-[65%] w-96 bg-blue-400  rounded-xl py-3 px-7 flex flex-col'>
                    <h1 className=' text-3xl capitalize text-white text-center'>registration form</h1>
                    <div className=' flex flex-col gap-2 mt-2'>
                        <label htmlFor='fullname' className=' text-white text-xl'>
                            Name
                        </label>
                        <input
                            type="text"
                            required
                            name='fullname'
                            id='fullname'
                            placeholder='Enter your name'
                            value={data.fullname}
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
                            Password
                        </label>
                        <input
                            type='password'
                            required
                            name='password'
                            id='password'
                            placeholder='Enter your password'
                            value={data.password}
                            onChange={handleUserInput}
                            className=' px-2 text-black bg-transparent border border-white rounded-md'
                        />
                    </div>
                    <button className=' mt-4 text-black border border-black rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600' type='submit'>Register</button>
                    <p className=' mt-2 text-center text-xm'>Already have an account ?<Link to='/signin' className=' underline text-xl font-semibold'> Login</Link></p>
                </form>
            </div>
        </HomeLayout>
    )
}

export default SignUp
