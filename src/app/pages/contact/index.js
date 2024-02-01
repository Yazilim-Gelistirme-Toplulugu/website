import { Button, Text, useNCoreTheme, TextInput, Dialog } from 'ncore-web';
import React, { useState } from 'react'
import useStyles from './style';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import contactBackground from '../../../assets/image/contact/contactBackground.png'
import axios from 'axios';

const Contact = () => {

    const classes = useStyles();

    const {
        colors
    } = useNCoreTheme();

    const [isVisibleDialog, setIsVisibleDialog] = useState({
        isVisible: false,
        title: null
    });
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    const [message, setMessage] = useState({})

    const handleSubmit = async () => {
        let variables = {
            name: name,
            email: email,
            message: message,
        }
        try {
            console.log(variables);
            await axios.post('http://localhost:5000/contact', variables);
            console.log('İletişim formu başarıyla gönderildi.');
            setIsVisibleDialog({
                isVisible: true,
                title: "Mesajınız gönderildi."
            });
        } catch (error) {
            console.error('İletişim formu gönderme hatası:', error);
            setIsVisibleDialog({
                isVisible: true,
                title: "Mesajınız Gönderilemedi:( E-mail adresininizi ve mesajınızı girdiğinizden emin olun."
            });
        }
    };

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
                backgroundPosition: "center",
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
                        isRequired
                        spreadBehaviour='free'
                        style={{
                            borderRadius: "32px",
                            alignSelf: "stretch",
                            backgroundColor: colors.inputAreaColor,  //rengi almıyor
                        }}
                        onChangeText={(value) => {
                            setName(value);
                        }}
                    />
                    <TextInput
                        title='E-mail'
                        placeholder='E-mail'
                        isRequired
                        spreadBehaviour='free'
                        style={{
                            borderRadius: "32px",
                            alignSelf: "stretch",
                            backgroundColor: colors.inputAreaColor,
                        }}
                        onChangeText={(value) => {
                            setEmail(value);
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
                            backgroundColor: colors.inputAreaColor,
                            alignSelf: "stretch"
                        }}
                        onChangeText={(value) => {
                            setMessage(value);
                        }}
                    />
                </div>
                <Button
                    textColor='body'
                    title="Gönder"
                    spreadBehaviour='free'
                    onClick={handleSubmit}
                />
            </div>

        </div>
        <Footer />
        <Dialog //Bu kısmı almıyor alıyor da mail gönderilince yani 3 dk sonra
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
