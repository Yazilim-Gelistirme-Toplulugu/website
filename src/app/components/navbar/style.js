
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    navbar: {
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.30)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(5px)",
    },
    leftComponent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    dropdownMenuBarIcon: {
        display: "none"
    },
    rightComponent: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%"
    },
    sectionLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none",
        width: "100%",
    },
    buttonLink: {
        borderRadius: "50px !important",
        padding: "0px !important",
        margin: "0px !important",
    },
    activeLink: {
        //zIndex: -1,
    },
    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        whiteSpace: "nowrap"
    },
    responsiveHeaderContainer: {
        display: "none",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    "@media only screen and (max-width: 1000px)": {
        leftComponent: {
            justifyContent: "space-between",
            width: "100%",
        },
        dropdownMenuBarIcon: {
            display: "block"
        },
        rightComponent: {
            flexDirection: "column",
            position: "absolute",
            top: 0,
            left: 0,
            alignSelf: "stretch",
            boxSizing: "border-box",
            top: "-400%",
        },
        responsiveHeaderContainer: {
            display: "flex",
            width: "100%",
        },
        sectionLinks: {
            flexDirection: "column",
        },
        buttons: {
            flexDirection: "column",
            alignItems: "center",
        }
    }
})
export default useStyles;
