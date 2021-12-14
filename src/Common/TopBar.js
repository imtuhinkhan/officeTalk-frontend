import React, {Component} from 'react';
import '../styles/topbar.css'
class TopBar extends Component {
    render() {
        return (
            <div className='topbar'>
                <div className='row'>
                    <div className='col-1'>
                        <img src='/users/user2.png' />
                    </div>
                    <div className='col-4 tb-text'>
                        <h6>Tuhin Khan</h6>
                        <p>Active</p>
                    </div>
                    <div className='col-6 others-icon' >
                        <a href="#"><img src='/icons/chat.png'/></a>
                        <a href="#"><img src='/icons/phone.png'/></a>
                        <a href="#"><img src='/icons/video.png'/></a>
                        <a href="#"><img src='/icons/cross.png'/></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopBar;