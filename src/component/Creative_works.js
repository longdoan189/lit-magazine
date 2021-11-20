import React, { useState }  from 'react'
import { NavLink, Link } from 'react-router-dom/cjs/react-router-dom.min'
import { useSelector } from 'react-redux';

export default function Creative_works() {
    const [cur_category, set_category] = useState("all");
    const { all_post } = useSelector(state => state.PostReducers);
    const creative_works_posts = all_post.filter(ap => { return ap.categories[0].title === "Creative works"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Creative work</h1>
                <p className='text-3xl mx-64 my-12'>‘Creative work’ features all original works that embrace the experimental spirit, welcoming all markers to create new imaginary world visions in their mind. Here the spiritual rocks! </p>
            </div>

            <div className='mx-32 mt-20'>
                {creative_works_posts &&
                    creative_works_posts.slice(0, 3).map((post, index) => (
                        <Link to={"/post/" + post.slug.current} key={post.slug.current} className="grid grid-cols-12">
                            <div className='text-5xl mt-2 col-span-8'>{post.title.slice(0,42)}</div>
                            <div className='text-3xl mt-2 col-start-10 col-span-4'>{post.author}</div>
                        </Link>
                ))}
            </div>

        </div>
    )
}
