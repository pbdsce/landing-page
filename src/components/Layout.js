import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import './main.css'

export default function Layout({children}) {
    return (
        <div>
            <Navbar />
            <main>
            {children}
        
            </main>

            <Footer />
        </div>
    )
}
