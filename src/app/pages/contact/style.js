import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px",
    },
    mainContent: {
        display: "flex",
        width: "556px",
        padding: "40px 56px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        borderRadius: "32px",
        border: "3px solid #0B3F65",
        background: "rgba(11, 63, 101, 0.20)",
        backdropFilter: "blur(10px)",
    },
    inputArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "9px",
        alignSelf: "stretch",
    }
})
export default useStyles;
