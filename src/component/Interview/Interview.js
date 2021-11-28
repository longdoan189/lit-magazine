import React, { useState }  from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './Interview.css'

export default function Interview() {
    const { all_post } = useSelector(state => state.PostReducers);
    const interview_posts = all_post.filter(ap => { return ap.categories[0].title === "Interview"})
    const [searched_posts, set_searched_posts] = useState([...interview_posts])
    const [keyword, set_keyword] = useState('')
    const onSearch = () => {
        let searched = interview_posts.filter(ap => {let each_title = ap.title.toLowerCase() ; return each_title.includes(keyword)})
        set_searched_posts(searched);
    };
    
    return (
        <div>
            <div className='mt-12'>
                <h1 className='text-5xl text-center'>Interview</h1>
                <p className='text-3xl mx-64 my-12'>The quick brown fox jumps over the lazy dog </p>
            </div>
            <input className="container mx-20 my-10 border border-black rounded-lg h-12" value={keyword} placeholder="Search by title..." onInput={e => set_keyword(e.target.value)} onChange={onSearch} enterButton size="large" />
            <section className="container mx-auto my-10">
                {searched_posts &&
                    searched_posts.slice(0, 3).map((filtered_post, index) => (
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
