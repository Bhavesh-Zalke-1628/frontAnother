import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Attendance from './Pages/Student/Attendance'
import ShowStudent from './Pages/Student/ShowStudent'
import CreateStudent from './Pages/Student/CreateStudent'
import SignIn from './Pages/Admin/SignIn'
import SignUp from './Pages/Admin/SignUp'
import AdminProfile from './Pages/Admin/AdminProfile'
import Home from './Pages/MendatorPages/Home'
import NotFoundPage from './Pages/MendatorPages/NotFoundPage'
import AllAttandance from './Pages/Student/AllAttandance'
import Staff from './Pages/MendatorPages/Staff'
import TimeTable from './Pages/MendatorPages/TimeTable'

function App() {
  return (
    <>
      <Routes>

        {/* Home Route  */}
        <Route path='' element={<Home />}></Route>

        {/* Staff Page  */}
        <Route path='/staff' element={<Staff />}></Route>
        <Route path='/timetable' element={<TimeTable />}></Route>

        {/* Admin Route */}
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/admin/profile' element={<AdminProfile />}></Route>

        {/* Student Route  */}
        <Route path='/show-student' element={<ShowStudent />}></Route>
        <Route path='/create-student' element={<CreateStudent />}></Route>

        {/* Attandacne Route */}
        <Route path='/student/attendance' element={<Attendance />}></Route>
        <Route path='/attendance/get' element={<AllAttandance />}></Route>


        {/* Not Found Route  */}
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
