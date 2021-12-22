import React from 'react'
import Header from './Header'
import Footer from './Footer'


export default function Layout({cheldren}) {
    return (
        <div>
            <Header/>
             {/* <main>{cheldren}</main> */}
             <Footer/>
        </div>
    )
}
