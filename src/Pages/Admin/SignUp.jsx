import React, { useState } from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
import { createAccount } from '../../Redux/Slicees/AdminSlice'
import { BsPersonCircle } from 'react-icons/bs'
import Footer from '../../Component/Footer'
import NavigateArrow from '../../Component/NavigateArrow'
import { isEmail, isPassword } from '../../Helper/regesxMatcher'


function SignUp() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    // theam changer
    const theam = useSelector((state) => { return state.Theam })
    console.log(theam)
    const [previewImage, setPreviewImage] = useState("");
    const [data, setData] = useState({
        fullname: "",
        email: "",
        password: "",
        profile: ""
    })

    // to track the changes in fileds
    function handleUserInput(e) {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }

    // handle the imageUpload
    async function getImage(event) {
        event.preventDefault();
        const uploadImg = event.target.files[0]
        if (uploadImg) {
            setData({
                ...data,
                profile: uploadImg
            });
            const fileReader = new FileReader()

            fileReader.readAsDataURL(uploadImg)
            fileReader.addEventListener('load', async function () {
                setPreviewImage(this.result)
            })
        }
        console.log('hello')
    }
    async function createNewAccount(event) {
        event.preventDefault();

        // check the fields
        if (!data.fullname || !data.email || !data.password) {
            toast.error("All required")
            return;
        }
        // checking name field length
        if (data.fullName.length < 5) {
            toast.error("Name should be atleast of 5 characters")
            return;
        }
        // checking valid email
        if (!isEmail(data.email)) {
            toast.error("Invalid email id");
            return;
        }
        // checking password validation
        if (!isPassword(data.password)) {
            toast.error("Password should be 6 - 16 character long with atleast a number and special character");
            return;
        }

        // create an formData instance for the send data to slice
        const formData = new FormData()
        formData.append('fullname', data.fullname)
        formData.append('email', data.email)
        formData.append('password', data.password)
        formData.append('profile', data.profile)

        // get response for the function
        const response = dispatch(createAccount(formData))

        if (response?.payload?.success)
            console.log('this is the payload data >', response?.payload?.success)

        // suucessfull then navigate to home ('/') page
        navigate('/')
        setData({
            fullname: "",
            email: "",
            password: "",
            profile: ""
        })
    }
    return (
        <>
            <div className={'flex justify-center items-center' + (theam ? "" : " text-white bg-black border-none")}>
                <NavigateArrow />
                <div>
                    <img
                        src={signUpPhoto}
                        alt="signUpPhoto"
                        className='w-[60vw] h-[100vh]'
                    />
                </div>
                <form
                    onSubmit={createNewAccount}
                    noValidate
                    className=' w-80 bg-blue-400 rounded-xl py-3 px-7 flex flex-col'>
                    <h1 className=' text-3xl capitalize text-white text-center'>registration form</h1>
                    <label htmlFor="image_uploads" className="cursor-pointer">
                        {previewImage ? (
                            <img className="w-24 h-24 rounded-full m-auto" src={previewImage} />
                        ) : (
                            <BsPersonCircle className='w-24 h-24 rounded-full m-auto' />
                        )}
                    </label>
                    <input
                        onChange={getImage}
                        className="hidden"
                        type="file"
                        name="image_uploads"
                        id="image_uploads"
                        accept=".jpg, .jpeg, .png, .svg"
                    />
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
                    <button className=' mt-4 text-black border border-black rounded-lg  py-2 text-xl font-semibold cursor-pointer hover:bg-blue-600 hover:text-white hover:border-white hover:border-2 transition-all ease-in-out duration-300' type='submit'>Register</button>
                    <p className=' mt-2 text-center text-xm'>Already have an account ?<Link to='/signin' className=' underline text-xl hover:text-white'> Login</Link></p>
                </form>
            </div >
            <Footer />
        </>
    )
}

export default SignUp
