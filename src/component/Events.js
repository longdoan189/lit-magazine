import React, {useEffect}  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";

export default function Events() {
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      }, [dispatch]);
    const { all_post } = useSelector(state => state.PostReducers);
    const event_posts = all_post.filter(ap => { return ap.categories[0].title === "Events"})
    return (
        <div className='container mx-auto'>
            <div className='mt-12'>
                <h1 className='text-5xl'>Events</h1>
            </div>
            <section className= "my-10">
                {event_posts &&
                    event_posts.map((filtered_post, index) => (
                        <article className='pr-4 py-4' key={filtered_post.slug.current}>
                            <NavLink to={"/post/" + filtered_post.slug.current} className="grid grid-cols-12 gap-12">
                                <span
                                    className="block relative rounded shadow leading-snug bg-white col-start-1 col-span-6"
                                    key={index}
                                >
                                    <img
                                        src={filtered_post.mainImage.asset.url}
                                        alt={filtered_post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    
                                </span>
                                <div className='col-span-5 text-gray-800  font-blog px-3 py-2'>
                                    <span className="text-2xl">
                                        {filtered_post.title}
                                    </span>
                                    <span className='block md:inline-block mx-2'>
                                        {filtered_post.publishedAt.slice(0, 10)}
                                    </span>
                                    <p className='secondary-font text-gray-800 text-lg'>{filtered_post.body.children[0].text}...</p>
                                </div>
                            </NavLink>
                        </article>
                    ))}
            </section>
        </div>
    )
}
