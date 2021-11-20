import React from 'react'
import './Start.css'
import logo from "../asset/square_3x.png"
import { NavLink } from 'react-router-dom'

export default function Start() {
    return (
        <div className='full-page'>
            <div className='very-center'>
                <img src={logo} alt="LIT Magazine"/>
                <NavLink to="/home" className="btn-click">Click to continue &gt; </NavLink>
            </div>
        </div>
    )
}
