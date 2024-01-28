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
        justifyContent: "center",
        alignItems: "center",
    },
    sliderItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
        height: "100%",
        maxWidth: 800,
        margin: "auto",
        '@media (max-width:600px)':{
            maxWidth: 600,
        },
        '@media (max-width:1000px)':{
            maxWidth: 700,
        }
    }
})
export default useStyles;
