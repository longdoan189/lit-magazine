import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostActions, FeatureActions } from "../redux/actions/PostActions";

export default function Post() {
  const dispatch = useDispatch(); 
      useEffect(() => {
        dispatch(FeatureActions());
        dispatch(PostActions());
      }, [dispatch]);

    const { all_post } = useSelector(state => state.PostReducers);
  console.log(all_post)
  return (
    <main className="min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          All Posts
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome!
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {all_post &&
            all_post.map((post, index) => (
              <article key={post.slug.current}>
                <NavLink to={"/post/" + post.slug.current}>
                  <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                    <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
                      <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </NavLink>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}