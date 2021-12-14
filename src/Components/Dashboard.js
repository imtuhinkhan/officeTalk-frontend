import React, {Component} from 'react';
import {Link} from "react-router-dom";
import TopBar from "../Common/TopBar";
import Sidebar from "../Common/Sidebar";
class Dashboard extends Component {
    render() {
        return (
            <div>
               <TopBar/>
                <Sidebar/>
                <Link to='/'>Login</Link>
            </div>
        );
    }
}

export default Dashboard;