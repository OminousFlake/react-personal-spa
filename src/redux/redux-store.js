import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import galleryReducer from "./gallery-reducer";

let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messagesReducer,
        galleryPage: galleryReducer
    }
);

let store = createStore(reducers);

export default store;