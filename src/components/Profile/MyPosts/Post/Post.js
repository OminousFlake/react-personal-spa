import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.post}>
            <p>{props.date}</p>
            <br />
            <p>{props.message}</p>
        </div>
    )
};

export default Post;