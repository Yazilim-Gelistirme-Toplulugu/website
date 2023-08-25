import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    main: {
        display: "flex",
        padding: "112px 10px",
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "stretch",
        background: "#021524",
    },

    keywordsContainer: {
        display: "flex",
        padding: "10px",
        justifyContent: "center",
        alignItems: "center",
        gap: "32px",
        alignSelf: "stretch",
        overflow: "hidden",
        whiteSpace: "nowrap",
    },

    keywordsContainerRight:{
        animation: "$scrollRight 18s linear infinite",
    },

    keywordsContainerLeft:{
        animation: "$scrollLeft 18s linear infinite",
    },

    keyword: {
        display: "inline-block",
        width: "140px",
        padding: "18px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: "#021524",
        boxShadow: " 0px 0px 8px 0px #EF4126",
    },

    '@keyframes scrollRight': {
        '0%': {
            transform: 'translateX(100%)',
        },
        '100%': {
            transform: 'translateX(-100%)',
        },
    },

    '@keyframes scrollLeft': {
        '0%': {
            transform: 'translateX(-100%)',
        },
        '100%': {
            transform: 'translateX(100%)',
        },
    },


})
export default useStyles;
