import React from 'react';
import useStyles from './style';
import { Text, useNCoreTheme } from 'ncore-web';
import {
    osman,
    sevinc,
    irem,
    saziye,
    seyda,
    esra,
    busra,
    sezai,
    alihaydar,
    ilknur,
    atakan,
    enes,
    mehmet,
    omer,
    mecit,
    selim,
    cennet,
    zehra,
} from '../../../../../assets/image/teams/membersPhoto/index';
import TeamMember from './components';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const TeamsSection = () => {
    const classes = useStyles();

    const {
        colors,
        spaces
    } = useNCoreTheme();

    const members = [
        {
            id: 0,
            fullName: "Osman Can Ceylan",
            duty: "Yönetim Kurulu Başkanı",
            photo: osman,
        },
        {
            id: 1,
            fullName: "Sevinç Tanış",
            duty: "Yönetim Kurulu Başkan yardımcısı",
            photo: sevinc,
        },
        {
            id: 2,
            fullName: "İrem Demir",
            duty: "Yönetim Kurulu Başkan Yardımcısı",
            photo: irem,
        },
        {
            id: 3,
            fullName: "Şaziye Dağ",
            duty: "Yönetim Kurulu Üyesi",
            photo: saziye,
        },
        {
            id: 4,
            fullName: "Şeyda Açıkgöz",
            duty: "Yönetim Kurulu Üyesi",
            photo: seyda,
        },
        {
            id: 5,
            fullName: "Esra Tosun",
            duty: "Yönetim Kurulu Üyesi",
            photo: esra,
        },
        {
            id: 6,
            fullName: "Büşra Kaya",
            duty: "Yönetim Kurulu Üyesi",
            photo: busra,
        },
        {
            id: 7,
            fullName: "Sezai Öztürk",
            duty: "Yönetim Kurulu Üyesi",
            photo: sezai,
        },
        {
            id: 8,
            fullName: "Ali Haydar Şeflek",
            duty: "Yönetim Kurulu Üyesi",
            photo: alihaydar,
        },
        {
            id: 9,
            fullName: "İlknur Demiral",
            duty: "Yönetim Kurulu Üyesi",
            photo: ilknur,
        },
        {
            id: 10,
            fullName: "Taha Atakan Ceylan",
            duty: "Yönetim Kurulu Üyesi",
            photo: atakan,
        },
        {
            id: 11,
            fullName: "Enes Candemir",
            duty: "Yönetim Kurulu Üyesi",
            photo: enes,
        },
        {
            id: 12,
            fullName: "Mehmet Konukçu",
            duty: "Yönetim Kurulu Üyesi",
            photo: mehmet,
        },
        {
            id: 13,
            fullName: "Ömer Şahin",
            duty: "Yönetim Kurulu Üyesi",
            photo: omer,
        },
        {
            id: 14,
            fullName: "Mecit Mert Bişgin",
            duty: "Yönetim Kurulu Üyesi",
            photo: mecit,
        },
        {
            id: 15,
            fullName: "Selim Yaman",
            duty: "Sosyal Medya Ekip Üyesi",
            photo: selim,
        },
        {
            id: 16,
            fullName: "Cennet Nur Bayar",
            duty: "Etkinlik-Organizasyon Ekip Üyesi",
            photo: cennet,
        },
        {
            id: 17,
            fullName: "Zehra Küçüker",
            duty: "Sponsorluk Ekip Üyesi",
            photo: zehra,
        },
    ];

    const splitMembers = () => {
        let startIndex = 0;
        let splitedMembers = [];
        let i = 0;

        while (i < members.length) {

            let partMembers = [];

            for (i = startIndex; i < startIndex + 6 && i < members.length; i++) {
                partMembers.push(members[i])
            }

            splitedMembers.push(partMembers)
            startIndex += 6;

        }

        return splitedMembers;
    }

    const renderTeamsSection = () => {

        return <Carousel
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            emulateTouch={true}
        >
            {
                splitMembers().map((item) => {
                    return <div
                        className={classes.sliderItem}
                        style={{
                            gap: spaces.item
                        }}
                    >
                        {
                            item.map(subItem => {
                                return <TeamMember {...subItem} />
                            })
                        }
                    </div>
                })
            }
        </Carousel>
    }

    return <div
        className={classes.container}
        style={{
            backgroundColor: colors.layer1
        }}
    >
        <div
            className={classes.titleContainer}
            style={{
                backgroundColor: colors.orange,
                padding: spaces.item
            }}
        >
            <Text
                variant='header13'
            >Ekibimiz</Text>
        </div>
        <div
            className={classes.sliderContainer}
            style={{
                gap: spaces.item,
                padding: spaces.container * 2
            }}
        >
            {renderTeamsSection()}
        </div>
    </div>
};

export default TeamsSection;
