import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        border: "2px solid var(--light---small, #FFF)",
        borderRadius: "0px 30px 30px 30px",
        position: "relative",
        "&:hover > div": {
            backgroundColor: "rgba(2, 21, 36, .6)",
            opacity: 1
        },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "250px",
        width: "250px",
        '@media (max-width: 600px)': {
            height: "300px",
            width: "300px",
        },
    },
    content: {
        opacity: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "0px !important",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }
})
export default useStyles;
