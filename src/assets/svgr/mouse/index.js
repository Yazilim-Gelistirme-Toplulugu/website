import * as React from "react"
const MouseIcon = ({
    size = 30,
    color = "#fff",
    ...props
}) => {
    const pathScale = 30 / size;
    return <svg
        width={size}
        height={size}
        fill="none"
        {...props}
    >
        <path
            stroke={color}
            transform={`scale(${1 / pathScale})`}
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 10.667c0-2.299.841-4.503 2.338-6.129C10.835 2.913 12.865 2 14.983 2c2.116 0 4.147.913 5.644 2.538 1.497 1.626 2.338 3.83 2.338 6.129v8.666c0 2.299-.841 4.503-2.338 6.129C19.13 27.087 17.1 28 14.983 28c-2.118 0-4.148-.913-5.645-2.538C7.841 23.836 7 21.632 7 19.333v-8.666Z"
        />
        <path
            stroke={color}
            transform={`scale(${1 / pathScale})`}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.982 7.778v5.778"
        />
    </svg>
}
export default MouseIcon;
