import React from 'react';
import s from "./Dialogue.module.css";

const Dialogue = (props) => {
  return (
      <div className={s.dialogue}>
          <p>{props.message}</p>
      </div>
  )
};

export default Dialogue;