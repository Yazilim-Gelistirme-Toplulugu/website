import { Button, Container, Text, useNCoreTheme, TextInput, Dialog } from 'ncore-web';
import React, { useState } from 'react'
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

    const [isVisibleDialog, setIsVisibleDialog] = useState({
        isVisible: false,
        title: null
    });

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
                        title='İsim Soyisim'
                        placeholder='İsim Soyisim'
                        isRequired //false olmasına ragmen * ile gösteriliyor
                        spreadBehaviour='free'
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            alignSelf: "stretch"
                            
                        }}
                    />
                    <TextInput
                        title='E-mail'
                        placeholder='E-mail'
                        isRequired
                        spreadBehaviour='free'
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            alignSelf: "stretch"
                        }}
                    />
                    <TextInput
                        title='Mesaj'
                        placeholder='Mesaj'
                        isRequired='true'
                        multiline
                        spreadBehaviour='free'
                        style={{
                            borderRadius: "32px",
                            background: "#0B3F65",
                            alignSelf: "stretch"
                        }}
                    />
                </div>
                <Button
                    textColor='body'
                    title="Gönder"
                    spreadBehaviour='free'
                    onClick={() => {
                        if (true) { //gönderim durumları yazılacak
                            setIsVisibleDialog({
                                isVisible: true,
                                title: "Mesajınız gönderildi."
                            })
                        } else {
                            setIsVisibleDialog({
                                isVisible: true,
                                title: "Mesajınız Gönderilemedi:( /nE-mail adresininizi ve mesajınızı girdiğinizden emin olun."
                            })
                        }
                    }}
                />
            </div>

        </div>
        <Footer />
        <Dialog
            isVisible={isVisibleDialog.isVisible}
            variant='info'
            onOverlayPress={() => {
                setIsVisibleDialog({
                    isVisible: false,
                    title: null
                })
            }}
            title={isVisibleDialog.title ? isVisibleDialog.title : ""}
        >
        </Dialog>
    </div>
}

export default Contact;
