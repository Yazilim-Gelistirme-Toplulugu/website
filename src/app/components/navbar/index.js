import React, { useRef, useState } from 'react';
import { Button, useNCoreTheme } from 'ncore-web';
import logo from "../../../../src/assets/image/components/logo.png"
import useStyles from './style';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import CloseIcon from '../../../assets/svgr/close';
import DropdownMenuBarIcon from '../../../assets/svgr/dropdownMenuBar';

const Navbar = () => {
    const { spaces, colors } = useNCoreTheme();
    const classes = useStyles();
    const navigate = useNavigate();

    const rightComponentRef = useRef();

    const [navbarButtons, setNavbarButtons] = useState([
        {
            title: "Anasayfa",
            href: "#",
            isActive: false,
            navigateSection: "#main"
        },
        {
            title: "Hakkımızda",
            href: "#",
            isActive: false,
            navigateSection: "#aboutUs"
        },
        {
            title: "Ekibimiz",
            href: "#",
            isActive: false,
            navigateSection: "#teams"
        },
        /* {
            title: "Galeri",
            href: "#",
            isActive: false,
            navigateSection: "#gallery"
        }, */

    ])

    const renderResponsiveHeader = () => {
        return <div
            className={classes.responsiveHeaderContainer}
        >
            <img
                src={logo}
                alt=""
                onClick={() => {
                    setTimeout(() => {
                        window.open("#main", "_self")
                    }, 250);
                }}
            />
            <div
                onClick={() => {
                    rightComponentRef.current.style.top = "-1000%";
                }}
            >
                <CloseIcon size={24} color={colors.body} />
            </div>
        </div>
    }

    return <div
        className={classes.navbar}
    >
        <div
            className={classes.leftComponent}
        >
            <img
                src={logo}
                alt=""
                onClick={() => {
                    setTimeout(() => {
                        window.open("#main", "_self")
                    }, 250);
                }}
            />
            <div
                className={classes.dropdownMenuBarIcon}
                onClick={() => {
                    rightComponentRef.current.style.top = 0;
                }}
            >
                <DropdownMenuBarIcon />
            </div>
        </div>
        <div
            className={classes.rightComponent}
            ref={rightComponentRef}
            style={{
                gap: spaces.item,
                padding: spaces.container
            }}
        >
            {renderResponsiveHeader()}
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
                                        navigate("/home") // yeni bir yan sayfa eklenirse değiştirilmeli.
                                        setTimeout(() => {
                                            window.open(item.navigateSection, "_self")
                                        }, 250);
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
                    spreadBehaviour='stretch'
                    onClick={() => {
                        navigate("/contact")
                    }}
                />
                <Link
                    to="https://docs.google.com/forms/d/e/1FAIpQLSdo7ylOulj-Oa3HydpB8tppgShYSQXXJdHhEpy8vmcAp2XiKg/viewform"
                    target="_blank"
                    style={{
                        textDecoration: "none"
                    }}
                >
                    <Button
                        textColor='body'
                        spreadBehaviour='stretch'
                        title="Bize Katılın"
                    />
                </Link>
            </div>
        </div>
    </div>
}
export default Navbar;