import React from 'react'
import banner from '../../src/asset/Banner.jpg'
import { useTranslation } from 'react-i18next';

export default function About() {
    const { t } = useTranslation();
    return (
        <div>
            <div className='mt-12 mx-8'>
                <h1 className='text-5xl mx-8'>{t("About")}</h1>
            </div>
            <div className=' grid grid-cols-3 mx-2 sm:mx-8'>
                <p className='text-sm sm:text-xl font-bold underline py-12 mx-4 sm:mx-8'>OVERVIEW</p>
                <p className='text-sm sm:text-xl py-12 mx-4 sm:mx-8 col-span-2 secondary-font'>
                {t("LIT Magazine is a bilingual (Vietnamese-English), online, open-access magazine focusing mainly on literature and the arts, led by a group of Fulbright students.")}
                </p>
            </div>
            <div>
                <img className='mx-auto my-12' src={banner} alt="LIT MAGAZINE" />
            </div>
            <div className=' grid grid-cols-3 mx-2 sm:mx-8'>
                <p className='text-sm sm:text-xl font-bold underline py-12 mx-4 sm:mx-8'>THE MAGAZINE</p>
                <p className='text-sm sm:text-xl py-12 mx-4 sm:mx-8 col-span-2 secondary-font'>
                {t("We focus on literature research and creative works. LIT Magazine hopes to motivate those who take interest in studying literature and humanities and those who desire to make experimental, original creative works. We value Liberal, Inventive, and Transdisciplinary ideas.")}
                </p>
            </div>
            <div className=' grid grid-cols-3 mx-2 sm:mx-8'>
                <p className='text-sm sm:text-xl font-bold underline py-12 mx-4 sm:mx-8'>ACTIVITIES</p>
                <p className='text-sm sm:text-xl py-12 mx-4 sm:mx-8 col-span-2 secondary-font'>
                {t("LIT Magazine has two kinds of activities: monthly publishing and the annual thematic magazine. You can contribute to us by submitting your work via lit.editor.fulbright@gmail.com.")}
                </p>
            </div>
        </div>
    )
}
