import React from 'react'

function AllStudentCard({ data }) {
    return (
        <div className=' flex'>
            
            <tr className='relative top-20 left-56'>
                <td className=' border-2 text-xl capitalize border-black text-center px-9 py-2'>
                    {
                        data[1].present == true ? "✅" : "❌"
                    }
                </td>
            </tr>

            <tr className='relative top-20 left-56'>
                <td className=' border-2 text-xl capitalize border-black text-center px-9 py-2'>
                    {
                        data[1].present == true ? "✅" : "❌"
                    }
                </td>
            </tr>
        </div>
    )
}

export default AllStudentCard
