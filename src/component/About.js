import React from 'react'
import emblem from '../../src/asset/emblem@3x.png'

export default function About() {
    /**
     *  <div className='mt-10 mx-8 grid grid-cols-2 flex items-center'>
                <p className='text-xl'>briefly introduce what kind of events LIT has been hosting</p>
                <h1 className='text-5xl text-center'>{'Events & Activities'}</h1>
            </div>
            <div className='mt-10 mx-8 grid grid-cols-2 gap-10 flex items-center'>
                <div className=' border-gray-400 border-4 text-center py-5 text-xl'>Workshop</div>
                <div className=' border-gray-400 border-4 text-center py-5 text-xl'>Regular submission</div>
            </div>
     */
    return (
        <div>
            <div className='mt-12 mx-8'>
                <h1 className='text-5xl'>About</h1>
            </div>
            <div className=' grid grid-cols-3 mx-8'>
                <p className='text-xl font-bold underline py-12 mx-8'>OVERVIEW</p>
                <p className='text-xl py-12 mx-8 col-span-2'>
                LIT Magazine is a bilingual (Vietnamese-English), online, open-access magazine focusing mainly on literature and the arts, led by a group of Fulbright students.
                </p>
            </div>
            <div className=' grid grid-cols-3 mx-8'>
                <p className='text-xl font-bold underline py-12 mx-8'>THE MAGAZINE</p>
                <p className='text-xl py-12 mx-8 col-span-2'>
                We focus on two main sections, which include research on literature as well as creative works of literature and the arts. Regarding the first domain, we believe that academic research plays a significant role in universities where students are trained to improve their logical, analytic and critical thinking to become experts in their fields. For the creative areas, we aspire to connect young talented writers and artists to a wider audience as well as foster their creative works. With these two domains and a literature-focused orientation, LIT Magazine hopes to motivate those who take interest in studying literature and humanities and those who desire to make experimental, original creative works. To attain those ambitions, LIT Magazine values all Liberal, Inventive, and Transdisciplinary ideas.
                </p>
            </div>
            <div className=' grid grid-cols-3 mx-8'>
                <p className='text-xl font-bold underline py-12 mx-8'>ACTIVITIES</p>
                <p className='text-xl py-12 mx-8 col-span-2'>
                Specifically, LIT Magazine intends to have two kinds of activities throughout the year: regular publishing and the annual thematic magazine. To do so, we will have seven teams, including the Editorial Board, the Advisory Board, the Contributing Writers, the Translation Team, the Visual Team, the Communication Team, and the External Relations Team. Besides, during Fall and Spring Semester, we intend to host bi-monthly workshops related to the theme of the annual magazine. These are opportunities for the magazine’s members and other students to gain knowledge and deepen their understanding of the humanities and social issues.
                </p>
            </div>
        </div>
    )
}
