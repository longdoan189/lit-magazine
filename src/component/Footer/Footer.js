import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../asset/LIT Magazine with tagline.png"
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <div className='grid grid-cols-4'>
                <img src={logo} alt="LIT Magazine" />
                <div className="mt-5">
                    <NavLink to="/criticisms">
                        <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>Critique</b></p>
                    </NavLink>
                    <NavLink to="/interviews">
                        <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>Interview</b></p>
                    </NavLink>
                    <NavLink to="/creative_works">
                        <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500 "><b>Creative Works</b></p>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <NavLink to="/about">
                        <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>About</b></p>
                    </NavLink>
                    <NavLink to="/event">
                        <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>Event</b></p>
                    </NavLink>
                    <NavLink to="/subscribe">
                        <button className="text-sm md:text-lg mt-2 hover:text-yellow-500 px-3 py-1 border rounded-lg border-black"><b>Subscribe</b></button>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><a href="https://www.facebook.com/lit.magazine.fuv" target="_blank" rel="noopener noreferrer">
                        <b>Facebook <i className="fab fa-facebook" /></b>
                    </a></p>
                    <p className="text-lg md:text-2xl mt-3 hover:text-yellow-500"><a href="mailto:lit.magazine.fulbright@gmail.com" target="_blank" rel="noopener noreferrer">
                        <b>Email</b> 
                    </a></p>
                </div>
            </div>
        <div className='color-bottom'></div>
        </div>

    )
}
