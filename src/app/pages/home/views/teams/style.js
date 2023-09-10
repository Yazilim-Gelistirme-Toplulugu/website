import { createUseStyles } from "react-jss";
import backgroundImg from "../../../../../assets/image/teams/teamsBackground.png"

const useStyles = createUseStyles({
    container: {
        display: "flex",
        flexDirection: "column",
    },
    titleContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    sliderContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    sliderItem: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
        width: "100%",
        height: "100%",
        maxWidth: 800,
        margin: "auto"
    }
})
export default useStyles;
