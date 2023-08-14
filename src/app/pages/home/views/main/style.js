import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width:"100%",
        height:"100wh",
        position: "relative"
    },
    maintext: {
        zIndex: "2",
        position: "absolute",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center"
    }
})
export default useStyles;
