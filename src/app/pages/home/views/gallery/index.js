
import useStyles from './style';
import React, { useState } from 'react';
import { Text, useNCoreTheme } from 'ncore-web';
import Carousel, { Modal, ModalGateway } from 'react-images'
import {
    tubitak1,
    tubitak2,
} from '../../../../../assets/image/gallery/tubitak/index.js';
import {
    gdg1,
    gdg2,
    gdg3,
    gdg4,
} from '../../../../../assets/image/gallery/gdg/index.js';
import {
    coffeetalk1_1,
    coffeetalk1_2,
    coffeetalk1_3,
    coffeetalk1_4,
    coffeetalk1_5,
    coffeetalk1_6,
    coffeetalk1_7,
    coffeetalk1_8,
} from '../../../../../assets/image/gallery/coffeetalk1/index.js';
import {
    coffeetalk2_1,
    coffeetalk2_2,
} from '../../../../../assets/image/gallery/coffeetalk2/index.js';
import {
    hsd1,
    hsd2,
    hsd3,
    hsd4,
    hsd5,
    hsd6,
    hsd7,
    hsd8,
    hsd9,
    hsd10,
    hsd11,
} from '../../../../../assets/image/gallery/hsd/index.js';
import {
    nibgat1_1,
    nibgat1_2,
    nibgat1_3,
    nibgat1_4,
    nibgat1_5,
    nibgat1_6,
    nibgat1_7,
    nibgat1_8,
    nibgat1_9,
    nibgat1_10,
} from '../../../../../assets/image/gallery/nibgat1/index.js';
import {
    bowling1,
    bowling2,
} from '../../../../../assets/image/gallery/bowling/index.js';
import {
    nibgat2_1,
    nibgat2_2,
    nibgat2_3,
    nibgat2_4,
} from '../../../../../assets/image/gallery/nibgat2/index.js';



const GallerySection = () => {
     const { colors, spaces } = useNCoreTheme();
     const classes = useStyles();
     const images = [
         nibgat2_1,
         nibgat2_2,
         nibgat2_3,
         nibgat2_4,
     ];
     const [selectedImage, setSelectedImage] = useState(null);
     const handleClick = (image) => {
         setSelectedImage(image);
       };
     return <div
         className={classes.container}
         style={{
             backgroundColor: "#021524",
             color: colors.body,
             gap: spaces.container * 2,
             padding: spaces.container * 3,
         }}
     >
         <Text
             color='body'
             variant='title'
         >
             Galeri
         </Text>
         <div
             className={classes.activityscontainer}
             style={{
                 gap: spaces.container * 2,
             }}>
             <div
                 className={classes.activity}
                 style={{
                 }}>
                 <img
                     src={nibgat2_1}
                     alt=""
                     width="100%"
                     height="100%"
                 />
             </div>
         </div>
     </div >
}
export default GallerySection;






