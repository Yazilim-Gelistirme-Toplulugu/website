import React from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import logo from "../../../../src/assets/image/components/logo.png"
import useStyles from './style';


const Navbar = () => {
    const { spaces, color } = useNCoreTheme();
    const classes = useStyles();
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
            <Button
                textColor='body'
                color='danger'
                className={classes.buttonLink}
                title="Anasayfa"
                variant="ghost"
            />
            <Button
                textColor='body'
                className={classes.buttonLink}
                title="Hakkımızda"
                variant="ghost"
            />
            <Button
                textColor='body'
                className={classes.buttonLink}
                title="Ekibimiz"
                variant="ghost"
            />
            <Button
                textColor='body'
                className={classes.buttonLink}
                title="Çalışma Alanlarımız"
                variant="ghost"
            />
            <Button
                textColor='body'
                className={classes.buttonLink}
                title="Galeri"
                variant="ghost"
            />
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


