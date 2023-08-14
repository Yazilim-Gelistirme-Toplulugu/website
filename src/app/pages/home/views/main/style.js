import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width:"100%",
        height:"100vh",
        position: "relative",
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
        alignItems: "center",
        justifyContent: "center",
        bottom: "10%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    }
})
export default useStyles;
