import React from 'react';
import './Online.scss';

const Online = ({user}) => {
    return (
        <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
                <img src={user.profilePicture} alt="Profile Img" className="rightbarProfileImg" />
                <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUserName">{user.username}</span>
        </li>
    )
}

export default Online;