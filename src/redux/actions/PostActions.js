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

export const FeatureActions = () => {
    return async(dispatch) => {
        if (feature_post_called) {
            return
        }
        try {
            const feature = await featureService.getFeature();
            console.log(feature)
            if (feature.status === 200) {
                dispatch({
                    type: "GET_FEATURE",
                    all_post: feature.data.result,
                });
            }
            console.log(feature)
            feature_post_called = true;
        }
        catch (error) {
            console.log('error', error);
        }
    }
}