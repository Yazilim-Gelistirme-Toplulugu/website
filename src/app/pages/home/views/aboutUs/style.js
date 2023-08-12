import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        display: "flex",
        flexDirection: "row",

    },
    
    textContent: {
        display: "flex",
        flexDirection: "column",
        padding: "64px 104px",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        flex: "1 0 0",
        boxShadow: "-12px 0px 12px 0px rgba(0, 0, 0, 0.25)",
    },

    whoAreWeSection: {
        background: "#0B3F65",
    },
    whatDoWeDoSection: {
        background: "#021524",
    },
    whyUsSeciton: {
        background: "#042137",
    },
    joinUsSection: {
        background: "#094F82",
    },
    active:{
        width: "52%",
    },
})
export default useStyles;
