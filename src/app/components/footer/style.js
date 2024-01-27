
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
        '@media (max-width: 900px)': {
            justifyContent: "center",
        },
    },
    sectionLinks: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        width: "190px",
        '@media (max-width: 900px)': {
           display: "none"
        },
    },
    logos: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        '@media (max-width: 900px)': {
           display: "none"
        },
    },
    followus: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    socialMediaIcons: {
        display: "flex",
        width: "190px",
        justifyContent: "space-between",
        alignItems: "center",
    },
    button: {
        "&:hover": {
            opacity: 0.8,
            transition: "0.1s all ease"
        }
    }
})
export default useStyles;
