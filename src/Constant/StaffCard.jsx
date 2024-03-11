import React from 'react'
// it is the staff member series
const StaffCard = ({ data }) => {
    return (
        <tr>
            <td className='px-5 py-5 border-b border-blue-200 bg-white text-sm'>
                <div className='flex items-center gap-10'>
                    <div className='flex-shrink-0 w-20 h-20 '>
                        <img
                            className='w-full h-full rounded-full'
                            src={data?.profile?.
                                secure_url
                            }
                            alt=''
                        />
                    </div>
                    <div className='ml-3'>
                        <p className='text-gray-900 whitespace-no-wrap capitalize text-xl'>
                            {
                                data.fullname
                            }
                        </p>
                    </div>
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap text-xl'>{data?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Teacher</span>
                </span>
            </td>
        </tr>
    )
}

export default StaffCard
