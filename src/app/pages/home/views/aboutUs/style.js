import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    aboutUsSection: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "-12px 0px 12px 0px rgba(0, 0, 0, 0.25)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        height:"60vh",
        cursor: "pointer",
    },
})
export default useStyles;
