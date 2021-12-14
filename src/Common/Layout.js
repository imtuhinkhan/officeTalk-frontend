import React from 'react';
import Sidebar from './Sidebar'
import TopBar from './TopBar';
const Layout=({children}) => {
    return (
        <div className='row'>
            <div className="col-4" >
                <Sidebar/>
            </div>
            <div className="col-8" >
                <TopBar/>
            {children}
            </div>   
        </div>
    );
}

export default Layout;