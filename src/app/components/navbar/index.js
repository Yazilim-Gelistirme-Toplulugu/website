import React from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import logo from "../../../../src/assets/image/components/logo.png"
import useStyles from './style';


const Navbar = () => {
    const { spaces, color } = useNCoreTheme();
    const classes = useStyles();

    const navbarButtons = [
        {
            title: "Anasayfa",
            href: "#",
        },
        {
            title: "Hakkımızda",
            href: "#",
        },
        {
            title: "Ekibimiz",
            href: "#",
        },
        {
            title: "Galeri",
            href: "#",
        },

    ]


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
                    return <Button
                        textColor='body'
                        className={classes.buttonLink}
                        title={item.title}
                        variant="ghost"
                        onClick={() => {
                        }}
                    />
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
            />
            <Button
                textColor='body'
                className={classes.button}
                title="Bize Katılın"
            />
        </div>
    </div>
}
export default Navbar;


