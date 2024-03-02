import React, { useCallback, useEffect } from 'react'
import Footer from '../../Component/Footer'
import NavigateArrow from '../../Component/NavigateArrow'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllStudentAttandance } from '../../Redux/Slicees/AttendacneSlice'

function AllAttandance() {
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const data = useSelector((state) => {
        return state
    })

     

    useEffect(() => {
        dispatch(getAllStudentAttandance())
    }, []);

    return (
        <>
            <NavigateArrow />
            <table className=' w-[70%] h-12 sticky top-0 left-60 bg-white mt-10'>
                <tbody>
                    <tr>
                        <th className=' border-2 text-xl capitalize border-black text-center'>name</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24'>Date</th>
                    </tr>
                    <tr>
                        <th className=' border-2 text-xl capitalize border-black text-center'></th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>fd</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-24 '>Date</th>
                    </tr>
                </tbody>
            </table>
            {/* <AllStudent /> */}
            <Footer />
        </>
    )
}

export default AllAttandance
