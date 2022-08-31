import React from 'react'
import style from './menu.module.css'
import {Link, NavLink} from 'react-router-dom'

function Menu() {
  return (
    <div>
        <ul className={style.header}>
            <li><NavLink className={style.link} to='/'>Header</NavLink></li>
            <li><NavLink className={style.link} to='/footer'>Footer</NavLink></li>
            <li><NavLink className={style.link} to='/portfolio'>Portfolio</NavLink></li>    
            </ul>
    </div>
  )
}

export default Menu;