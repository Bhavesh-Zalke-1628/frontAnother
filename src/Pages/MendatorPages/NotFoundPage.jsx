import React from 'react'
import { useNavigate } from 'react-router-dom'

// this is the not found page
function NotFoundPage() {

    // theam chenger 
    const theam = useSelector((state) => { return state.Theam })
    const navigate = useNavigate()
    return (
        <div className=' w-full h-screen flex gap-3 flex-col items-center justify-center'>
            <h1 className=' text-9xl font-semibold'>4<span className=' text-blue-400'>O</span>4</h1>
            <p className=' text-3xl font-semibold'>Page not Found</p>

            <button
                className=' text-2xl font-bold border border-blue-400 px-5 py-2'
                onClick={() => {
                    navigate(-1)
                }}>
                Back
            </button>
        </div>
    )
}

export default NotFoundPage
