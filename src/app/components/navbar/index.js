import React from 'react';

const Navbar = () => {
    return <div>
        <div>
        </div>


        <div
            className={classes.menuList}
            style={{
                gap: spaces.inline * 2
            }}
        >
            <Text variant="header7">
                Anasayfa
            </Text>
            <Text variant="header7">
                Hakkımızda
            </Text>
            <Text variant="header7">
                Ekibimiz
            </Text>
            <Text variant="header7">
                Çalışma Alanlarımız
            </Text>
            <Text variant="header7">
                Galeri
            </Text>
        </div>


        <div>
            <Button
                title="İletişim"
                variant="outline"
            />
            <Button
                title="Bize Katılın"
            />
        </div>
    </div>
}
export default Navbar;
