import React from 'react';
import s from './Emoji.module.css';

const Emoji = props => (
    <span
        className={s.emoji}
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
);

export default Emoji;