import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        "*": {
            padding: 0,
            margin: 0,
            userSelect: "none"
        },
        "html, body, #root": {
            scrollBehavior: "smooth !important",
            height: "100%",
            width: "100%",
        },
        "button": {
            borderRadius: "32px !important",
        }
},
});

export default useStyles;