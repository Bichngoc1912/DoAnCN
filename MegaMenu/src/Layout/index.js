import React from 'react';
import Navbar from '../Component/Navigation';
function Layout ({children}) {
    return (
       <div>
           <Navbar/>
           {children}
       </div>
    )
}
export default Layout;