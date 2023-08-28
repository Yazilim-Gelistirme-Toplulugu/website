import { createUseStyles } from "react-jss";
import { useNCoreTheme } from 'ncore-web';
import { colors } from "../../../../themes/variants/dark";
const useStyles = createUseStyles({
    main: {
        display: "flex",
        background: colors.backgraundColor,
        flexDirection: "column",
        alignItems: "center",
    },
    keywordsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
    },
    keywordsContainerRight: {
        //animation: "$scrollRight 3s linear infinite",
    },
    keywordsContainerLeft: {
        //   animation: "$scrollLeft 3s linear infinite",
    },
    keyword: {
        display: "inline-block",
        width: "140px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: " 0px 0px 8px 0px #EF4126",
    },

    /* '@keyframes scrollRight': {
         '0%': {
             transform: 'translateX(0%)',
         },
         '100%': {
             transform: 'translateX(-900%)',
         },
     },
 
     '@keyframes scrollLeft': {
         '0%': {
             transform: 'translateX(0%)',
         },
         '100%': {
             transform: 'translateX(900%)',
         },
         if(){
 
         }
     }, */


})
export default useStyles;
