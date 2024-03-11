import React from 'react'
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import { useSelector } from 'react-redux';

// Main layout for the hole page
function HomeLayout({ children }) {
    
    const theam = useSelector((state) => {return state.Theam})

    return (    
        // nav bar 
        <div className={' h-[100vh] w-full'+(theam? "" :" text-white bg-black border-none")}>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default HomeLayout
