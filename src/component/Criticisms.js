import React, { useState, useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";

export default function Criticisms() {
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      });
    const [cur_sub_category, set_category] = useState("all");
    const { all_post } = useSelector(state => state.PostReducers);
    const criticism_posts = all_post.filter(ap => { return ap.categories[0].title === "Criticism"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Criticisms</h1>
                <p className='text-3xl mx-4 sm:mx-32 lg:mx-64 my-12 secondary-font'>Criticism is one of LIT Magazine’s main focuses. The category centres on original ideas and voices inspired by works of literature, mixed-media art work and recommendations on good works about the arts, written by LIT Magazine’s dedicated writers and contributors. </p>
            </div>
            {/*<img src={grand_image} alt="CRITICISM @LIT MAGAZINE" className='w-full' />*/}
            <section className="container mx-auto mt-20">
                <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
                    <div className="col-span-10 md:col-span-2 p-12 md:p-0">
                        <div className='text-2xl lg:text-5xlx``'>Browse</div>
                        <div>
                            <button className={'text-2xl mt-1 mb-2 text-left' + (cur_sub_category === "all" ? "border border-b-2" : "")} onClick={() => { set_category("all") }}>All</button>
                        </div>
                        <div>
                            <button className={'text-2xl mt-1 mb-2 text-left' + (cur_sub_category === "Literature" ? "border border-b-2" : "")} onClick={() => { set_category("Literature") }}>Literature</button>
                        </div>
                        <div>
                            <button className={'text-2xl mt-1 mb-2 text-left' + (cur_sub_category === "Visual & Audio Arts" ? "border border-b-2" : "")} onClick={() => { set_category("Visual & Audio Arts") }}>{'Visual & Audio Arts'}</button>
                        </div>
                        <div >
                            <button className={'text-2xl mt-1 mb-2 text-left' + (cur_sub_category === "Recommendation" ? "border border-b-2" : "")} onClick={() => { set_category("Recommendation") }}>Recommendation</button>
                        </div>
                    </div>
                    <div className="col-span-5 md:col-span-10"> 
                    {criticism_posts &&
                    criticism_posts.filter(ap => {return ap.categories[1].title === cur_sub_category || cur_sub_category==="all"}).slice(0,3).map((filtered_post, index) => (
                        <article className='px-4 py-4' key={filtered_post.slug.current}>
                            <NavLink to={"/post/" + filtered_post.slug.current}  className="grid sm:grid-cols-6 lg:grid-cols-12">
                                <span
                                className="block w-24 h-16 sm:w-40 sm:h-32 lg:w-64 lg:h-48 relative rounded shadow leading-snug bg-white sm:col-span-2 lg:col-span-3"
                                key={index}
                                >
                                <img
                                    src={filtered_post.mainImage.asset.url}
                                    alt={filtered_post.mainImage.alt}
                                    className="w-full h-full rounded-r object-cover absolute"
                                />
                                </span>
                                <div className='sm:col-span-4 lg:col-span-9 sm:ml-8 lg:ml-16 xl:ml-12'>
                                <h3 className="text-gray-800 text-xl lg:text-2xl font-blog px-3 py-2">
                                    <b>{filtered_post.title}</b>
                                </h3>
                                <span className='text-gray-800 text-xs sm:text-base lg:text-lg font-blog px-3 py-2'>
                                    <i>By {filtered_post.author}</i>
                                </span>
                                <span className='text-gray-800 text-xs sm:text-base lg:text-lg inline-block md:inline font-blog px-3 py-2'>
                                    {filtered_post.publishedAt.slice(0,10)}
                                </span>
                                <span className='text-gray-800 text-xs font-blog inline-block md:inline px-2 py-1 border rounded-lg border-black'>
                                    {filtered_post.categories[0].title}
                                </span>
                                <p className='secondary-font text-gray-800 text-xs sm:text-base lg:text-lg font-blog px-3 py-2'>{filtered_post.body.children[0].text}...</p>
                                </div>
                            </NavLink>
                        </article>
                    ))}
                </div>
                </div>
            </section>
        </div>
    )
}
