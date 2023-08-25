
import useStyles from './style';
import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';

const KeywordsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    const keywords = ["HTML", "CSS", "JavaScript", "React", "React-Native", "Node.js", "No Sql", "Java", "C#"];
    const shuffledKeywords = keywords.sort(() => Math.random() - 0.5);

    return <div
        className={classes.main}
    >
        <div
            className={`${classes.keywordsContainer} ${classes.keywordsContainerLeft}`}
        >
            {
                shuffledKeywords.map((item, index)=> (
                    <div
                        className={classes.keyword}
                        key={index}
                    >
                        <Text
                            color='body'
                            variant='body'
                        >
                            {item}
                        </Text>
                    </div>
                ))
            }
            
        </div>
        <div
            className={`${classes.keywordsContainer} ${classes.keywordsContainerRight}`}
        >
            {
                shuffledKeywords.map((item, index)=> (
                    <div
                        className={classes.keyword}
                        key={index}
                    >
                        <Text
                            color='body'
                            variant='body'
                        >
                            {item}
                        </Text>
                    </div>
                ))
            }
        </div>
        <div
            className={`${classes.keywordsContainer} ${classes.keywordsContainerLeft}`}
        >
            {
                shuffledKeywords.map((item, index)=> (
                    <div
                        className={classes.keyword}
                        key={index}
                    >
                        <Text
                            color='body'
                            variant='body'
                        >
                            {item}
                        </Text>
                    </div>
                ))
            }
        </div>
    </div>
}
export default KeywordsSection;


