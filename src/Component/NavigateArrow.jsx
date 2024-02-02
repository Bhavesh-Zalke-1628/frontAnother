import React from 'react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

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
                className=' text-5xl absolute top-10 left-20  cursor-pointer hover:text-blue-400'
            />
        </>
    )
}

export default NavigateArrow