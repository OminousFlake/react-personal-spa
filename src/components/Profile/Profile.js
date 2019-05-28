import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://english.cdn.zeenews.com/sites/default/files/2014/12/02/298357-sea-2.jpg' alt='' />
            </div>
            <div className={s.userInfo}>
                ava + description
            </div>
            <MyPostsContainer/>
        </div>
    )
};

export default Profile;