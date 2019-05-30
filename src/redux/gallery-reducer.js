const showPictureName = 'SHOW-PICTURE-NAME';

let initialState = {
    images: [
        {id: 1, name: 'adventure'},
        {id: 2, name: 'alpine'},
        {id: 3, name: 'armadillo'},
        {id: 4, name: 'brewery'},
        {id: 5, name: 'cami'},
        {id: 6, name: 'clouds'},
        {id: 7, name: 'cooling-tower'},
        {id: 9, name: 'geese'},
        {id: 10, name: 'hosta-leaf'},
        {id: 11, name: 'landscape'},
        {id: 12, name: 'night'},
        {id: 13, name: 'parrot'},
        {id: 14, name: 'sailing-vessel'},
        {id: 15, name: 'snail'},
        {id: 16, name: 'squirrel'},
        {id: 17, name: 'vintage'},
        {id: 18, name: 'vw'}
    ],
    pictureName: ''
};

const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case showPictureName: {
            let copiedState = {...state};
            copiedState.pictureName = !copiedState.pictureName;
            return copiedState;
        }
        default:
            return state;
    }
};

export const showPictureNameCreator = () => ({type: showPictureName});


export default galleryReducer;