import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    main: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    logo: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '& img': {
            width: "100px"
        },
    },


})
export default useStyles;
