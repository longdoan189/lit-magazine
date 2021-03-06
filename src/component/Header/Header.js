import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../../asset/horizontal@3x.png"
import Searchbar from '../Search/Searchbar';
import './Header.css'
import i18next from "i18next";
import { useTranslation } from 'react-i18next';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}

export default function Header() {
    const [show, toggleShow] = React.useState(false);
    const { width } = useWindowDimensions();
    const { t } = useTranslation();
    /*Hien toan bo header hay khong => khi man hinh > 1024 mac dinh hien */
    let start_show = true;
    if (width < 1024) {
        start_show = false;
    }
    else {
        start_show = true;
    }
    const [lang, setLang] = useState(localStorage.getItem("i18nextLng")?.slice(0,2));
    function setLanguage(l) {
        i18next.changeLanguage(l);
        setLang(l)
    }
    return ( 
        <nav className="bg-white header_desktop fixed w-full z-10">
            <div className="max-w-7xl mx-auto px-2 lg:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16 xl:h-20 2xl:h-28">
                    {/* Mobile menu button*/}
                    <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                        <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset f9ocus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={() => toggleShow(!show)}>
                            <span className="sr-only">Open main menu</span>
                            {/*
                            Icon when menu is closed.

                            Heroicon name: outline/menu

                            Menu open: "hidden", Menu closed: "block"
                            */}
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            {/*
                            Icon when menu is open.

                            Heroicon name: outline/x

                            Menu open: "block", Menu closed: "hidden"
                            */}
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    {/* Desktop menu */}
                    <div className="flex-1 flex items-center justify-center lg:items-stretch lg:justify-between">
                        <div className="flex-shrink-0 flex items-center">
                            <NavLink to="/">
                                <img className="block lg:hidden h-8 w-auto" src={logo} alt="LIT Magazine" />
                                <img className="hidden lg:block h-8 xl:h-12 2xl:h-16 w-auto" src={logo} alt="LIT Magazine" />
                            </NavLink>
                            <div className="hidden lg:block lg:ml-16">
                                <div className="flex space-x-4 py-32">
                                    <div className="dropdown text-black hover:text-yellow-500 text-lg xl:text-xl" activeclassname="border-b-2 border-black">
                                        <NavLink to="/criticisms">{t("Criticisms")}</NavLink>
                                        {/*<div className="dropdown-menu absolute hidden h-auto flex pt-4">
                                            <ul className="block w-full bg-white shadow px-8 py-2 border border-black">
                                                <li className="py-1"><div className="block text-black hover:text-yellow-500 cursor-pointer">{'Visual & Audio Arts'}</div></li>
                                                <li className="py-1"><div className="block text-black hover:text-yellow-500 cursor-pointer">Recommendation</div></li>
                                                <li className="py-1"><div className="block text-black hover:text-yellow-500 cursor-pointer">Literature</div></li>
                                            </ul>
                                        </div>*/}
                                    </div>
                                    <NavLink to="/interviews" className="text-black hover:text-yellow-500 text-lg xl:text-xl" activeclassname="border-b-2 border-black">{t("Interviews")}</NavLink>
                                    <NavLink to="/creative_works" className="text-black hover:text-yellow-500 text-lg xl:text-xl" activeclassname="border-b-2 border-black">{t("Creative Works")}</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:ml-2">
                            <div className="flex space-x-4 py-32 lg:px-6 xl:px-28 2xl:px-52">
                                <NavLink to="/events" className="text-black hover:text-yellow-500 text-sm xl:text-base secondary-font uppercase mt-1" activeclassname="border-b-2 border-black">{t("Events")}</NavLink>
                                <NavLink to="/magazine_issue" className="text-black hover:text-yellow-500 text-sm xl:text-base secondary-font uppercase mt-1 hidden" activeclassname="border-b-2 border-black">{t("Magazine issue")}</NavLink>
                                <NavLink to="/about" className="text-black hover:text-yellow-500 text-sm xl:text-base secondary-font uppercase mt-1" activeclassname="border-b-2 border-black">{t("About")}</NavLink>
                                {/*<NavLink to="/subscribe" className="text-black hover:text-yellow-500 text-lg xl:text-xl" activeclassname="border-b-2 border-black"><i>Subscribe</i></NavLink>*/}
                                <Searchbar/>
                                <p className={'text-sm xl:text-base secondary-font uppercase mt-1 cursor-pointer ' + (lang==="en" ? 'text-yellow-500' : 'text-black hover:text-yellow-500')} onClick={() => {setLanguage('en')}}>EN</p>
                                <p className={'text-sm xl:text-base secondary-font uppercase mt-1 cursor-pointer ' + (lang==="vi" ? 'text-yellow-500' : 'text-black hover:text-yellow-500')} onClick={() => {setLanguage('vi')}}>VN</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile menu, show/hide based on menu state. */}
            {(show || start_show) &&
                <div className="lg:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                        <p className="text-black block px-3 py-2 rounded-md text-base font-medium space-x-12">
                            <span className={'uppercase mt-1 cursor-pointer ' + (lang==="en" ? 'text-yellow-500' : 'text-black hover:text-yellow-500')} onClick={() => {setLanguage('en')}}>EN</span>
                            <span className={'uppercase mt-1 cursor-pointer ' + (lang==="vi" ? 'text-yellow-500' : 'text-black hover:text-yellow-500')} onClick={() => {setLanguage('vi')}}>VI</span>
                        </p>
                        <NavLink to="/" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} activeclassname="border-b-2 border-black" >{t("Home")}</NavLink>
                        <NavLink to="/criticisms" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} activeclassname="border-b-2 border-black" >{t("Criticisms")}</NavLink>
                        <NavLink to="/interviews" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} activeclassname="border-b-2 border-black" >{t("Interviews")}</NavLink>
                        <NavLink to="/creative_works" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} activeclassname="border-b-2 border-black" >{t("Creative Works")}</NavLink>
                        <NavLink to="/about" className="text-black block px-3 py-2 rounded-md text-base font-medium" activeclassname="border-b-2 border-black" onClick={() => toggleShow(false)} >{t("About")}</NavLink>
                        {/*<NavLink to="/subscribe" className="text-black block px-3 py-2 rounded-md text-base font-medium" onClick={() => toggleShow(false)} activeclassname="border-b-2 border-black">{t("Subscribe")}</NavLink>*/}
                    </div>
                </div>
            }
        </nav>

    )
}
