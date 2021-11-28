import React, {useEffect}  from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";

export default function Events() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PostActions());
    }, []);
    const { all_post } = useSelector(state => state.PostReducers);
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl ml-20'>Events</h1>
            </div>
            <section className="container mx-auto my-10">
                {all_post &&
                    all_post.map((filtered_post, index) => (
                        <article className='px-4 py-4'>
                            <Link to={"/post/" + filtered_post.slug.current} key={filtered_post.slug.current} className="grid grid-cols-12 gap-12">
                                <span
                                    className="block relative rounded shadow leading-snug bg-white col-start-2 col-span-6"
                                    key={index}
                                >
                                    <img
                                        src={filtered_post.mainImage.asset.url}
                                        alt={filtered_post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    
                                </span>
                                <div className='col-span-5'>
                                    <h3 className="text-gray-800 text-2xl font-blog px-3 py-2">
                                        {filtered_post.title}
                                    </h3>
                                    <span className='text-gray-800 text-lg font-blog px-3 py-2'>
                                        {filtered_post.publishedAt.slice(0, 10)}
                                    </span>
                                    <span className='text-gray-800 text-lg font-blog px-3 py-2 border rounded-lg border-black'>
                                        {filtered_post.author}
                                    </span>
                                    <p className='secondary-font text-gray-800 text-lg font-blog px-3 py-2'>{filtered_post.body.children[0].text}...</p>
                                </div>
                            </Link>
                        </article>
                    ))}
            </section>
        </div>
    )
}
