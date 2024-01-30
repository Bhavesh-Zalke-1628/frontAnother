import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import NotFoundPage from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'
import AdminProfile from './Pages/AdminProfile'
import CreateStudent from './Pages/Student/CreateStudent'
import Attendance from './Pages/Student/Attendance'

function App() {
  return (
    <>
      <Routes>

        {/* Home Route  */}
        <Route path='' element={<Home />}></Route>

        {/* Admin Route */}
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/admin/profile' element={<AdminProfile />}></Route>

        {/* Student Route  */}
        <Route path='/create-student' element={<CreateStudent />}></Route>
        {/* <Route path='/student/attendance' element={<Attendance />}></Route> */}



        {/* Not Found Route  */}
        <Route path='*' element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
