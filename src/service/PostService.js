//import sanityClient from "../client.js";
import axios from "axios";


const post_query = `*[_type == "post"]{
    title,
    slug,
    "body": body[0],
    "author": author->name,
    "coAuthor": coAuthor[]->name,
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

const single_query = (slug) => {
    return `*[slug.current == "${slug}"]{
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
        "coAuthor": coAuthor[]->name,
    }`
}

export class PostService {
    getAllPosts = () => {
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${post_query}`,
            method: 'GET'
        })
    }

    getSinglePost = (slug) => {
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${single_query(slug)}`,
            method: 'GET'
        })
    }
}
export class FeatureService {
    getFeature = () => {
        return axios({
            url: `https://inu5zxa1.apicdn.sanity.io/v2021-08-31/data/query/production?query=${feature_query}`,
            method: 'GET'
        })
    }
}
export const postService = new PostService();
export const featureService = new FeatureService();
