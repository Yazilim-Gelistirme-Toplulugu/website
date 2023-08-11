import { Text } from 'ncore-web';
import React from 'react'
import mainImage from "../../../../../assets/image/main/main.png"
import useStyles from './style';

const MainSection = () => {

    const classes = useStyles();

    return <div 
        className={classes.main}
        > 
        <img src={mainImage} alt="" width="100%" height="100%" />
        <Text><Text color='orange' >Yazılım</Text> Geliştirme Topluluğu</Text>
    </div>
}
export default MainSection;
