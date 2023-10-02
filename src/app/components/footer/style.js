
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#9C2707",
    },
    content: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "stretch",
    },
    sectionLinks: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
    },
    logos: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
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
    }
})
export default useStyles;
