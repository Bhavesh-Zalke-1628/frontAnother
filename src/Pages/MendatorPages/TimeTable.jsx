import React from 'react'

const TimeTable = () => {
    return (
        <div class='flex flex-col'>
            <div class='overflow-x-auto sm:mx-0.5 lg:mx-0.5'>
                <div class='py-2 inline-block min-w-full sm:px-6 lg:px-8'>
                    <div class='overflow-hidden'>
                        <table class='min-w-full'>
                            <thead class='bg-white border-b'>
                                <tr>
                                    <th
                                        scope='col'
                                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        #
                                    </th>
                                    <th
                                        scope='col'
                                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        First
                                    </th>
                                    <th
                                        scope='col'
                                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Last
                                    </th>
                                    <th
                                        scope='col'
                                        class='text-sm font-medium text-gray-900 px-6 py-4 text-left'
                                    >
                                        Handle
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class='bg-gray-100 border-b'>
                                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        1
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Mark
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Otto
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        @mdo
                                    </td>
                                </tr>
                                <tr class='bg-white border-b'>
                                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        2
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Jacob
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Dillan
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        @fat
                                    </td>
                                </tr>
                                <tr class='bg-gray-100 border-b'>
                                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        3
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Mark
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Twen
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        @twitter
                                    </td>
                                </tr>
                                <tr class='bg-white border-b'>
                                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        4
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Bob
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        Dillan
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        @fat
                                    </td>
                                </tr>
                                <tr class='bg-gray-100 border-b'>
                                    <td class='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
                                        5
                                    </td>
                                    <td
                                        colspan='2'
                                        class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center'
                                    >
                                        Larry the Bird
                                    </td>
                                    <td class='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
                                        @twitter
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TimeTable