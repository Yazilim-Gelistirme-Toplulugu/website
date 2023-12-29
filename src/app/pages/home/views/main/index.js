import mainImage from "../../../../../assets/image/main/main.png";
import MouseIcon from '../../../../../assets/svgr/mouse';
import { Text, useNCoreTheme, Button } from 'ncore-web';
import useStyles from './style';
import React from 'react';

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
            <Button
                textColor='body'
                title={
                    <MouseIcon size={60}
                        color={colors.orange}
                    />}
                variant="ghost"
                spreadBehaviour='stretch'
                onClick={() => {
                    setTimeout(() => {
                        window.open("#aboutUs", "_self")
                    }, 250);
                }}
            />
        </div>
    </div>
}
export default MainSection;
