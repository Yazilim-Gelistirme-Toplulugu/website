import React from 'react';
import { Button, Text } from 'ncore-web';
import logo from "../../../../src/assets/image/components/logo.png"
import useStyles from './style';

const Navbar = () => {
    const classes = useStyles();
    return <div
        className={classes.navbar}
    >
        <div>
            <img src={logo} alt="" />
        </div>
        <div
            className={classes.sectionLinks}
        >
            <Button
                className={classes.buttonLink}
                title="Anasayfa"
                variant="ghost"
            />
            <Button
                title="Hakkımızda"
                variant="ghost"
            />
            <Button
                title="Ekibimiz"
                variant="ghost"
            />
            <Button
                title="Çalışma Alanlarımız"
                variant="ghost"
            />
            <Button
                title="Galeri"
                variant="ghost"
            />
        </div>


        <div
            className={classes.buttons}
        >
            <Button
                title="İletişim"
                variant="outline"
            />
            <Button
                className={classes.button}
                title="Bize Katılın"
            />
        </div>
    </div>
}
export default Navbar;


