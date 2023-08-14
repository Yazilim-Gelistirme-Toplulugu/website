import { Text } from 'ncore-web';
import React from 'react'
import useStyles from './style';

const TeamsSection = () => {
    const classes = useStyles();
    return <div
        className={classes.main}
    >
        <div
            className={`${classes.textContent} ${classes.whoAreWeSection} ${classes.active}`}
        >
            <Text
                variant="header1"
            >
                Biz Kimiz ?
            </Text>
            <Text
                variant="header6"
            >
                Konya Teknik Üniversitesi Yazılım
                Geliştirme Topluluğu, bilgisayar
                ve yazılım mühendisliği öğrencileri
                tarafından 2022'de kuruldu. Web ve
                mobil alanına ilgi duyan öğrencilerin
                çalışma grupları kurarak bilgi alışverişi
                yaptıkları ve bu alanda kendilerini
                geliştirdikleri bir topluluktur. Aynı
                zamanda konuda uzman kişiler tarafından
                verilen seminerlerle bilgi birikimini
                attıran etkinlikler yapmaktadır.
            </Text>
        </div>

        <div
            className={`${classes.textContent} ${classes.whatDoWeDoSection} ${classes.passive}`}
        >
            <Text
                variant="header1"
            >
                Neler Yaparız ?
            </Text>
            <Text
                variant="header6"
            >
                Web ve mobil alanında ayrı ayrı olmak üzere
                çalışma grupları oluşturulmaktadır. Bu çalışma
                grupları ile bilgi birikimini arttırmak amacıyla
                çeşitli ödevlendirmeler ve dersler verilmektedir.
                Aynı zamanda bilgi ve tecrübelerini bizlerle
                paylaşması için konuda uzman kişiler tarafından
                seminerler düzenlenmektedir. Sadece bilgi içerikli
                değil aynı zamanda sosyal anlamda tanışmak ve
                kaynaşmak amacıyla çeşitli etkinlikler yapılmaktadır.
            </Text>
        </div>

        <div
            className={`${classes.textContent} ${classes.whyUsSeciton} ${classes.passive}`}
        >
            <Text
                variant="header1"
            >
                Neden Biz ?
            </Text>
            <Text
                variant="header6"
            >
                Yazılım Geliştirme Topluluğu, gerek yazılım
                alanında kendinizi geliştirebileceğiniz
                gerekse sosyal anlamda güzel arkadaşlıklar
                kurabileceğiniz bir ortam sunar. Birlikte
                yapacağımız projeler ile CV'nize ekleyebileceğiniz
                birçok tecrübe kazanabilirsiniz. Bu projeler ve
                çalışmalar ile daha aktif ve verimli üniversite
                yılları geçirebilirsiniz.
            </Text>
        </div>

        <div
            className={`${classes.textContent} ${classes.joinUsSection} ${classes.passive}`}
        >
            <Text
                variant="header1"
            >
                Bize Katılın !
            </Text>
            <Text
                variant="header6"
            >
                Web site ve mobil uygulama geliştirme öğrenmek
                istiyorsan veya alanında deneyimliysen, yeteneklerin
                ve hedeflerin doğrultusunda değerlendirebileceğin
                tüm fırsatlar Yazılım Geliştirme Topluluğu'nda seni
                bekliyor.
            </Text>
        </div>


    </div>
}
export default TeamsSection;
