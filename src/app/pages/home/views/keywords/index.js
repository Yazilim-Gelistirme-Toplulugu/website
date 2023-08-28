
import useStyles from './style';
import React, { useState } from 'react';
import { Text, useNCoreTheme } from 'ncore-web';

const KeywordsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    const keywords = ["HTML", "CSS", "JavaScript", "React", "React-Native", "Node.js", "No Sql", "Java", "C#"];

    const animatedElement = document.querySelector(".keyword");

    function startContinuousAnimation() {
        console.log(animatedElement)
        /*let position = 0;
         setInterval(() => {
             position += 10;
             animatedElement.style.left = position + 'px';
 
             if (position >= window.innerWidth) {
                 position = -100;
             }
         }, 50);*/
    }

    startContinuousAnimation()

    return <div
        className={classes.main}
        style={{
            color: colors.body,
            paddingTop: spaces.container * 3,
            paddingBottom: spaces.container * 3,
        }}
    >
        <div
            className={`${classes.keywordsContainer}`}
            style={{
                paddingTop: spaces.container * 0.5,
                paddingBottom: spaces.container * 0.5,
                gap: spaces.item * 1.6
            }}
        >
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => (
                    <div
                        className={`${classes.keyword} ${classes.keywordsContainerLeft}`}
                        //    id='keyword'
                        style={{
                            padding: spaces.container * 1,
                        }}
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
            className={`${classes.keywordsContainer}`}
            style={{
                paddingTop: spaces.container * 0.5,
                paddingBottom: spaces.container * 0.5,
                gap: spaces.item * 1.6
            }}
        >
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => (
                    <div
                        className={`${classes.keyword} ${classes.keywordsContainerRight}`}
                        //   id='keyword'
                        style={{
                            padding: spaces.container * 1,
                        }}
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
            className={`${classes.keywordsContainer}`}
            style={{
                paddingTop: spaces.container * 0.5,
                paddingBottom: spaces.container * 0.5,
                gap: spaces.item * 1.6
            }}
        >
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => (
                    <div
                        className={`${classes.keyword} ${classes.keywordsContainerLeft}`}
                        //    id='keyword'
                        style={{
                            padding: spaces.container * 1,
                        }}
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


