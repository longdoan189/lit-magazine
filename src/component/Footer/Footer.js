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
                    <NavLink to="/criticism">
                        <p className="md:text-2xl mt-3"><b>Critique</b></p>
                    </NavLink>
                    <NavLink to="/interview">
                        <p className="md:text-2xl mt-3"><b>Interview</b></p>
                    </NavLink>
                    <NavLink to="/creative_works">
                        <p className="md:text-2xl mt-3"><b>Creative Works</b></p>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <NavLink to="/about">
                        <p className="md:text-2xl mt-3"><b>About</b></p>
                    </NavLink>
                    <NavLink to="/event">
                        <p className="md:text-2xl mt-3"><b>Event</b></p>
                    </NavLink>
                    <NavLink to="/subscribe">
                        <button className="md:text-2xl mt-2 px-2 py-1 border"><b>Subscribe</b></button>
                    </NavLink>
                </div>
                <div className="mt-5">
                    <p className="md:text-2xl mt-3"><a href="https://www.facebook.com/lit.magazine.fuv" target="_blank" rel="noopener noreferrer">
                        <b>Facebook <i className="fab fa-facebook" /></b>
                    </a></p>
                    <p className="md:text-2xl mt-3"><a href>
                        <b>Email</b> lit.magazine.fulbright@gmail.com
                    </a></p>
                </div>
            </div>
        <div className='color-bottom'></div>
        </div>

    )
}
