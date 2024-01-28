import React from 'react'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
function HomeLayout({ children }) {

    return (
        // nav bar 
        <div className=' h-[100vh] w-full'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
