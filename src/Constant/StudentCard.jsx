import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

// It is the show the student in table
function StudentCard({ data, index }) {
    const theam = useSelector((state) => { return state.Theam })
    return (
        <table className={' w-[70%] h-12' + (theam ? "" : " text-white bg-black border-white")}>
            <tbody>
                <tr>
                    <td className={'border-2  border-black text-center w-12 px-2' + (theam ? "" : " text-white bg-black border-white")}>{index + 1}</td>
                    <td className={'border-2  capitalize  border-black text-center w-80' + (theam ? "" : " text-white bg-black border-white")}>{data.name}</td>
                    <td className={'border-2  border-black text-center w-96' + (theam ? "" : " text-white bg-black border-white")}>{data.email}</td>
                    <td className={'border-2  border-black text-center' + (theam ? "" : " text-white bg-black border-white")}   >{data.phone}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default StudentCard



















// swati chincholker
// 9579337183  


