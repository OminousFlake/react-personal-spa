const addPost = 'ADD-POST';
const updatePostText = 'UPDATE-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, date: '26.05.2019, 16:35:56', message: 'Мой первый пост. Тест'},
        {
            id: 2,
            date: '27.05.2019, 11:31:56',
            message: 'В прошлом посту забыл точку. Поэтому добавлю две в конце этого..'
        },
        {id: 3, date: '28.05.2019, 15:11:54', message: 'Добавил супер страшный скролл, зато крутить можно!'}
    ],
    newPostText: '',
    tooltip: false

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case updatePostText: {
            let copiedState = {...state};
            copiedState.newPostText = action.newText;
            if (copiedState.newPostText.length > 0) {
                copiedState.tooltip = false;
            }
            return copiedState;
        }
        case addPost: {
            let copiedState = {...state};
            let newPost = {
                id: copiedState.posts.length + 1,
                date: new Date().toLocaleString('ru'),
                message: copiedState.newPostText
            };
            if (copiedState.newPostText.length > 0 && copiedState.newPostText.trim() !== '') {
                copiedState.posts = [...state.posts];
                copiedState.posts.push(newPost);
                copiedState.newPostText = '';
                return copiedState;
            } else {
                copiedState.tooltip = true;
                return copiedState;
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreator = () => ({type: addPost});

export const updatePostTextActionCreator = (text) => ({type: updatePostText, newText: text});

export default profileReducer;