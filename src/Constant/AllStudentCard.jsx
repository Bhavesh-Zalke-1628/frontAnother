import React from 'react'

function AllStudentCard({ attandacne, student }) {
    console.log(attandacne)
    console.log(student)
    return (
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
            </tbody>
        </table>

    )
}

export default AllStudentCard
