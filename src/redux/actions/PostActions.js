import { history } from "../../App";
import { featureService, postService } from "../../service/PostService";

let all_post_called = false
let feature_post_called = false
export const PostActions = () => {
    return async (dispatch) => {
        if (all_post_called) {
            return
        }
        try {
            const result = await postService.getAllPosts();
            if (result.status === 200) {
                dispatch({
                    type: "GET_ALL_POST",
                    all_post: result.data.result,
                });
                all_post_called = true;
            }
            
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const SinglePostAction = (slug) => {
    return async (dispatch) => {
        try {
            const result = await postService.getSinglePost(slug);
            if (result.data.result.length === 0) {
                history.push('/404')
            }
            if (result.status === 200) {
                dispatch({
                    type: "GET_SINGLE_POST",
                    post: result.data.result,
                });
            }
            
        } catch (error) {
            console.log('error', error);
        }
    }
}

export const FeatureActions = () => {
    return async(dispatch) => {
        if (feature_post_called) {
            return
        }
        try {
            const feature = await featureService.getFeature();
            if (feature.status === 200) {
                dispatch({
                    type: "GET_FEATURE",
                    all_post: feature.data.result,
                });
            }
            feature_post_called = true;
        }
        catch (error) {
            console.log('error', error);
        }
    }
}