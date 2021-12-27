import React from 'react'
import { useParams } from 'react-router-dom';

export default function Search() {
    const { slug } = useParams();
    console.log(slug)
    return (
        <div className='mt-12 ml-12'>
            <p>{slug}</p>
        </div>
    )
}
