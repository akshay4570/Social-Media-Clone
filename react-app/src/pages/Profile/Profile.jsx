import React from 'react';
import './Profile.scss';
import Topbar from '../../components/Topbar/Topbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Feed from '../../components/Feed/Feed';
import Rightbar from '../../components/Rightbar/Rightbar';

const Profile = () => {
    return(
        <>
            <Topbar />
            <div className="profile">
                <Sidebar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="/assets/post/3.jpeg" alt="Profile User" className="profileCoverImg" />
                            <img src="/assets/person/7.jpeg" alt="Profile User" className="profileUserImg" />
                        </div>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Akshay Hegde</h4>
                        <span className="profileInfoDesc">Hello!! My Friends</span>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;