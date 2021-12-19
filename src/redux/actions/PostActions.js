import { featureService, postService } from "../../service/PostService";

export const PostActions = () => {
    return async (dispatch) => {
        try {
            const result = await postService.getAllPosts();
            if (result.status === 200) {
                dispatch({
                    type: "GET_ALL_POST",
                    all_post: result.data.result,
                });
            }
        } catch (error) {
            console.log('error', error);
        }
        dispatch(FeatureActions());
    }
}

export const FeatureActions = () => {
    return async(dispatch) => {
        try {
            const feature = await featureService.getFeature();
            if (feature.status === 200) {
                dispatch({
                    type: "GET_FEATURE",
                    all_post: feature.data.result,
                });
            }
        }
        catch (error) {
            console.log('error', error);
        }
    }
}