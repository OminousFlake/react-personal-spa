import React from 'react';
import s from './Conversation.module.css'
import {NavLink} from "react-router-dom";

const Conversation = (props) => {
    let path = '/messages/' + props.id;
  return (
      <div className={s.conversation}>
          <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
      </div>
  )
};

export default Conversation;