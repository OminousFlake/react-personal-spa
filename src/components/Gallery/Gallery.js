import React from 'react';
import s from './Gallery.module.css';
import Image from "./Image/Image";

const Gallery = (props) => {
    let imageElements = props.images.map((el) => <Image name={el.name} key={el.id}/>);
    return (
            <div className={s.images}>
                {imageElements}
            </div>
    )
};

export default Gallery;