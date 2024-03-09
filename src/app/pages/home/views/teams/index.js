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
    ayse,
    burak,
    busranur,
    ozkan,
    ilayda,
    nisaPeri,
    dilay,
    keziban,
    nevra,
    sami
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
            fullName: "Şaziye Dağ",
            duty: "Yönetim Kurulu Başkanı",
            photo: saziye,
        },
        {
            id: 1,
            fullName: "Mehmet Konukçu",
            duty: "Yönetim Kurulu Başkan Yardımcısı",
            photo: mehmet,
        },
        {
            id: 2,
            fullName: "Ömer Şahin",
            duty: "Yönetim Kurulu Başkan Yardımcısı",
            photo: omer,
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
        /* {
             id: 8,
             fullName: "Talha Suna",
             duty: "Yönetim Kurulu Üyesi",
             photo: saziye,
         },*/
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
            photo: busranur,
        },
        {
            id: 11,
            fullName: "Enes Candemir",
            duty: "Yönetim Kurulu Üyesi",
            photo: enes,
        },
        {
            id: 12,
            fullName: "Nevra Nur Doğan",
            duty: "Yönetim Kurulu Üyesi",
            photo: nevra,
        },
        {
            id: 13,
            fullName: "Nisa Peri Aksoy",
            duty: "Yönetim Kurulu Üyesi",
            photo: nisaPeri,
        },
        {
            id: 14,
            fullName: "Büşra Kaya",
            duty: "Sosyal Medya Ekip Üyesi",
            photo: busra,
        },
        /*  {
              id: 17,
              fullName: "Feyza Ece Uras",
              duty: "Sosyal Medya Ekip Üyesi",
              photo: saziye,
          },*/

        {
            id: 15,
            fullName: "Özkan Sarı",
            duty: "Video-Edit Ekip Üyesi",
            photo: ozkan,
        },
        /*  {
              id: 20,
              fullName: "Nida Kaplan",
              duty: "Video-Edit Ekip Üyesi",
              photo: saziye,
          },*/
        {
            id: 16,
            fullName: "İrem Demir",
            duty: "Topluluk Üyesi",
            photo: irem,
        },
        {
            id: 17,
            fullName: "Sevinç Tanış",
            duty: "Topluluk Üyesi",
            photo: sevinc,
        },
        {
            id: 18,
            fullName: "Sezai Öztürk",
            duty: "Topluluk Üyesi",
            photo: sezai,
        },
        {
            id: 19,
            fullName: "İlknur Demiral",
            duty: "Topluluk Üyesi",
            photo: ilknur,
        },
        {
            id: 20,
            fullName: "Ali Haydar Şeflek",
            duty: "Topluluk Üyesi",
            photo: alihaydar,
        },
        {
            id: 21,
            fullName: "Burak Aslan",
            duty: "Topluluk Üyesi",
            photo: burak,
        },
    ];

    let splitMembers = () => {
        let startIndex = 0;
        let splitedMembers = [];
        let i = 0;
        let membersPerPage = //sayfanın yanllızca açılış değerini alıyor büyüme küçülme durumlarında değişmiyor
            window.innerWidth <= 600
                ? 1
                : window.innerWidth <= 1000
                    ? 4
                    : 6;

        while (i < members.length) {
            let partMembers = [];

            for (i = startIndex; i < startIndex + membersPerPage && i < members.length; i++) {
                partMembers.push(members[i]);
            }

            splitedMembers.push(partMembers);
            startIndex += membersPerPage;
        }

        return splitedMembers;
    };

    const renderTeamsSection = () => {

        return <Carousel
            showStatus={false}
            showArrows={false}
            showThumbs={false}
            emulateTouch={true}
            interval={3000}
            autoPlay={true}
            infiniteLoop={true}
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
