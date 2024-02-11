import React, { useEffect, useState } from 'react'
// import { nanoid } from 'nanoid'
function StudentCard({ data ,index}) {
    console.log(data)

    return (
        <table className=' w-[70%] h-12'>
            <tbody>
                <tr>
                    <td className='border-2  border-black text-center w-12 px-2'>{index+1}</td>
                    <td className='border-2  capitalize  border-black text-center w-80'>{data.name}</td>
                    <td className='border-2  border-black text-center w-96'>{data.email}</td>
                    <td className='border-2  border-black text-center'>{data.phone}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default StudentCard



















// swati chincholker
// 9579337183  


