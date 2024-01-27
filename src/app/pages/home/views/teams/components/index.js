import React from 'react';
import useStyles from './style';
import {
    Text,
} from "ncore-web";

const TeamMember = ({
    fullName,
    photo,
    duty,
}) => {

    const classes = useStyles()

    return <div
        className={classes.container}
        style={{
            background: `url(${photo})`,
        }}
    >
        <div
            className={classes.content}
        >
            <Text variant='header14'>{fullName}</Text>
            <Text variant='header15'>{duty}</Text>
        </div>
    </div>
}
export default TeamMember;