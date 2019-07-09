import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElements = props.posts.map((el) => <Post message={el.message} date={el.date} key={el.id}/>);

    let onPostChange = (event) => {
        let text = event.target.value;
        props.updatePostText(text);
    };

    let onPostAdd = () => {
        props.addPost();
    };

    let newElem = 'Jenny';
    let arr1 = ['Bob', 'Michael'];
    let arr2 = [...arr1, newElem];
    console.log(arr2);

    return (
        <div className={s.posts}>
            <div className={s.postAdd}>
                <h1>Мои посты</h1>
                <div className={s.inputContainer}>
                    <div className={s.textAreaContainer}>
                            <textarea onChange={onPostChange}
                                      value={props.newPostText}
                                      placeholder='(!)Важное сообщение'/>
                        <span>
                        {props.tooltip ?
                            <div className={s.bubbleHelp}>
                                <p>Не надо пустых постов!</p>
                            </div> :
                            ''}
                        </span>
                    </div>
                    <button onClick={onPostAdd}>Добавить</button>
                </div>
            </div>
            {postsElements.reverse()}
        </div>
    )
};

export default MyPosts;