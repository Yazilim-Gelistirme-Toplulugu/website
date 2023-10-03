import { Button, Container, Text, useNCoreTheme, TextInput } from 'ncore-web';
import React from 'react'
import useStyles from './style';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import contactBackground from '../../../assets/image/contact/contactBackground.png'

const Contact = () => {

    const classes = useStyles();

    const {
        spaces,
        colors
    } = useNCoreTheme();

    return <div
        style={{
            display: "flex",
            flexDirection: "column"
        }}
    >
        <div
            className={classes.container}
            style={{
                backgroundImage: `url(${contactBackground})`,
                backgroundSize: "cover",
                width: '100%',
                height: '100vh',
            }}
        >
            <Navbar />
            <div
                className={classes.mainContent}
            >
                <Text
                    color='body'
                    variant='header14'
                >
                    Bizimle İletişime Geç!
                </Text>
                <div
                    className={classes.inputArea}
                >
                    <TextInput
                        title="İsim Soyisim"
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            width: "100%",
                            height: "20px"
                        }}
                    />
                    <TextInput
                        title="E-mail"
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            width: "100%",
                            height: "20px"
                        }}
                    />
                    <TextInput
                        title="Mesaj"
                        multiline="true"
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            width: "100%",
                        }}
                    />
                </div>
                <Button
                    textColor='body'
                    title="Gönder"
                />
            </div>

        </div>
        <Footer />
    </div>
}

export default Contact;
