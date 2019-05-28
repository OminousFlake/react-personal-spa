import React from 'react';
import {connect} from "react-redux";
import Conversations from "./Conversations";

const mapStateToProps = (state) => {
  return {
      conversations: state.messagesPage.conversations
  }
};

const mapDispatchTooProps = () => {
    return {

    }
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchTooProps)(Conversations);

export default MyPostsContainer;