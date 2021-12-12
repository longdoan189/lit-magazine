import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
import BlockContent from "@sanity/block-content-to-react";


export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
            title,
            _id,
            slug,
            mainImage{
                asset->{
                    _id,
                    url
                }
            },
            body,
            "name": author->name,
        }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  console.log(singlePost);

  if (!singlePost) return <div>Loading...</div>;

  return (
    <main className=" min-h-screen px-12">
      <article className="container shadow-lg mx-auto rounded-lg">
        <header className="">
          <div className="flex items-center justify-center px-8">
            <div className="bg-white rounded p-12">
              <h1 className="cursive text-3xl lg:text-5xl mb-4">
                {singlePost.title}
              </h1>
              <div className="flex justify-center text-gray-800">
                <p className="cursive flex items-center pl-2 text-2xl">
                  {singlePost.name}
                </p>
              </div>
            </div>
          </div>
          <img
            src={singlePost.mainImage.asset.url}
            alt={singlePost.title}
            className="w-full object-cover rounded-t"
          />
        </header>
        <div className="secondary-font px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={singlePost.body}
            projectId="r99w5jgb"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
}