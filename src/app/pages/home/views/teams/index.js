import React from 'react';
import useStyles from './style';
import { Text } from 'ncore-web';
import { osman, sevinc, irem, saziye, seyda, esra, busra, sezai, alihaydar, ilknur, atakan, enes, mehmet, omer, mecit, selim, cennet, zehra } from '../../../../../assets/image/teams/membersPhoto/index';
import Slider from 'react-slick';

const TeamsSection = () => {
    const classes = useStyles();
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
            duty: "Yönetim Kurulu Başkan Yardımcısı",
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

    const settings = {
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    arrows: false,
                    slidesToShow: 5,
                    slidesToScroll: 3,
                }
            },
        ]
    }

    return (
        <div
            className={classes.teams}
        >
            <div
                className={classes.content}
            >
                <div
                    className={classes.imageArea}
                >

                    <Slider
                        {...settings}
                        adaptiveHeight={true}
                    >
                        {
                            members.map(item => (
                                <div
                                    key={item.id}
                                    className={classes.memberCard}
                                >
                                    <img
                                        src={item.photo}
                                        className={classes.photo}
                                        alt={item.fullName}
                                    />
                                    <div
                                        className={classes.personInfo}
                                    >
                                        <Text
                                            color='body'
                                            variant='header5'
                                        >
                                            {item.fullName}
                                        </Text>
                                        <Text
                                            color='body'
                                            variant='header7'
                                        >
                                            {item.duty}
                                        </Text>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div
                    className={classes.titleArea}
                >
                    <Text
                        color='body'
                        variant='header13'
                        style={{
                            transform: "rotate(90deg)",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        Ekibimiz
                    </Text>
                </div>

            </div>
        </div>
    );
};

export default TeamsSection;
