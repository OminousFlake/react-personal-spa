/*

import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hello, I am your friend'},
                {id: 2, message: 'Lololo'},
                {id: 3, message: 'Stop spamming!'},
                {id: 4, message: 'You are so strange'}
            ],
            newPostText: ''
        },
        messagesPage: {
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
        }
    },
    _callSubscriber(){},

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }

};

export default store;

*/