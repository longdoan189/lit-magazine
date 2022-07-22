import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import BlockContent from "@sanity/block-content-to-react";
import { SinglePostAction } from "../redux/actions/PostActions.js";


export default function SinglePost() {
  const { slug } = useParams();

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SinglePostAction(slug));
  }, [dispatch, slug]);

  const { cur_post} = useSelector(state => state.PostReducers);
  const singlePost = cur_post[0];
  console.log(singlePost)

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className=" min-h-screen px-12">
      <article className="container shadow-lg mx-auto rounded-lg">
        <header className="">
          <div className="flex items-center justify-center px-8">
            <div className="bg-white rounded p-12">
              <div className="text-center text-gray-800 cursive">
                <h1 className="cursive text-3xl lg:text-5xl mb-4">
                  {singlePost?.title}
                </h1>
                <h2 className="text-2xl text-center">
                  {singlePost?.name === "N/A" ? "": singlePost?.name}
                    {singlePost?.coAuthor?.map((each, key) => (
                        <div>
                          <span>{singlePost?.name === "N/A" && key === 0 ? "" : ", "}</span>
                          <span>{each}</span>
                        </div>
                    ))}
                </h2>
              </div>
            </div>
          </div>
          <img
            src={singlePost?.mainImage?.asset?.url}
            alt={singlePost?.title}
            className="w-full object-cover rounded-t"
          />
        </header>
        {(singlePost ?
        <div className="secondary-font px-16 lg:px-48 py-12 lg:py-20 prose max-w-full text-base" style={{"whiteSpace": "pre-wrap"}}>
          <BlockContent
            blocks={singlePost?.body}
            projectId="r99w5jgb"
            dataset="production"
          />
        </div> : 
        <div></div>)}
      </article>
    </main>
  );
}