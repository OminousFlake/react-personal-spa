import React from 'react';
import s from './Image.module.css';

const Image = (props) => {
    return (
        <div className={s.imageContainer}>
            <img src={require('../../../redux/Images/' + props.name + '.jpg')} alt='' className={s.image} />
        </div>
    )
};

export default Image;
