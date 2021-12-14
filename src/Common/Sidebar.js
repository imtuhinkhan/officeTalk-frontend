import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../styles/sidebar.css'
import {Dropdown,Form,FormControl,Button} from 'react-bootstrap'
import TopBar from './TopBar';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar-container" >
                <div className="row">
                    <div className="sidebar-hearder">
                        <div className="user-info">
                            <h6><img src="/user.png"/> Tuhin Khan</h6>
                        </div>
                        <div className="sidebar-hearder-icon">
                            <div className="row">
                                <div className='col-4'>
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
                                    <div className='col-8 others-icon' >
                                        <a href="#"><img src='/icons/chat.png'/></a>
                                        <a href="#"><img src='/icons/phone.png'/></a>
                                        <a href="#"><img src='/icons/video.png'/></a>
                                        <a href="#"><img src='/icons/folder.png'/></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row container-box">
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </div>

                <div className="row">
                    <div className='active-user-box'>
                        <span className="active-user">
                            <img src='/users/user1.png' />
                        </span>
                        <img src='/users/user2.png' />
                        <img src='/users/user2.png' />
                        <img src='/users/user1.png' />
                        <img src='/users/user2.png' />
                        <img src='/users/user1.png' />
                        <img src='/users/user2.png' />
                        <img src='/users/user1.png' />
                    </div>
                    
                </div>
                <hr></hr>

                <div className="recently-chated">
                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>

                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>

                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>

                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>

                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>

                    <div className='row recently-chated-user-box'>
                        <div className='col-2'>
                        <img src='/users/user2.png' />
                        </div>
                        <div className='col-8 rc-text'>
                            <h6>Tuhin Khan</h6>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry........</p>
                        </div>
                        <div className='col-2 rc-time'>
                            <p>10:10 pm</p>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }
}

export default Sidebar;

