import { postService } from "../../service/PostService";

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
            console.log('result', result.data.result);
        } catch (error) {
            console.log('error', error);
        }
    }
}