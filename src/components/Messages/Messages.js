import React from 'react';
import s from './Messages.module.css'
import DialoguesContainer from "./Dialogues/DialoguesContainer";
import ConversationsContainer from "./Conversations/ConversationsContainer";

const Messages = () => {
    return (
        <div className={s.messages}>
            <h1>В разработке! Да, даже отступ слева не добавлю!</h1>
                <ConversationsContainer/>
                <DialoguesContainer/>
        </div>
    )
};

export default Messages;