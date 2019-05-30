import React from 'react';
import s from './Image.module.css';

const Image = (props) => {
    return (
        <div className={s.image}>
            <img src={require('../../../redux/Images/' + props.name + '.jpg')} alt=''/>
        </div>
    )
};

export default Image;
