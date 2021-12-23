//import sanityClient from "../client.js";
import axios from "axios";


const post_query = `*[_type == "post"]{
    title,
    slug,
    "body": body[0],
    "author": author->name,
    publishedAt,
    "categories": categories[]->,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`
const feature_query = `*[_type == "feature"]{
    "first": first->slug,
    "second": second[]->slug
}` 

export class PostService {
    getAllPosts = () => {
        console.log("called posts")
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${post_query}`,
            method: 'GET'
        })
    }
}
export class FeatureService {
    getFeature = () => {
        console.log("called feature")
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${feature_query}`,
            method: 'GET'
        })
    }
}

export const postService = new PostService();
export const featureService = new FeatureService();
