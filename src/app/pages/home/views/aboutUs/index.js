
import useStyles from './style';
import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';
import { UYE_ALIM_LINK } from '../../../../constants';

const AboutUsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();

    const [aboutUsSections, setAboutUsSection] = useState([
        {
            title: "Biz Kimiz ?",
            contentText: "Konya Teknik Üniversitesi Yazılım Geliştirme Topluluğu, bilgisayar ve yazılım mühendisliği öğrencileri tarafından 2022 yılında kurulmuştur. Bu topluluk, web, mobil ve oyun alanlarına ilgi duyan öğrencilerin bir araya gelerek çalışma grupları oluşturdukları, bilgi alışverişinde bulundukları ve kendilerini bu alanlarda geliştirdikleri bir platformdur. Aynı zamanda, konuda uzman kişiler tarafından düzenlenen seminerlerle üyelerine bilgi birikimini artırma fırsatı sunmaktadır.",
            isActive: false,
            backgroundColor: "aboutUsBox1",
        },
        {
            title: "Neler Yaparız ?",
            contentText: "Web, mobil ve oyun alanlarında ayrı ayrı çalışma grupları oluşturulmaktadır. Bu gruplar, üyelerin bilgi birikimini artırmak amacıyla çeşitli ödevlendirmeler ve derslerle desteklenmektedir. Aynı zamanda, konuda uzman kişiler tarafından düzenlenen seminerlerle üyeler, bilgi ve tecrübeleri ile buluşma ve paylaşma fırsatı elde etmektedir. Topluluk, sadece bilgi odaklı değil, aynı zamanda sosyal açıdan da bir araya gelmeyi ve kaynaşmayı amaçlayan çeşitli etkinliklere de ev sahipliği yapmaktadır.",
            isActive: true,
            backgroundColor: "aboutUsBox2",
        },
        {
            title: "Neden Biz ?",
            contentText: "Yazılım Geliştirme Topluluğu, sadece yazılım alanında kendinizi geliştirmenize değil, aynı zamanda sosyal açıdan güzel arkadaşlıklar kurabileceğiniz bir ortam sunmaktadır. Birlikte gerçekleştireceğimiz projelerle CV'nize ekleyebileceğiniz birçok tecrübe kazanma fırsatı bulabilirsiniz. Bu projeler ve çalışmalar, üniversite yıllarınızı daha aktif ve verimli geçirmenize olanak tanır.",
            isActive: false,
            backgroundColor: "aboutUsBox3",
        },
        {
            title: "Bize Katıl !",
            contentText: "Web sitesi ve mobil uygulama geliştirmeyi öğrenmek istiyorsan veya bu alanda deneyime sahipsen, yeteneklerin ve hedeflerin doğrultusunda değerlendirebileceğin birçok fırsat, Yazılım Geliştirme Topluluğu'nda seni bekliyor.",
            isActive: false,
            backgroundColor: "aboutUsBox4",
        },

    ])


    return <div
        className={classes.main}
        id='aboutUs'
    >

        {aboutUsSections.map((item) => {
            return <div
                className={classes.aboutUsSection}
                style={{
                    width: item.isActive ? "49%" : "17%",
                    background: colors[item.backgroundColor],
                    color: colors.body,
                    padding: spaces.container * 3,
                    gap: spaces.item * 2
                }}
                onClick={() => {
                    if (item.isActive === false) {
                        let _aboutUsSections = JSON.parse(JSON.stringify(aboutUsSections))

                        const currentIndex = _aboutUsSections.findIndex(e => e.title === item.title)

                        _aboutUsSections.forEach(element => {
                            element.isActive = false;
                        });

                        _aboutUsSections[currentIndex].isActive = true
                        setAboutUsSection(_aboutUsSections)
                    }
                }}
            >
                <Text
                    variant="header1"
                    style={{
                        whiteSpace: item.isActive ? "initial" : "nowrap",
                        writingMode: item.isActive ? "initial" : "vertical-lr",
                    }}
                >
                    {item.title}
                </Text>
                <Text
                    variant="header6"
                    style={{
                        display: item.isActive ? "block " : "none",
                    }}
                >
                    {item.contentText}
                </Text>
                {
                    item.title === "Bize Katıl !" && item.isActive === true ?
                        <Button
                            spreadBehaviour='free'
                            textColor='body'
                            title="Bize Katılın"
                            onClick={() => {
                                window.open(UYE_ALIM_LINK, "_blank");
                            }}
                        />
                        :
                        null
                }
            </div>
        })
        }

    </div>
}
export default AboutUsSection;


