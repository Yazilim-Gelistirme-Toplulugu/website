import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    navbar: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        padding: "24px 56px",
        position: "fixed",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.30)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(5px)"
    },

    sectionLinks: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "16px",
        userSelect: "none"
    },

    buttonLink: {
        padding: "0px",
        margin: "0px"
    },

    button: {
        borderRadius: "200px",
        background: "linear-gradient(149deg, #FF563A 0%, #E9391E 100%)"
    },

    buttons: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "16px",
    }
})
export default useStyles;
