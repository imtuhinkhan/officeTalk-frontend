import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../styles/sidebar.css'
import {Dropdown,} from 'react-bootstrap'

class Sidebar extends Component {
    render() {
        return (
            <div className="col-4 sidebar-container" >
                <div className="sidebar-hearder">
                    <div className="user-info">
                        <h6><img src="/user.png"/> Tuhin Khan</h6>
                    </div>
                    <div className="sidebar-hearder-icon">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="header-dropdown">
                               Meeting/Chat
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Host a meetin</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Join a Meeting</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Create a group</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;

