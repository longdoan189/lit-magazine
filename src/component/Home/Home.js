import React, {useEffect, useState} from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {PostActions} from "../../redux/actions/PostActions";

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PostActions());
    }, []);

    const { all_post } = useSelector(state => state.PostReducers);

    const [cur_category, set_category] = useState("all");
    
    return (
      <main className="min-h-screen p-12">
        {/*first section*/ }
        <section className="container mx-auto">
          <div className='grid'>
          {all_post.slice(0,1) &&
              all_post.slice(0,1).map((post, index) => (
                <article className='border px-8 py-8'>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span
                      className="block relative h-screen rounded shadow leading-snug bg-white"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                    </span>
                    <h3 className="text-gray-800 text-5xl font-blog px-10 py-4">
                      {post.title}
                    </h3>
                    <span className='text-gray-800 text-lg font-blog px-10 py-4'>
                      {post.categories[0].title}
                    </span>
                    <span className='text-gray-800 text-lg font-blog px-10 py-4'>
                      <i>By {post.author}</i>
                    </span>
                  </Link>
                </article>
              ))}
          </div>

        </section>
        {/*next three*/ }
        <section className="container mx-auto mt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {all_post.slice(1,4) &&
              all_post.slice(1,4).map((post, index) => (
                <article className='border px-4 py-4'>
                  <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                    </span>
                    <h3 className="text-gray-800 text-2xl font-blog px-3 py-4">
                      {post.title}
                    </h3>
                    <span className='text-gray-800 text-lg font-blog px-3 py-4'>
                      {post.categories[0].title}
                    </span>
                    <span className='text-gray-800 text-lg font-blog px-10 py-4'>
                      <i>By {post.author}</i>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
        {/* Scroll bar */}
        <section className="container mx-auto mt-20">
          <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
            <div className="col-span-2">
              <div className='text-5xl'>Latest articles</div>
              <div>
                <button className={'text-2xl mt-1 mb-2' + (cur_category === "all" ? "border border-b-2" : "")} onClick={() => {set_category("all")}}>All</button>
              </div>
              <div>
                <button className={'text-2xl mt-1 mb-2' + (cur_category === "Criticism" ? "border border-b-2" : "")} onClick={() => {set_category("Criticism")}}>Criticism</button>
              </div>
              <div>
                <button className={'text-2xl mt-1 mb-2' + (cur_category === "Interview" ? "border border-b-2" : "")} onClick={() => {set_category("Interview")}}>Interview</button>
              </div>
              <div>
                <button className={'text-2xl mt-1 mb-2' + (cur_category === "Creative works" ? "border border-b-2" : "")} onClick={() => {set_category("Creative works")}}>Creative works</button>
              </div>
            </div>
            <div className="col-span-5 md:col-span-10"> 
                {all_post &&
                  all_post.filter(ap => {return ap.categories[0].title === cur_category || cur_category==="all"}).slice(0,3).map((filtered_post, index) => (
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
                            {filtered_post.publishedAt.slice(0,10)}
                          </span>
                          <span className='text-gray-800 text-lg font-blog px-3 py-2 border rounded-lg border-black'>
                            <NavLink to={"/"+filtered_post.categories[0].title}>
                              {filtered_post.categories[0].title}
                            </NavLink>
                          </span>
                          <p className='text-gray-800 text-lg font-blog px-3 py-2'>{filtered_post.body.children[0].text}...</p>
                        </div>
                      </Link>
                    </article>
                  ))}
            </div>
          </div>
        </section>
      </main>
    );
  }
