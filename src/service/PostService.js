//import sanityClient from "../client.js";
import axios from "axios";


const query = `*[_type == "post"]{
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
export class PostService {
    getAllPosts = () => {
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${query}`,
            method: 'GET'
        })
    }
}

export const postService = new PostService();
