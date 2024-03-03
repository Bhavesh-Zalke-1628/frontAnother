import React from 'react'

function StudentName({ name }) {
  
    return (
        <tr className=' relative top-20 left-48'>
            <td className=' border-2 border-black px-2 py-2 text-center text-xl'> {name.name}</td>
            {/* <td className=' border-2 border-black px-2 py-2 text-center'> {name.name}</td> */}
        </tr>
    )
}

export default StudentName
