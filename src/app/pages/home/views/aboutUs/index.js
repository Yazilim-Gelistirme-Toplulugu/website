
import useStyles from './style';
import React, { useState } from 'react';
import { Button, Text, useNCoreTheme } from 'ncore-web';

const AboutUsSection = () => {
    const { colors, spaces } = useNCoreTheme();
    const classes = useStyles();

    const [aboutUsSections, setAboutUsSection] = useState([
        {
            title: "Biz Kimiz ?",
            contentText: "Konya Teknik Üniversitesi Yazılım Geliştirme Topluluğu, bilgisayar ve yazılım mühendisliği öğrencileri tarafından 2022'de kuruldu. Web ve mobil alanına ilgi duyan öğrencilerin çalışma grupları kurarak bilgi alışverişi yaptıkları ve bu alanda kendilerini geliştirdikleri bir topluluktur. Aynı zamanda konuda uzman kişiler tarafından verilen seminerlerle bilgi birikimini attıran etkinlikler yapmaktadır.",
            isActive: false,
            backgraundColor: "#0B3F65",
        },
        {
            title: "Neler Yaparız ?",
            contentText: "Web ve mobil alanında ayrı ayrı olmak üzere çalışma grupları oluşturulmaktadır. Bu çalışma grupları ile bilgi birikimini arttırmak amacıyla çeşitli ödevlendirmeler ve dersler verilmektedir. Aynı zamanda bilgi ve tecrübelerini bizlerle paylaşması için konuda uzman kişiler tarafından seminerler düzenlenmektedir. Sadece bilgi içerikli değil aynı zamanda sosyal anlamda tanışmak ve kaynaşmak amacıyla çeşitli etkinlikler yapılmaktadır.",
            isActive: true,
            backgraundColor: "#021524",
        },
        {
            title: "Neden Biz ?",
            contentText: "Yazılım Geliştirme Topluluğu, gerek yazılım alanında kendinizi geliştirebileceğiniz gerekse sosyal anlamda güzel arkadaşlıklar kurabileceğiniz bir ortam sunar. Birlikte yapacağımız projeler ile CV'nize ekleyebileceğiniz birçok tecrübe kazanabilirsiniz. Bu projeler ve çalışmalar ile daha aktif ve verimli üniversite yılları geçirebilirsiniz.",
            isActive: false,
            backgraundColor: "#042137",
        },
        {
            title: "Bize Katıl !",
            contentText: "Web site ve mobil uygulama geliştirme öğrenmek istiyorsan veya alanında deneyimliysen, yeteneklerin ve hedeflerin doğrultusunda değerlendirebileceğin tüm fırsatlar Yazılım Geliştirme Topluluğu'nda seni bekliyor.",
            isActive: false,
            backgraundColor: "#094F82",
        },

    ])


    return <div
        className={classes.main}
    >

        {aboutUsSections.map((item) => {
            return <div
                className={classes.aboutUsSection}
                style={{
                    width: item.isActive ? "49%" : "17%",
                    background: item.backgraundColor,
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
                        //transform: item.isActive ? "rotate(0deg)" : "rotate(90deg)",
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


