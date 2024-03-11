import React from 'react'

// this component is used in show the by default name of the student in attandance list
function StudentName({ name }) {

    return (
        
        <tr className=' relative top-20 left-56'>
            <td className=' border-2 border-black px-[3.4vw] py-2 text-center text-xl'> {name.name}</td>
            {/* <td className=' border-2 border-black px-2 py-2 text-center'> {name.name}</td> */}
        </tr>
    )
}

export default StudentName
