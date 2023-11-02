import * as React from "react"
const CloseIcon = ({
    size = 30,
    color = "#fff",
    ...props
}) => {
    const pathScale = 30 / size
    return <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    {...props}
  >
    <path
      d="M5.262 27.633a2.002 2.002 0 0 1-2.8-2.864l8.533-8.339a2 2 0 0 0 0-2.86L2.463 5.23a2.002 2.002 0 0 1 2.8-2.864l8.661 8.467a2 2 0 0 0 2.796 0l8.662-8.466a2.002 2.002 0 0 1 2.8 2.864L19.65 13.57a2 2 0 0 0 0 2.86l8.531 8.34a2.002 2.002 0 0 1-2.8 2.864l-8.66-8.467a2 2 0 0 0-2.797 0l-8.662 8.466Z"
      fill={color}
      transform={`scale(${1 / pathScale})`}
    />
  </svg>
}
export default CloseIcon;
