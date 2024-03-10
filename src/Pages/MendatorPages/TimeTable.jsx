import React from 'react'
import NavigateArrow from '../../Component/NavigateArrow'
import Footer from '../../Component/Footer'

function TimeTable() {
    return (
        <>
            <NavigateArrow />
            <div className=' h-screen flex items-center justify-center flex-col'>
                <h1 className=' text-3xl font-bold capitalize font-serif mb-7'>College of management and computer science, yavatmal</h1>
                <p className=' capitalize font-semibold mb-8  text-2xl  '>bachelor of computer application part-3</p>
                <div className=' w-[80vw] h-[60vh] mb-20'>
                    <table className='w-full h-full'>
                        <thead>
                            <tr>
                                <th className='border-2 border-black px-2 py-5' >Days</th>
                                    <th className='border-2 uppercase border-black px-2 py-5' >11.00-12.25</th>
                                <th className='border-2  border-black px-2 py-5' >12:30-1:15</th>
                                <th className='border-2 border-black py-5' >1:15-2:00</th>
                                <th className='border-2 border-black px-2 py-5' >2:00-2:45</th>
                                <th className='border-2 border-black px-2 py-5' >2:45-3:15</th>
                                <th className='border-2 border-black px-2 py-5' >3:15-4:00</th>
                                <th className='border-2 border-black px-2 py-5' >4.00-4:45</th>
                                <th className='border-2 border-black px-2 py-5' >4:45-5:30</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >Monday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >mmt</th>
                                <th className='border-2 uppercase border-black py-5' colSpan={2}> lab 2</th>
                                <th className='border-2 uppercase border-black px-2 py-5' rowSpan={6} >RECESS</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >.net</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >st</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >adbms</th>
                            </tr>
                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >thuesday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >mmt</th>
                                <th className='border-2 uppercase border-black py-5' colSpan={2}> lab 2</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >.net</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >st</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >adbms</th>
                            </tr>
                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >wednesday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >.net</th>
                                <th className='border-2 uppercase border-black py-5'> cst</th>
                                <th className='border-2 uppercase border-black py-5'> adbms</th>
                                <th className='border-2 uppercase border-black px-2 py-5' colSpan={2} >lab 1</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >mmt</th>
                            </tr>

                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >thursday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >.net</th>
                                <th className='border-2 uppercase border-black py-5'> cst</th>
                                <th className='border-2 uppercase border-black py-5'>st</th>
                                <th className='border-2 uppercase border-black px-2 py-5' colSpan={2} >lab 1</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                            </tr>

                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >friday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >lab 3(project)</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >cst</th>
                                <th className='border-2 uppercase border-black py-5'>.net</th>
                                <th className='border-2 uppercase border-black py-5'>adbms</th>
                                <th className='border-2 uppercase border-black px-2 py-5'>mmt</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >st</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                            </tr>

                            <tr>
                                <th className='border-2 uppercase border-black px-2 py-5' >saturday</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >lab 3(project)</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >cst</th>
                                <th className='border-2 uppercase border-black py-5'>.net</th>
                                <th className='border-2 uppercase border-black py-5'>adbms</th>
                                <th className='border-2 uppercase border-black px-2 py-5'>mmt</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >st</th>
                                <th className='border-2 uppercase border-black px-2 py-5' >--</th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TimeTable
