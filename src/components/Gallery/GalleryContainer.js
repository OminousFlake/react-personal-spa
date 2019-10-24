
import Gallery from "./Gallery";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        images: state.galleryPage.images
    }
};

/*
const mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            dispatch(updatePostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        toggleTooltip: () => {
            dispatch(toggleTooltipCreator());
        }
    }
};
*/

const GalleryContainer = connect(mapStateToProps, {})(Gallery);


export default GalleryContainer;