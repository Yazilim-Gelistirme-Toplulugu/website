
import useStyles from './style';
import React, { useState } from 'react';
import { Text, useNCoreTheme } from 'ncore-web';
import images from "./images";
import GalleryItem from './components/galleryItem';

const GallerySection = () => {

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const classes = useStyles();

    return <div
        className={classes.container}
        style={{

        }}
    >
        {images.map(item => {
            return <GalleryItem {...item} />
        })}
    </div >
}
export default GallerySection;


