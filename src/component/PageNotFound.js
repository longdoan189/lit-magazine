import React from 'react'
import { NavLink } from 'react-router-dom';


export default function PageNotFound() {
    return (
        <div className=''>
            <h1 className='text-5xl text-center mt-20'>Page Not Found</h1>
            <h2 className='text-2xl text-center mt-4'>The link might not exist or might have been removed.</h2>
            <h2 className='text-2xl text-center mt-4'>The error might be temporary so you can try again later.</h2>
            <NavLink to="/home">
                <h1 className='text-2xl text-center border hover:text-white hover:bg-black'>Return home here</h1>
            </NavLink>
        </div>
    )
}
