import React from 'react';
import s from './Messages.module.css'
import DialoguesContainer from "./Dialogues/DialoguesContainer";
import ConversationsContainer from "./Conversations/ConversationsContainer";

const Messages = () => {
    return (
        <div className={s.messages}>
            <ConversationsContainer/>
            <DialoguesContainer/>
        </div>
    )
};

export default Messages;