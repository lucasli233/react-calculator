import React from "react"
import s from "./Output.module.css"

export const Output = (props) => (
  <div className={s.output}>{props.input}</div>
)