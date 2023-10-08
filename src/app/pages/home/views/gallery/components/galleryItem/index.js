import { useNCoreTheme } from 'ncore-web';
import React from 'react'
import useStyles from './style';

const GalleryItem = ({
    imageURL,
    title,
    date
}) => {

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const classes = useStyles();

    return <div
        className={classes.container}
        style={{
            borderRadius: spaces.item,
            border: "3px solid #036924"
        }}
    >
        <div
            className={classes.imageContainer}
        >
            <img className={classes.image} src={imageURL} />
        </div>
    </div>
}
export default GalleryItem;
