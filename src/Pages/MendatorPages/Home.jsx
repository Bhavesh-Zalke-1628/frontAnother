import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'
import home from '../../assets/Images/home.png'
function Home() {
    return (
        <HomeLayout>
            <div className='  flex items-center justify-center '>
                <div className=' h-[70vh] flex flex-col gap-4  items-center justify-center'>
                    <h1 className=' text-9xl font-medium flex  shadow-inner'>Class <span className=' text-blue-400'>Room</span></h1>
                    <p className=' w-[80%] font-semibold text-xl ml-20'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet ex perferendis!</p>
                </div>
                <div className='relative '>
                    <img
                        className=' mt-10 h-[80vh]'
                        src={home}
                        alt="Home Page imgF" />

                </div>
            </div>
        </HomeLayout>
    )
}

export default Home
