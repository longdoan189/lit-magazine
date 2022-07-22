import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../../asset/LIT Magazine with tagline.png"
import './Footer.css'
import { useTranslation } from 'react-i18next';

export default function Footer() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='grid grid-cols-4'>
                <img src={logo} alt="LIT Magazine" className='my-auto' />
                <div className="mt-2">
                    <NavLink to="/criticisms">
                        <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>{t("Critique")}</b></p>
                    </NavLink>
                    <NavLink to="/interviews">
                        <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>{t("Interview")}</b></p>
                    </NavLink>
                    <NavLink to="/creative_works">
                        <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>{t("Creative Works")}</b></p>
                    </NavLink>
                </div>
                <div className="mt-2">
                    <NavLink to="/about">
                        <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>{t("About")}</b></p>
                    </NavLink>
                    <NavLink to="/events">
                        <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><b>{t("Event")}</b></p>
                    </NavLink>
                    {/*<NavLink to="/subscribe">
                        <button className="text-sm md:text-lg mt-2 hover:text-yellow-500 px-3 py-1 border rounded-lg border-black"><b>Subscribe</b></button>
                    </NavLink>*/}
                </div>
                <div className="mt-2">
                    <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><a href="https://www.facebook.com/lit.magazine.fuv" target="_blank" rel="noopener noreferrer">
                        <b>Facebook <i className="fab fa-facebook" /></b>
                    </a></p>
                    <p className="text-base sm:text-lg md:text-2xl mt-3 hover:text-yellow-500"><a href="mailto:lit.magazine.fulbright@gmail.com" target="_blank" rel="noopener noreferrer">
                        <b>Email</b> 
                    </a></p>
                </div>
            </div>
        <div className='color-bottom'></div>
        </div>

    )
}
