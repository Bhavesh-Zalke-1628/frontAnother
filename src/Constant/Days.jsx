import React from 'react'

function Days() {
    const date = new Date()
    // cons 
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

    return (
        <div>

            <div className=' flex gap-4 mt-2'>
                <div className=' flex flex-col items-center'>
                    <div className=' w-10 h-10 bg-purple-500 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[0]}</div>
                    <div>
                        <h1>{date.getDate() - 5}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[1]}</div>
                    <div>
                        <h1>{date.getDate() - 4}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[2]}</div>
                    <div>
                        <h1>{date.getDate() - 3}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-red-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[3]}</div>
                    <div>
                        <h1>{date.getDate() - 2}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[4]}</div>
                    <div>
                        <h1>{date.getDate() - 1}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-green-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[5]}</div>
                    <div>
                        <h1>{date.getDate()}/{date.getMonth()}</h1>
                    </div>
                </div>
                <div>
                    <div className=' w-10 h-10 bg-red-400 rounded-full cursor-pointer capitalize text-center text-white flex items-center justify-center'>{days[6]}</div>
                    <div>
                        <h1>{date.getDate() + 1}/{date.getMonth()}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Days
