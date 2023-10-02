import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import ygtLogo from "../../../../src/assets/image/components/ygtLogo.png";
import ktunLogo from "../../../../src/assets/image/components/ktunLogo.png";
import useStyles from './style';
import DiscordIcon from '../../../assets/svgr/discord';
import InstagramIcon from '../../../assets/svgr/instagram/index.js';
import LinkedInIcon from '../../../assets/svgr/linkedIn/index.js';
import XIcon from '../../../assets/svgr/x/index.js';


const Footer = () => {
    const { spaces, colors } = useNCoreTheme();
    const classes = useStyles();

    const [footerButtons, setFooterButtons] = useState([
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
            isActive: true
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
            backgroundColor: colors.footer,
        }}
    >
        <div
            className={classes.content}
        >
            <div
                className={classes.sectionLinks}
                style={{
                    gap: spaces.inline / 10,

                }}

            >
                {
                    footerButtons.map((item) => {
                        return <div
                            style={{
                                paddingBottom: spaces.item / 10,
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
                <img src={ygtLogo} alt="" />
                <img src={ktunLogo} alt="" />
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
                >
                    <InstagramIcon size={30} color={colors.body} />
                    <XIcon size={30} color={colors.body} />
                    <LinkedInIcon size={30} color={colors.body} />
                    <DiscordIcon size={30} color={colors.body} />
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


