import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    textContent: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        boxShadow: "-12px 0px 12px 0px rgba(0, 0, 0, 0.25)",
        height:"80vh"
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
    active: {
        //  position:"absolute",
        //  height: "100vh",
        width: "46%",
        padding: "64px 104px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
       //display: "-webkit-flex",
        //   display: "flex",
    },
    passive: {
        //   position:"absolute",
        transform: "rotate(90deg)",
           height:"32vh",
           overflow: "hidden",
        //     width:"100vh",
        width: "18%",
        //  overflow: "hidden"
    },
})
export default useStyles;
