import React from "react"
import s from "./Button.module.css"

export const Button = (props) => (
  <div
    className={`${s.button}
    ${!isNaN(props.children) ? s.num : null}
    ${props.span === "2" ? s.span2 : null}
    `}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
)

// export default Button
