import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        '@media (max-width:600px)': {
            width: "50%",
        }
    },
    mainContent: {
        margin: "250px 0 150px 0",
        display: "flex",
        width: "500px",
        padding: "40px 56px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        borderRadius: "32px",
        border: "3px solid #0B3F65",
        background: "rgba(11, 63, 101, 0.20)",
        backdropFilter: "blur(10px)",
        '@media (max-width:600px)': {
            width: "80%",
            padding: "60px 20px",
            margin: "0",
        }
    },
    inputArea: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "8px",
        width: "100%",
    }
})
export default useStyles;
