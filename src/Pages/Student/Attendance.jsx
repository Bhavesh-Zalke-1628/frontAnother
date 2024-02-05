import React from 'react'
import NavigateArrow from '../../Component/NavigateArrow'
import Footer from '../../Component/Footer'

function Attendance() {
    return (
        <>
            {/* <NavigateArrow /> */}
            <div className=' w-full h-screen'>

                <table className=' w-[100%] h-[100%] sticky top-0 left-0 bg-white flex items-center justify-center flex-col'>
                    <tr>
                        <th className=' border-2 text-xl capitalize border-black text-center w-20'>Roll</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-96'>name</th>
                        <th className=' border-2 text-xl capitalize border-black text-center w-96'>Attendance</th>
                    </tr>
                    <tr>
                        <td className=' border-2 text-xl capitalize border-black text-center w-20'>1</td>
                        <td className=' border-2 text-xl capitalize border-black text-center w-96'>bhavesh</td>
                        <td className=' border-2 text-xl capitalize border-black text-center w-96'>
                            <div className=' flex flex-row gap-2 items-center justify-center'>
                                <input type='radio' name="" id="" />
                                <label>
                                    Present
                                </label>
                                <input type='radio' name="" id="" />
                                <label>
                                    Absent
                                </label>
                            </div>
                        </td>
                    </tr>
                </table>

            </div>
            <Footer />
        </>
    )
}

export default Attendance
