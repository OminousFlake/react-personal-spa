const updateMessageBody = 'UPDATE-MESSAGE-BODY';
const sendMessage = 'SEND-MESSAGE';

let initialState = {
    conversations: [
        {id: 1, name: 'Mark'},
        {id: 2, name: 'Bob'},
        {id: 3, name: 'Julia'},
    ],
    dialogues: [
        {id: 1, message: 'Hello!'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Have you watched Avengers?'},
        {id: 4, message: 'Wow!'},
    ],
    newMessageBody: ''
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case updateMessageBody: {
            let copiedState = {...state};
            copiedState.newMessageBody = action.body;
            return copiedState;
        }
        case sendMessage: {
            let copiedState = {...state};
            copiedState.dialogues = [...state.dialogues];
            let body = copiedState.newMessageBody;
            copiedState.dialogues.push({id: 6, message: body});
            copiedState.newMessageBody = '';
            return copiedState;
        }
        default: return state;
    }
};

export const updateBodyMessageCreator = (body) =>  ({type: updateMessageBody, body: body });
export const sendMessageCreator = () => ({type: sendMessage});

export default messagesReducer;