import React, { useEffect }  from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../../redux/actions/PostActions";
import './Interview.css'
import { useTranslation } from 'react-i18next';

export default function Interviews() {
    const { t } = useTranslation();
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      }, [dispatch]);
    const { all_post } = useSelector(state => state.PostReducers);
    const interview_posts = all_post.filter(ap => { return ap.categories[0].title === "Interview"})
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>{t("Interviews")}</h1>
                <p className='text-3xl mx-4 sm:mx-32 lg:mx-64 my-12 secondary-font'>‘Interview’ features all LIT Magazine’s meeting notes, transferring ideas from the talks with dedicated writers and researchers. </p>
            </div>
            <section className="container mx-auto my-10">
                {interview_posts &&
                    interview_posts.map((filtered_post, index) => (
                        <article className='px-4 py-4' key={filtered_post.slug.current}>
                            <NavLink to={"/post/" + filtered_post.slug.current} className="grid grid-cols-2">
                                <div
                                className="block relative rounded bg-white my-auto"
                                key={index} style={{"width": "40vw", "height": "20vw"}}
                                >
                                    <img
                                        src={filtered_post.mainImage.asset.url}
                                        alt={filtered_post.mainImage.alt}
                                        className="w-full h-full rounded-r"
                                    />
                                </div>
                                <div className='sm:ml-8 lg:ml-16 xl:ml-12 my-auto'>
                                    <h3 className="text-gray-800 text-xl lg:text-2xl font-blog px-3 pb-2">
                                        <b>{filtered_post.title}</b>
                                    </h3>
                                    {
                                        (filtered_post.author === "N/A") ?
                                        <span></span> :
                                        <span className='text-gray-800 text-xs sm:text-base lg:text-lg font-blog px-3 py-2'>
                                            <i>By {filtered_post.author}</i>
                                        </span>
                                    }
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
            </section>
        </div>
    )
}
