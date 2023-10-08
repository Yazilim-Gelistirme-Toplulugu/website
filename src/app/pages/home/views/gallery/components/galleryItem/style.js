import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    container: {
        height: 300,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%"
    },
    imageContainer: {
        minHeight: "100%",
        width: "100%"
    },
    image: {
        width: "100%"
    }
})
export default useStyles;
