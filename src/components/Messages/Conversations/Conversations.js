import React from 'react';
import s from './Conversations.module.css'
import Conversation from "./Conversation/Conversation";

const Conversations = (props) => {
    let conversationsElements = props.conversations.map(el => <Conversation name={el.name} id={el.id}/>);

    return (
        <div className={s.conversations}>
            { conversationsElements }
        </div>
    )
};

export default Conversations;