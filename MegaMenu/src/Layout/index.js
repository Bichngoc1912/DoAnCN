import React from 'react';
import Navbar from '../Component/Navigation';
import Footer from '../Component/Footer';
function Layout ({children}) {
    return (
       <div>
           <Navbar/>
           {children}
           <Footer/>
       </div>
    )
}
export default Layout;