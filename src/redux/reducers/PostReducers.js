const stateDefault = {
    all_post: [],
}

export const PostReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_ALL_POST": {
            let all_post_sorted = action.all_post.sort((a,b) => {
                return new Date(a.publishedAt).getTime() - 
                    new Date(b.publishedAt).getTime()
            }).reverse();
            console.log(all_post_sorted)
            state.all_post = action.all_post;
            return { ...state }
        }
        case "testing": {
            return { ...state }
        }
        default: return { ...state }
    }
}