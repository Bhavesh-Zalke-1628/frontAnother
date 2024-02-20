import React from 'react'
import HomeLayout from '../../Layout/HomeLayout'

function Home() {
    return (
        <HomeLayout>
            <div className=' flex items-center justify-center px-5'>
                <div className=' h-[70vh] flex flex-col gap-4 px-10 items-center justify-center'>
                    <h1 className=' text-9xl font-medium flex'>Class <span className=' text-orange-400'>Room</span></h1>
                    <p className=' w-[80%] font-semibold text-xl ml-20'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. amet ex perferendis!</p>
                </div>
                <div className='relative '>
                    <img
                        className=' mt-10 w-[500] h-[520px]'
                        src='https://img.freepik.com/free-photo/front-view-young-beautiful-lady-white-t-shirt-black-jeans-coat-holding-green-book-white_140725-18660.jpg'
                        alt="Home Page imgF" />
                        
                </div>
            </div>
        </HomeLayout>
    )
}

export default Home
