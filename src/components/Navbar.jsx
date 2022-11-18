import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className=" h-16 bg-gray-50 text-center">
        <ul className=" flex justify-center items-center space-x-9 h-full">
            <li> <NavLink to='/' className={({isActive}) => isActive ? 'text-blue-800 nav-btn ' : 'nav-btn'}><h1>home</h1></NavLink></li>
            <li>|</li>
            <li><NavLink to='/add' className={({isActive}) => isActive ? 'text-blue-800 nav-btn ' : 'nav-btn'}><h1>add</h1></NavLink></li>
            <li>|</li>
            <li><NavLink to='/all' className={({isActive}) => isActive ? 'text-blue-800 nav-btn ' : 'nav-btn'}><h1>all</h1></NavLink></li>
        </ul>
       
    </div>
  )
}
