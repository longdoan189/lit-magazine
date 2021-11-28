import React, { useState, useEffect }  from 'react'
import grand_image from '../../src/asset/f1-2020.jpg'
import { NavLink, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";

export default function Criticism() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PostActions());
    }, []);
    const [cur_category, set_category] = useState("all");
    const { all_post } = useSelector(state => state.PostReducers);
    const criticism_posts = all_post.filter(ap => { return ap.categories[0].title === "Criticism"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Criticism</h1>
                <p className='text-3xl mx-64 my-12'>Criticism is one of LIT Magazine’s main focuses. The category centres on original ideas and voices inspired by works of literature, mixed-media art work and recommendations on good works about the arts, written by LIT Magazine’s dedicated writers and contributors. </p>
            </div>
            <img src={grand_image} alt="CRITICISM @LIT MAGAZINE" className='w-full' />
            <section className="container mx-auto mt-20">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
                    <div className="col-span-2">
                        <div className='text-5xl'>Browse</div>
                        <div>
                            <button className={'text-2xl mt-1 mb-2' + (cur_category === "all" ? "border border-b-2" : "")} onClick={() => { set_category("all") }}>All</button>
                        </div>
                        <div className='text-2xl mt-1 mb-2'>
                            {"Literature"}
                        </div>
                        <div className='text-2xl mt-1 mb-2'>
                            {"Visual & Audio Arts"}
                        </div>
                        <div className='text-2xl mt-1 mb-2'>
                            {"Recommendation"}
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-10">
                        {criticism_posts &&
                            criticism_posts.filter(ap => { return ap.categories[0].title === cur_category || cur_category === "all" }).slice(0, 3).map((filtered_post, index) => (
                                <article className='px-4 py-4'>
                                    <Link to={"/post/" + filtered_post.slug.current} key={filtered_post.slug.current} className="grid grid-cols-12">
                                        <span
                                            className="block w-48 h-48 relative rounded shadow leading-snug bg-white col-span-3"
                                            key={index}
                                        >
                                            <img
                                                src={filtered_post.mainImage.asset.url}
                                                alt={filtered_post.mainImage.alt}
                                                className="w-full h-full rounded-r object-cover absolute"
                                            />
                                        </span>
                                        <div className='col-span-9'>
                                            <h3 className="text-gray-800 text-2xl font-blog px-3 py-2">
                                                {filtered_post.title}
                                            </h3>
                                            <span className='text-gray-800 text-lg font-blog px-3 py-2'>
                                                <i>By {filtered_post.author}</i>
                                            </span>
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
                    </div>
                </div>
            </section>
        </div>
    )
}
