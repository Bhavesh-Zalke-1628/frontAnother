import React from 'react'
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
function Footer() {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <div className=' w-full h-20 flex items-center justify-between px-20  bg-blue-400 absolute bottom-0'>
            <p className=' font-semibold'>
                copyright {year} | All rights  reserved
            </p>
            <div className=' flex gap-7'>
                <a className=' text-black text-2xl hover:text-white cursor-pointer'> <BsTwitter /></a>
                <a className=' text-black text-2xl hover:text-white cursor-pointer'> <BsInstagram /></a>
                <a className=' text-black text-2xl hover:text-white cursor-pointer'> <BsFacebook /></a>
                <a className=' text-black text-2xl hover:text-white cursor-pointer'> <BsGithub /></a>
            </div>
        </div>
    )
}

export default Footer
