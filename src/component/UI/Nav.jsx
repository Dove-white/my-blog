import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
  return (
    <ul>
        <li className='flex gap-2 text-blue-900'>
            <Link to="/" >Home</Link>
            <Link to="/message" >Message</Link>
            <Link to="/contact" >Contact</Link>
        </li>
    </ul>
  )
}
