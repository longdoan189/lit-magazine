import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {PostActions} from "../redux/actions/PostActions";


export default function PageNotFound() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(PostActions());
    }, []);
    const { all_post } = useSelector(state => state.PostReducers);
    let filtered_post = all_post.filter(ap => {return ap.categories[0].title === "Creative works"})
    console.log(filtered_post)
    return (
        <div>
            
        </div>
    )
}
