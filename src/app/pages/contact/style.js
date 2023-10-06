import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    mainContent: {
        margin: "250px 0 150px 0",
        display: "flex",
        width: "500px",
        padding: "40px 56px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center", //center olmasına ragmen gönder butonu ortada değil
        gap: "32px",
        borderRadius: "32px",
        border: "3px solid #0B3F65",
        background: "rgba(11, 63, 101, 0.40)",
        backdropFilter: "blur(10px)",
    },
    inputArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        width: "100%"
    }
})
export default useStyles;
