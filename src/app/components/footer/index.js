import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import ygtLogo from "../../../../src/assets/image/components/ygtLogo.png";
import ktunLogo from "../../../../src/assets/image/components/ktunLogo.png";
import useStyles from './style';
import DiscordIcon from '../../../assets/svgr/discord';
import InstagramIcon from '../../../assets/svgr/instagram/index.js';
import LinkedInIcon from '../../../assets/svgr/linkedIn/index.js';
import XIcon from '../../../assets/svgr/x/index.js';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const { spaces, colors } = useNCoreTheme();
    const classes = useStyles();
    const navigate = useNavigate();
    const [footerButtons, setFooterButtons] = useState([
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
        {
            title: "Galeri",
            href: "#",
            isActive: false,
            navigateSection: "/home#gallery"
        },

    ])

    return <div
        className={classes.container}
        style={{
            paddingLeft: spaces.inline * 18,
            paddingTop: spaces.inline * 12,
            paddingRight: spaces.inline * 18,
            paddingBottom: spaces.inline * 3,
            gap: spaces.inline * 12,
            backgroundColor: colors.backgroundColor,
        }}
    >
        <div
            className={classes.content}
        >
            <div
                className={classes.sectionLinks}
                style={{
                    gap: spaces.inline * 0,

                }}

            >
                {
                    footerButtons.map((item) => {
                        return <div
                            style={{
                                transition: "all .05s ease-in-out",
                            }}
                        >
                            <Button
                                textColor='body'
                                className={classes.buttonLink}
                                title={item.title}
                                variant="ghost"
                                onClick={() => {
                                    if (item.isActive === false) {
                                        let _footerButtons = JSON.parse(JSON.stringify(footerButtons))

                                        const currentIndex = _footerButtons.findIndex(e => e.title === item.title)

                                        _footerButtons.forEach(element => {
                                            element.isActive = false;
                                        });

                                        _footerButtons[currentIndex].isActive = true
                                        setFooterButtons(_footerButtons)
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
                className={classes.logos}
                style={{
                    gap: spaces.inline * 15,
                }}
            >
                <img
                    className={classes.button}
                    src={ygtLogo}
                    alt=""
                    onClick={() => {
                        navigate("/home");
                        setTimeout(() => {
                            window.open("#main", "_self")
                        }, 250);
                    }}
                />
                <Link
                    to="https://www.ktun.edu.tr/"
                    target="_blank"
                >
                    <img
                        className={classes.button}
                        src={ktunLogo}
                        alt=""
                    />
                </Link>
            </div>
            <div
                className={classes.followus}
                style={{
                    gap: spaces.inline * 8,
                }}
            >
                <Text
                    color='body'
                    variant='header16'
                >
                    Bizi Takip Edin!
                </Text>
                <div
                    className={classes.socialMediaIcons}
                    style={{
                        gap: spaces.inline * 1,
                    }}
                >
                    <Link
                        to="https://www.instagram.com/ktun.yazilimgelistirme/?hl=tr"
                        target="_blank"
                    >
                        <InstagramIcon
                            className={classes.button}
                            size={30}
                            color={colors.body}
                        />
                    </Link>
                    <Link
                        to="https://twitter.com/KTUNYazilimGT"
                        target="_blank"
                    >
                        <XIcon
                            className={classes.button}
                            size={30}
                            color={colors.body}
                        />
                    </Link>
                    <Link
                        to="https://www.linkedin.com/company/ktun-yazilimgelistirme/mycompany/"
                        target="_blank"
                    >
                        <LinkedInIcon
                            className={classes.button}
                            size={30}
                            color={colors.body}
                        />
                    </Link>
                    <Link
                        to="http://discord.gg/NgKXpsyatr"
                        target="_blank"
                    >
                        <DiscordIcon
                            className={classes.button}
                            size={30}
                            color={colors.body}
                        />
                    </Link>
                </div>
            </div>
        </div>
        <Text
            color='body'
            variant='copyright'
        >
            Telif Hakkı © 2023 Yazılım Geliştirme Topluluğu - Tüm Hakları Saklıdır.
        </Text>
    </div>
}
export default Footer;


