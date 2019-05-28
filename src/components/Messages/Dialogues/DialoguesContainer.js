import React from 'react';
import {sendMessageCreator, updateBodyMessageCreator} from "../../../redux/messages-reducer";
import Dialogues from "./Dialogues";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        dialogues: state.messagesPage.dialogues,
        newMessageBody: state.messagesPage.newMessageBody
    }
};
const mapDispatchTooProps = (dispatch) => {
    return {
        changeMessageBody: (body) => {
            dispatch(updateBodyMessageCreator(body));
            },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
};

const DialoguesContainer = connect(mapStateToProps, mapDispatchTooProps)(Dialogues);

export default DialoguesContainer;