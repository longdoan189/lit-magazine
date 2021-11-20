import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {PostActions} from "../redux/actions/PostActions";


export default function PageNotFound() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PostActions());
    }, []);
    const { all_post } = useSelector(state => state.PostReducers);
    let filtered_post = all_post.filter(ap => {return ap.categories[0].title === "Creative works"})
    console.log(filtered_post)
    return (
        <div className=''>
            <h1 className='text-5xl text-center mt-20'>Page Not Found</h1>
            <h2 className='text-2xl text-center mt-4'>The link might not exist or might have been removed.</h2>
            <NavLink to="/home">
                <h1 className='text-2xl text-center border hover:text-white hover:bg-black'>Return home here</h1>
            </NavLink>
        </div>
    )
}
