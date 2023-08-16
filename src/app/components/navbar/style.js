
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    navbar: {
        zIndex: 1,
        left: 0,
        right: 0,
        top: 0,
        display: "flex",
        flexDirection: "row",
        padding: "24px 56px",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.30)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(5px)",
      //  gap: 40,
    },

    sectionLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        userSelect: "none"
    },

    buttonLink: {
        borderRadius: "50px !important",
        padding: "0px !important",
        margin: "0px !important",
    },

    activeLink:{
        //zIndex: -1,
    },


    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    }
})
export default useStyles;
