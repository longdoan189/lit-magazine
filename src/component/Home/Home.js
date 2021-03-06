import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FeatureActions, PostActions } from "../../redux/actions/PostActions";
import './Home.css'
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FeatureActions());
    dispatch(PostActions());
  }, [dispatch]);

  const { all_post, feature_post } = useSelector(state => state.PostReducers);
  const [cur_category, set_category] = useState("all");

  return (
    <main className="min-h-screen sm:p-12">
      {/*first section*/}
      <section className="container mx-auto">
        <div className='grid'>
          {all_post &&
            all_post.filter(ap => { return ap.slug.current === feature_post.first }).map((post, index) => (
              <article className='border px-8 py-8' key={post.slug.current}>
                <NavLink to={"/post/" + post.slug.current} >
                  <div
                    className="block relative h-96 rounded shadow leading-snug bg-white"
                    key={index}
                  >
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                      className="w-full h-full rounded-r object-cover absolute"
                    />
                  </div>
                  <h3 className="text-gray-800 text-2xl md:text-3xl lg:text-4xl font-blog sm:px-10 py-4">
                    <b>{post.title}</b>
                  </h3>
                  <span className='text-gray-800 text-lg font-blog sm:px-10 py-4'>
                    {t(post.categories[0].title)}
                  </span>
                  {
                    (post.author === "N/A") ?
                      <span></span> :
                      <span className='text-gray-800 text-lg font-blog px-4 sm:px-10 py-4'>
                        <i>By {post.author}</i>
                      </span>
                  }
                </NavLink>
              </article>
            ))}
        </div>

      </section>
      {/*next three*/}
      <section className="container mx-auto mt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {all_post &&
            all_post.filter(ap => { return feature_post.second.includes(ap.slug.current) }).map((post, index) => (
              <article className='border px-4 py-4' key={post.slug.current}>
                <NavLink to={"/post/" + post.slug.current}>
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
                    {t(post.categories[0].title)}
                  </span>
                  {
                    (post.author === "N/A") ?
                      <span></span> :
                      <span className='text-gray-800 text-lg xl:px-5 py-4'>
                        <i>By {post.author}</i>
                      </span>
                  }
                </NavLink>
              </article>
            ))}
        </div>
      </section>
      {/* Scroll bar */}
      <section className="container mx-auto mt-20">
        <div className="grid grid-cols-6 md:grid-cols-12 gap-1">
          <div className="col-span-10 md:col-span-2 p-12 md:p-0">
            <div className='text-2xl lg:text-5xl'>{t("Latest articles")}</div>
            <div className=''>
              <button className={'text-xl lg:text-2xl mt-1 mb-2 text-left' + (cur_category === "all" ? "border border-b-2" : "")} onClick={() => { set_category("all") }}>{t("All")}</button>
            </div>
            <div className=''>
              <button className={'text-xl lg:text-2xl mt-1 mb-2 text-left' + (cur_category === "Criticism" ? "border border-b-2" : "")} onClick={() => { set_category("Criticism") }}>{t("Criticism")}</button>
            </div>
            <div className=''>
              <button className={'text-xl lg:text-2xl mt-1 mb-2 text-left' + (cur_category === "Interview" ? "border border-b-2" : "")} onClick={() => { set_category("Interview") }}>{t("Interview")}</button>
            </div>
            <div className=''>
              <button className={'text-xl lg:text-2xl mt-1 mb-2 text-left' + (cur_category === "Creative works" ? "border border-b-2" : "")} onClick={() => { set_category("Creative works") }}>{t("Creative works")}</button>
            </div>
          </div>
          <div className="col-span-5 md:col-span-10">
            {all_post &&
              all_post.filter(ap => { return ap.categories[0].title === cur_category || cur_category === "all" }).slice(0, 3).map((filtered_post, index) => (
                <article className='px-4 py-4' key={filtered_post.slug.current} >
                  <NavLink to={"/post/" + filtered_post.slug.current} className="grid sm:grid-cols-6 lg:grid-cols-12">
                    <div
                      className="block w-24 h-16 sm:w-40 sm:h-32 lg:w-64 lg:h-48 relative rounded shadow leading-snug bg-white sm:col-span-2 lg:col-span-3"
                      key={index}
                    >
                      <img
                        src={filtered_post.mainImage.asset.url}
                        alt={filtered_post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                    </div>
                    <div className='sm:col-span-4 lg:col-span-9 sm:ml-8 lg:ml-16 xl:ml-12'>
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
                        {filtered_post.publishedAt.slice(0, 10)}
                      </span>
                      <span className='text-gray-800 text-xs font-blog inline-block md:inline px-2 py-1 border rounded-lg border-black'>
                        {t(filtered_post.categories[0].title)}
                      </span>
                      <p className='secondary-font text-gray-800 text-xs sm:text-base lg:text-lg font-blog px-3 py-2'>{filtered_post.body.children[0].text}...</p>
                    </div>
                  </NavLink>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
