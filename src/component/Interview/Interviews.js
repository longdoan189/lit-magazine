import React, { useEffect }  from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../../redux/actions/PostActions";
import './Interview.css'

export default function Interviews() {
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      }, [dispatch]);
    const { all_post } = useSelector(state => state.PostReducers);
    const interview_posts = all_post.filter(ap => { return ap.categories[0].title === "Interview"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Interviews</h1>
                <p className='text-3xl mx-4 sm:mx-32 lg:mx-64 my-12 secondary-font'>‘Interview’ features all LIT Magazine’s meeting notes, transferring ideas from the talks with dedicated writers and researchers. </p>
            </div>
            <section className="container mx-auto my-10">
                {interview_posts &&
                    interview_posts.map((filtered_post, index) => (
                        <article className='px-4 py-4'>
                            <Link to={"/post/" + filtered_post.slug.current} key={filtered_post.slug.current} className="grid grid-cols-12 gap-12">
                                <span
                                    className="block relative rounded shadow leading-snug bg-white col-span-6"
                                    key={index}
                                >
                                    <p className='text-center border border-black'>By {filtered_post.author} </p>
                                    <img
                                        src={filtered_post.mainImage.asset.url}
                                        alt={filtered_post.mainImage.alt}
                                        className="w-full h-full rounded-r object-cover absolute"
                                    />
                                    
                                </span>
                                <div className='col-span-6'>
                                    <h3 className="text-gray-800 text-2xl font-blog px-3 py-2">
                                        {filtered_post.title}
                                    </h3>
                                    <span className='text-gray-800 text-lg font-blog px-3 py-2'>
                                        {filtered_post.publishedAt.slice(0, 10)}
                                    </span>
                                    <span className='text-gray-800 text-lg font-blog px-3 py-2 border rounded-lg border-black'>
                                        <NavLink to={"/" + filtered_post.categories[0].title}>
                                            {filtered_post.categories[0].title}
                                        </NavLink>
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
