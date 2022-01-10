import React, {useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";

export default function Creative_works() {
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      }, [dispatch]);
    const { all_post } = useSelector(state => state.PostReducers);
    const creative_works_posts = all_post.filter(ap => { return ap.categories[0].title === "Creative works"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Creative works</h1>
                <p className='text-3xl mx-4 sm:mx-32 lg:mx-64 my-12 secondary-font'>‘Creative work’ features all original works that embrace the experimental spirit, welcoming all markers to create new imaginary world visions in their mind. Here the spiritual rocks! </p>
            </div>

            <div className='mx-4 sm:mx-32 lg:mx-64 sm:mt-20'>
                {creative_works_posts &&
                    creative_works_posts.map((post, index) => (
                        <Link to={"/post/" + post.slug.current} key={post.slug.current} className="grid grid-cols-3 sm:grid-cols-12">
                            <div className='text-2xl sm:text-3xl lg:text-5xl col-span-2 sm:col-span-8 my-auto'>{post.title}</div>
                            <div className='text-lg lg:text-3xl sm:col-start-10 sm:col-span-4 my-auto'>{post.author}</div>
                        </Link>
                ))}
            </div>

        </div>
    )
}
