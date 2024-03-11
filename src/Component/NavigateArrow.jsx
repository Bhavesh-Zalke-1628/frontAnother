import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
// this is the naviagete arrorw at the -1 position 
function NavigateArrow() {
    const navigate = useNavigate()
    return (
        <>
            <IoArrowBackCircleOutline
                onClick={
                    () => {
                        navigate(-1)
                    }
                }
                className=' text-5xl absolute top-10 left-20  cursor-pointer hover:text-blue-500 transition-all ease-in-out duration-300'
            />
        </>
    )
}

export default NavigateArrow
