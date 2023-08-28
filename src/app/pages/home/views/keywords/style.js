import { createUseStyles } from "react-jss";
import { colors } from "../../../../themes/variants/dark";
const useStyles = createUseStyles({
    container: {
        display: "flex",
        background: colors.backgraundColor,
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
    },
    keywordsContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        width: "200%"
    },
    keyword: {
        display: "inline-block",
        width: "140px",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        boxShadow: " 0px 0px 8px 0px #EF4126",
        position: "relative",
        transition: "none"
    },
})
export default useStyles;
