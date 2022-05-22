import React from 'react';
import './CloseFriends.scss';

const CloseFriends = ({user}) => {
    return (
        <li className="sidebarFriend">
            <img src={user.profilePicture} alt="Friend Img" className="sidebarFriendImg" />
            <span className="sidebarFriendName">{user.username}</span>
        </li>
    )
}

export default CloseFriends;