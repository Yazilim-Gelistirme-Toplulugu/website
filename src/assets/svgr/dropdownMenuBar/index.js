import * as React from "react"
const DropdownMenuBarIcon = ({
    color = "#fff",
    size = 30,
    ...props
}) => {
    const pathScale = 30 / size;
    return <svg
        width={size}
        height={size}
        {...props}
    >
        <path
            fill={color}
            transform={`scale(${1 / pathScale})`}
            d="M1 5.083C1 3.931 1.894 3 3 3h24c1.106 0 2 .931 2 2.083 0 1.153-.894 2.084-2 2.084H3c-1.106 0-2-.931-2-2.084ZM1 15.5c0-1.152.894-2.083 2-2.083h24c1.106 0 2 .93 2 2.083 0 1.152-.894 2.083-2 2.083H3c-1.106 0-2-.93-2-2.083Zm28 10.417C29 27.069 28.106 28 27 28H3c-1.106 0-2-.931-2-2.083 0-1.153.894-2.084 2-2.084h24c1.106 0 2 .931 2 2.084Z"
        />
    </svg>
}
export default DropdownMenuBarIcon
