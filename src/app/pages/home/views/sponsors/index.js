
import useStyles from './style';
import React, { useState } from 'react';
import { Text, useNCoreTheme } from 'ncore-web';
import nibgatlogo from "../../../../../assets/image/sponsors/nibgatLogo.svg"

const SponsorsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    return <div
        className={classes.main}
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


