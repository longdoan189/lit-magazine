const stateDefault = {
    all_post: [],
    feature_post: {first: '', second: []},
    cur_post: {}
}

export const PostReducers = (state = stateDefault, action) => {
    switch (action.type) {
        case "GET_ALL_POST": {
            let all_post_sorted = action.all_post.sort((a,b) => {
                return new Date(a.publishedAt).getTime() - 
                    new Date(b.publishedAt).getTime()
            }).reverse();
            state.all_post = all_post_sorted;
            return { ...state }
        }
        case "GET_FEATURE": {
            let holder = {
                first: action.all_post[0].first.current,
                second: []
            }
            for (let each of action.all_post[0].second) {
                holder.second.push(each.current)
            }
            state.feature_post = holder
            return {...state }
        }
        case "GET_SINGLE_POST": {
            state.cur_post = action.post
            return {...state}
        }
        case "testing": {
            return { ...state }
        }
        default: return { ...state }
    }
}