import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    container: {
        position: "relative",
        "&:hover > div": {
            backgroundColor: "rgba(2, 21, 36, .6)",
            opacity: 1
        }
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
