
import useStyles from './style';
import React, { useEffect, useRef, useState } from 'react';
import { Text, useNCoreTheme } from 'ncore-web';

const KeywordsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();
    const keywords = ["HTML", "CSS", "JavaScript", "React", "React-Native", "Node.js", "No Sql", "Java", "C#"];

    useEffect(() => {
        const keywordLeft = document.querySelectorAll(".keywordLeft")
        const keywordRight = document.querySelectorAll(".keywordRight")
        if (keywordLeft) {
            startContinuousAnimationLeft(keywordLeft)
        }
        if (keywordRight) {
            startContinuousAnimationRight(keywordRight)
        }
    }, [])

    const startContinuousAnimationLeft = (keyword) => {
        let position = 0;
        setInterval(() => {
            position += 10;
            for (let index = 0; index < keyword.length; index++) {
                keyword[index].style.right = position + 'px';
            }
            if (position >= window.innerWidth) {
                position = 0;
            }
        }, 60);
    }

    const startContinuousAnimationRight = (keyword) => {
        let position = -window.innerWidth;
        setInterval(() => {
            position += 10;
            for (let index = 0; index < keyword.length; index++) {
                keyword[index].style.left = position + 'px';
            }
            if (position >= 0) {
                position = -window.innerWidth;
            }
        }, 60);
    }



    return <div
        className={classes.container}
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
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword} keywordRight`}
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
                })
            }
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword} keywordRight`}
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
                })
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
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword} keywordLeft`}
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
                })
            }
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword} keywordLeft`}
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
                })
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
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword} keywordRight`}
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
                })
            }
            {
                keywords.sort(() => Math.random() - 0.5).map((item, index) => {
                    return <div
                        className={`${classes.keyword}  keywordRight`}
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
                })
            }
        </div>
    </div>
}
export default KeywordsSection;


