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
        },
        "@font-face": [
            {
                fontFamily: "Quicksand-Bold",
                src: 'url("/assets/fonts/Quicksand-Bold.ttf")',
                fontStyle: "normal"
            },
            {
                fontFamily: "Quicksand-Light",
                src: 'url("/assets/fonts/Quicksand-Light.ttf")',
                fontStyle: "normal"
            },
            {
                fontFamily: "Quicksand-Medium",
                src: 'url("/assets/fonts/Quicksand-Medium.ttf")',
                fontStyle: "normal"
            },
            {
                fontFamily: "Quicksand-Regular",
                src: 'url("/assets/fonts/Quicksand-Regular.ttf")',
                fontStyle: "normal"
            },
            {
                fontFamily: "Quicksand-SemiBold",
                src: 'url("/assets/fonts/Quicksand-SemiBold.ttf")',
                fontStyle: "normal"
            }
        ]
},
});

export default useStyles;