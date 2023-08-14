import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width:"100%",
        height:"100wh",
        position: "relative"
    },
    maintext: {
        fontFamily: "Quicksand",
        fontWeight: "300",
        zIndex: "2",
        position: "absolute",
        display: "flex",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        fontSize: "90px"
    }
})
export default useStyles;
