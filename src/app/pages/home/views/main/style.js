import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width: "100%",
        height: "100vh",
    },
    maintext: {
        position: "absolute",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
    },
    mouse: {
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: "10%",
        left: "0",
        width: "100%",
        transform: "translate(-50%, -50%)",
        animation: "$mousescroll 2s infinite",
        animationTimingFunction: "linear",
    },
    "@keyframes mousescroll": {
        "0%": {
            transform: "translateY(0px)",
        },
        "25%": {
            transform: "translateY(20px)",
        },
        "95%": {
            transform: "translateY(30px)",
        },
        "100%": {
            transform: "translateY(0px)",
        }
    }
})
export default useStyles;
