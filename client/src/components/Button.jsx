import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Button = (props) => {
  return (
    <div>
    <NavLink  to ={props.to} className={props.className}  >
    {props.title}
    </NavLink>
    </div>
  )
}

export default Button
