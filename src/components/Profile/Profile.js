import React from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.user}>
                <div className={s.imageBlock}>
                    <img src='https://www.zaryadyepark.ru/upload/iblock/d65/d65abfbf1d6f83c1765b734c47c79cb5.jpg' alt=''/>
                </div>
                <div className={s.userInfo}>
                    <h1>Информация обо мне:</h1>
                    <p>Нелучшая моя фотография, но какая есть! Зато видно,
                        что я работаю непокладая рук, а иногда и ног!</p>
                </div>
            </div>
            <MyPostsContainer />
        </div>
    )
};

export default Profile;