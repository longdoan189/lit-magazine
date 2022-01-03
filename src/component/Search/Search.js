import React,{useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {PostActions} from "../../redux/actions/PostActions";

export default function Search() {
    const { slug } = useParams();
    const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(PostActions());
      }, [dispatch]);
    const { all_post } = useSelector(state => state.PostReducers);
    const filtered_search = all_post.filter(ap => {let each_title = ap.title.toLowerCase() ; return each_title.includes(slug)})
    return (
        <section className="container mx-auto mt-12">
          <div className='mx-auto text-center my-12 text-5xl'>
            Search for "{slug}" - {filtered_search?.length} found
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered_search &&
               filtered_search.map((post, index) => (
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
                    <h3 className="text-gray-800 text-2xl px-3 py-4">
                      <b>{post.title}</b>
                    </h3>
                    <span className='text-gray-800 text-lg px-3 py-4'>
                      {post.categories[0].title}
                    </span>
                    <span className='text-gray-800 text-lg xl:px-5 py-4'>
                      <i>By {post.author}</i>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
    )
}
