import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import StaffCard from '../../Constant/StaffCard'
import { getAllAdminData } from '../../Redux/Slicees/AdminSlice'
import { data } from 'autoprefixer'
const Staff = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // theam chenger 
    const theam = useSelector((state) => { return state.Theam })

    // get the admin data 
    const AdminData = useSelector((state) => {
        return state?.admin?.AdminData
    })

    // dispatch data
    async function getData() {
        await dispatch(getAllAdminData())
    }

    // useEffect to render at the every changes
    useEffect(() => {
        getData()
    }, [])

    return (
        <body className='antialiased font-sans bg-gray-200'>
            <div className='container mx-auto px-4 sm:px-8'>
                <div className='py-8'>
                    <div>
                        <h2 className='text-2xl font-semibold leading-tight'>Staff members </h2>
                    </div>
                    <div className='my-2 flex sm:flex-row flex-col'>
                    </div>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr >
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-bold text-gray-600 uppercase tracking-wider'>
                                            User
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-bold text-gray-600 uppercase tracking-wider'>
                                            Email
                                        </th>
                                        <th className='px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left font-bold text-gray-600 uppercase tracking-wider'>
                                            role
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        AdminData &&
                                        AdminData.map((ele) => {
                                            console.log(ele)
                                            return <StaffCard data={ele} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Staff