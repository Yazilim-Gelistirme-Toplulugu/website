import { Text, useNCoreTheme } from 'ncore-web';
import React from 'react'
import mainImage from "../../../../../assets/image/main/main.png"
import useStyles from './style';

const MainSection = () => {

    const classes = useStyles();

    const { spaces } = useNCoreTheme();

    return <div
        className={classes.main}
    >
        <img src={mainImage} alt="" width="100%" height="100%" />
        <Text className={classes.maintext}
            variant='header11'
            style={{
                fontWeight: 300
            }}
        >
            <Text 
                color='orange'
                variant='header11'
                style={{
                    marginRight: spaces.inline * 2,
                    fontWeight: 700
                }}
            >
                Yazılım
            </Text>
            Geliştirme Topluluğu
        </Text>
    </div>
}
export default MainSection;
