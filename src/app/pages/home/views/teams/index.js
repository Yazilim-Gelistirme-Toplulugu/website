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
    baiysh,
    hafsa,
    ayse
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
            fullName: "Burak Aslan",
            duty: "Yönetim Kurulu Başkanı",
            photo: saziye,
        },
        {
            id: 1,
            fullName: "Şaziye Dağ",
            duty: "Yönetim Kurulu Başkan Yardımcısı",
            photo: saziye,
        },
        {
            id: 2,
            fullName: "Hafsa İrem Çelik",
            duty: "Yönetim Kurulu Başkan Yardımcısı",
            photo: hafsa,
        },
        {
            id: 3,
            fullName: "Osman Can Ceylan",
            duty: "Yönetim Kurulu Üyesi",
            photo: osman,
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
            fullName: "Zehra Küçüker",
            duty: "Yönetim Kurulu Üyesi",
            photo: zehra,
        },
        {
            id: 7,
            fullName: "Ayşe Melek Acar",
            duty: "Yönetim Kurulu Üyesi",
            photo: ayse,
        },
        {
            id: 8,
            fullName: "Talha Suna",
            duty: "Yönetim Kurulu Üyesi",
            photo: saziye,
        },
        {
            id: 9,
            fullName: "Baiysh Sabirzhanov",
            duty: "Yönetim Kurulu Üyesi",
            photo: baiysh,
        },
        {
            id: 10,
            fullName: "Büşranur Şaşmaz",
            duty: "Yönetim Kurulu Üyesi",
            photo: saziye,
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
            fullName: "Keziban Karaoğlu",
            duty: "Yönetim Kurulu Üyesi",
            photo: saziye,
        },
        {
            id: 15,
            fullName: "Nisa Peri Aksoy",
            duty: "Yönetim Kurulu Üyesi",
            photo: saziye,
        },
        {
            id: 16,
            fullName: "Sevinç Tanış",
            duty: "Sosyal Medya Ekip Üyesi",
            photo: sevinc,
        },
        {
            id: 17,
            fullName: "Feyza Ece Uras",
            duty: "Sosyal Medya Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 18,
            fullName: "Dilay Uluergüven",
            duty: "Tasarım Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 19,
            fullName: "Özkan Sarı",
            duty: "Video-Edit Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 20,
            fullName: "Nida Kaplan",
            duty: "Video-Edit Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 21,
            fullName: "İlayda Cirit",
            duty: "Etkinlik-Organizasyon Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 22,
            fullName: "Ali Haydar Şeflek",
            duty: "Etkinlik-Organizasyon Ekip Üyesi",
            photo: alihaydar,
        },
        {
            id: 23,
            fullName: "Emir Arslan",
            duty: "Etkinlik-Organizasyon Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 24,
            fullName: "Furkan Kılıç",
            duty: "Etkinlik-Organizasyon Ekip Üyesi",
            photo: saziye,
        },
        {
            id: 25,
            fullName: "İrem Demir",
            duty: "Topluluk Üyesi",
            photo: irem,
        },
        {
            id: 26,
            fullName: "Büşra Kaya",
            duty: "Topluluk Üyesi",
            photo: busra,
        },
        {
            id: 27,
            fullName: "Sezai Öztürk",
            duty: "Topluluk Üyesi",
            photo: sezai,
        },
        {
            id: 28,
            fullName: "İlknur Demiral",
            duty: "Topluluk Üyesi",
            photo: ilknur,
        },
        {
            id: 29,
            fullName: "Taha Atakan Ceylan",
            duty: "Topluluk Üyesi",
            photo: atakan,
        },
        {
            id: 30,
            fullName: "Mecit Mert Bişgin",
            duty: "Topluluk Üyesi",
            photo: mecit,
        },
        {
            id: 31,
            fullName: "Muhammet Selim Yaman",
            duty: "Topluluk Üyesi",
            photo: selim,
        },
        {
            id: 32,
            fullName: "Cennet Bayar",
            duty: "Topluluk Üyesi",
            photo: cennet,
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
        id='teams'
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
