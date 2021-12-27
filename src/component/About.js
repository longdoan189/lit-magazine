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
            <div className='bg-gray-400 grid grid-cols-4'>
                <p className='text-xl py-12 col-span-3 mx-8'>
                    LIT Magazine is a bilingual (Vietnamese-English), online, open-access magazine focusing mainly on literature and the arts, led by a group of Fulbright students. We focus on wo main sections, which include research on literature as well as creative works of literature and the arts. Regarding the first domain, we believ
                </p>
                <img src={emblem} alt="LIT Magazine emblem" className='py-3 h-64'/>
            </div>
            <div className='mt-10 mx-8'>
                <h1 className='text-5xl'>Founding team</h1>
                <div className='grid grid-flow-col gap-12 mt-10'>
                {Array(5).fill(1).map((el, i) =>
                    <div className=''>
                        <img src={`https://picsum.photos/seed/picsum/200`} className='circle-img mx-auto' alt='.'/>
                        <h1 className='text-center text-3xl mt-4'>{"Name"+i}</h1>
                        <p className='text-center text-xl secondary-font'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                )}
                </div>
            </div>
        </div>
    )
}
