import * as React from "react"
const LinkedInIcon = ({
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
            d="M27 1H2.994C1.894 1 1 1.906 1 3.019V26.98C1 28.094 1.894 29 2.994 29H27c1.1 0 2-.906 2-2.019V3.02C29 1.906 28.1 1 27 1ZM9.462 25h-4.15V11.637H9.47V25h-.006ZM7.388 9.812a2.407 2.407 0 0 1 0-4.812 2.411 2.411 0 0 1 2.406 2.406 2.403 2.403 0 0 1-2.407 2.407ZM25.017 25h-4.15v-6.5c0-1.55-.03-3.544-2.155-3.544-2.163 0-2.494 1.688-2.494 3.431V25h-4.15V11.637h3.981v1.825h.056c.556-1.05 1.913-2.156 3.931-2.156 4.2 0 4.982 2.769 4.982 6.369V25Z"
        />
    </svg>
}
export default LinkedInIcon
