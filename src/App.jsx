import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import SignIn from './Pages/SignIn'
import NotFoundPage from './Pages/NotFoundPage'
import SignUp from './Pages/SignUp'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='*' element={ <NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
