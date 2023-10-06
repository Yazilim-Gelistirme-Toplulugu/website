import { Text, useNCoreTheme } from 'ncore-web';
import React from 'react'
import mainImage from "../../../../../assets/image/main/main.png"
import useStyles from './style';
import MouseIcon from '../../../../../assets/svgr/mouse';

const MainSection = () => {

    const classes = useStyles();

    const {
        spaces,
        colors
    } = useNCoreTheme();

    return <div
        className={classes.main}
        id='main'
    >
        <img
            src={mainImage}
            alt=""
            width="100%"
            height="100%"
        />
        <div
            className={classes.maintext}
        >
            <Text
                color="orange"
                variant='header11'
                style={{
                    marginRight: spaces.inline * 4
                }}
            >Yazılım</Text>
            <Text
                color='body'
                variant='header12'
            >
                Geliştirme
            </Text>
            <Text
                color='body'
                variant='header12'
            >
                Topluluğu
            </Text>
        </div>
        <div className={classes.mouse}>
            <MouseIcon size={60} color={colors.orange} />
        </div>
    </div>
}
export default MainSection;
