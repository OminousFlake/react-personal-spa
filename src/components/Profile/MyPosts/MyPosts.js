import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map(el => <Post message={el.message}/>);
    let newPost = React.createRef();
    let bubbleMessage = React.createRef();
    let pushedButton = () => {
        console.log("s", s);
    };


    let onPostChange = () => {
        let text = newPost.current.value;
        props.updatePostText(text);
    };

    let onPostAdd = (e) => {
        if (props.newPostText === '') {
            console.log("bubbleMessage", bubbleMessage);
            bubbleMessage.current.style.visibility = 'visible';
        } else {
            props.addPost();
        }
    };

    return (
        <div className={s.posts}>
            <div className={s.postAdd}>
                <p>My posts</p>
                <div className={s.inputArea}>
                    <div className={`${s.bubbleHelp} ${s.hidden}`} ref={bubbleMessage}>
                        <p>Can't post an empty message!</p>
                    </div>
                   <textarea onChange={onPostChange} ref={newPost} value={props.newPostText}
                             placeholder='Text your post here'/>
                    <button className={s.bbb} onClick={onPostAdd}>Add</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
};

export default MyPosts;