import { Text, useNCoreTheme } from 'ncore-web'
import React from 'react'

const Contact = () => {

    const {
        colors,
        spaces
    } = useNCoreTheme();

    return <div
        style={{
            backgroundColor: colors.constrastBody
        }}
    >
        <Text>Helloo World!</Text>
    </div>
}
export default Contact;