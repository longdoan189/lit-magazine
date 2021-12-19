import React, {useEffect} from 'react'
import './Start.css'
import logo from "../asset/square_3x.png"
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { PostActions, FeatureActions } from '../redux/actions/PostActions';

export default function Start() {
    const dispatch = useDispatch(); 
    useEffect(() => {
        dispatch(PostActions());
        dispatch(FeatureActions());
    }, []);
    return (
        <div className='full-page'>
            <div className='very-center'>
                <img src={logo} alt="LIT Magazine"/>
                <NavLink to="/home" className="btn-click">Click to continue &gt; </NavLink>
            </div>
        </div>
    )
}
