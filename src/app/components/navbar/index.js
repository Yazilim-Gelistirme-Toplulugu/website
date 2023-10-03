import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import logo from "../../../../src/assets/image/components/logo.png"
import useStyles from './style';
import { useHistory, useNavigate } from 'react-router-dom';
import ContactPage from '../../pages/contact/index'

const Navbar = () => {
    const { spaces, colors } = useNCoreTheme();
    const classes = useStyles();
    
    const navigate = useNavigate();
    const [navbarButtons, setNavbarButtons] = useState([
        {
            title: "Anasayfa",
            href: "#",
            isActive: false
        },
        {
            title: "Hakkımızda",
            href: "#",
            isActive: false
        },
        {
            title: "Ekibimiz",
            href: "#",
            isActive: false
        },
        {
            title: "Galeri",
            href: "#",
            isActive: false
        },

    ])

   
    /*const handleButtonClick = () => {
        const externalURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdo7ylOulj-Oa3HydpB8tppgShYSQXXJdHhEpy8vmcAp2XiKg/viewform';
        window.location.href = externalURL;
      };*/


    return <div
        className={classes.navbar}
    >
        <div>
            <img src={logo} alt="" />
        </div>
        <div
            className={classes.sectionLinks}
            style={{
                gap: spaces.inline * 6
            }}

        >
            {
                navbarButtons.map((item) => {
                    return <div
                        style={{
                            paddingBottom: spaces.item / 10,
                            borderBottomColor: colors.body,
                            borderBottomStyle: "solid",
                            transition: "all .05s ease-in-out",
                            borderBottomWidth: item.isActive ? "2px" : "0px",
                        }}
                    >
                        <Button
                            textColor='body'
                            className={classes.buttonLink}
                            title={item.title}
                            variant="ghost"
                            onClick={() => {
                                if (item.isActive === false) {
                                    let _navbarButtons = JSON.parse(JSON.stringify(navbarButtons))

                                    const currentIndex = _navbarButtons.findIndex(e => e.title === item.title)

                                    _navbarButtons.forEach(element => {
                                        element.isActive = false;
                                    });

                                    _navbarButtons[currentIndex].isActive = true
                                    setNavbarButtons(_navbarButtons)
                                }
                            }}
                        />
                    </div>
                })
            }
        </div>


        <div
            className={classes.buttons}
            style={{
                gap: spaces.inline * 6
            }}
        >
            <Button
                textColor='body'
                title="İletişim"
                variant="outline"
              //  onClick={navigate("/contact")} // bu buton loop
            />
            <Button
                textColor='body'
                title="Bize Katılın"
              //  onClick={handleButtonClick()}
            />
        </div>
    </div>
}
export default Navbar;


