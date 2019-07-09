import React from 'react';
import s from "./Dialogues.module.css";
import Dialogue from "./DIalogue/Dialogue";

const Dialogues = (props) => {
    let dialoguesElements = props.dialogues.map(el => <Dialogue message={el.message} key={el.id}/>);

    let onMessageBodyChange = (event) => {
        let body = event.target.value;
        props.changeMessageBody(body);
    };

    let onMessageSend = () => {
        if (props.newMessageBody === '') {
            console.log('Change the message');
        } else {
            props.sendMessage();
        }
    };

    return (
        <div className={s.container}>
            <div className={s.dialogues}>
                { dialoguesElements }
            </div>
            <div className={s.messageSender}>
                <textarea onChange={onMessageBodyChange} value={props.newMessageBody} placeholder='Text your message here' />
                <button onClick={onMessageSend}>Send</button>
            </div>
        </div>
    )
};

export default Dialogues;