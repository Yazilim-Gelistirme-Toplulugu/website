import * as React from "react"
const XIcon = ({
    color = "#ffffff",
    size = 30,
    ...props
}) => {
    const pahtScale = 30 / size;
    return <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            fill={color}
            transform={`scale(${1 / pahtScale})`}
            d="M23.05 2h4.295l-9.382 10.72L29 27.31h-8.64l-6.772-8.846-7.739 8.847H1.548L11.58 15.84 1 2h8.859l6.114 8.086L23.05 2Zm-1.51 22.743h2.38L8.563 4.433H6.007l15.534 20.31Z"
        />
    </svg>
}
export default XIcon
