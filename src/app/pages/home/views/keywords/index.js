
import useStyles from './style';
import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';

const KeywordsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    const keywords = [ "HTML", "CSS", "JavaScript", "React", "React-Native", "Node.js", "No Sql", "Java", "C#", "C"];


    return <div
        className={classes.main}
    >

    </div>
}
export default KeywordsSection;


