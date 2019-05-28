const addPost = 'ADD-POST';
const updatePostText = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Hello, I am your friend'},
        {id: 2, message: 'Lololo'},
        {id: 3, message: 'Stop spamming!'},
        {id: 4, message: 'You are so strange'}
    ],
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case updatePostText: {
            let copiedState = {...state};
            copiedState.newPostText = action.newText;
            return copiedState;
        }
        case addPost: {
            let newPost = {
                id: 5,
                message: state.newPostText
            };
            let copiedState = {...state};
            copiedState.posts = [...state.posts];
            copiedState.posts.push(newPost);
            copiedState.newPostText = '';
            return copiedState;
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: addPost});

export const updatePostTextActionCreator = (text) =>  ({type: updatePostText, newText: text });

export default profileReducer;