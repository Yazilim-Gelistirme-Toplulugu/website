
import nibgatlogo from "../../../../../assets/image/sponsors/nibgatLogo.svg";
import { Text, useNCoreTheme } from 'ncore-web';
import useStyles from './style';
import React from 'react';

const SponsorsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    return <div
        className={classes.main}
        id='sponsors'
        style={{
            backgroundColor: "#002039",
            color: colors.body,
            gap : spaces.container * 2,
            padding: spaces.container * 3,
        }}
    >
        <div
            className={classes.main}
           
        >
            <Text
                color='body'
                variant='title'
            >
                Sponsorlar
            </Text>
        </div>
        <div
            className={classes.logo}
        >
            <img
                src={nibgatlogo}
                alt={"nibgatLogo"}
            />
            <Text
                color='body'
                variant='header5'
            >
                NİBGAT®
            </Text>
        </div>
    </div >
}
export default SponsorsSection;


