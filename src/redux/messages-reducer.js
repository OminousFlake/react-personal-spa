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
            return {...state,
                newMessageBody: action.body
            };
        }
        case sendMessage: {
            let body = state.newMessageBody;
            return {...state,
                dialogues: [...state.dialogues, {id: state.dialogues.length + 1, message: body}],
                newMessageBody: ''
            };
        }
        default: return state;
    }
};

export const updateBodyMessageCreator = (body) =>  ({type: updateMessageBody, body: body });
export const sendMessageCreator = () => ({type: sendMessage});

export default messagesReducer;