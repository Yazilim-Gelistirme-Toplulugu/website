import { createUseStyles } from "react-jss";
import backgroundImg from "../../../../../assets/image/teams/teamsBackground.png"

const useStyles = createUseStyles({
    teams: {
        display: "flex",
        width: "100%",
        height: "691px",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${backgroundImg})`,
        backgroundColor: "#021524"
    },
    content: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexShrink: "0",
        background: "rgba(0, 0, 0, 0.05)",
        backdropFilter: "blur(3.5px)",
    },
    titleArea: {
        display: "flex",
        width: "138px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexShrink: "0",
        alignSelf: "stretch",
        background: "#EF4126",
        boxShadow: " -12px 0px 12px 0px rgba(0, 0, 0, 0.25)",
    },

    imageArea: {
        display: "flex",
        width: "100%",
        height: "537px",
      //  padding: "64px 64px",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        gap: "64px",
        flexShrink: "0",
        flexWrap: "wrap",
     //   overflow: "hidden",
    },

    photo: {
        width: "235px",
        height: "235px",
        flexShrink: "0",
        borderRadius: "0px 30px 30px 30px",
        border: "3px solid var(--light-small, #FFF)",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    }
})
export default useStyles;
