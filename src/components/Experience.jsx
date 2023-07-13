import boostrap from '../assets/experience/boostrap.png'
import css from '../assets/experience/css.png'
import figma from '../assets/experience/figma.png'
import firebase from '../assets/experience/firebase.png'
import html from '../assets/experience/html5.png'
import js from '../assets/experience/js.png'
import react from '../assets/experience/react.png'
import tailwin from '../assets/experience/tailwin.png'

import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Pagination, Autoplay } from 'swiper/modules';

import { Myjobs } from './Myjobs'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Experience = () => {

    const { t } = useTranslation();

    const [open, setOpen] = useState(false)

    const toggle = (index) => {
        if (open === index) {
            return setOpen(null)
        }

        setOpen(index)
    }
    const mistrabajos = [
        {
            titulo: 'Seidor Digital',
            fecha: 'dic 2021 - abr 2023',
            descrip: t("seidor")
        },
        {
            titulo: 'Ulead International',
            fecha: 'sept 2021 - ene 2022',
            descrip: t("ulead")
        },
        {
            titulo: 'Nelica S.A.C',
            fecha: 'ago 2018 - jun 2021',
            descrip: t("nelica")
        }
    ]

    const techs = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: js,
            title: 'JS',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: firebase,
            title: 'Firebase',
            style: 'shadow-yellow-500'
        },
        {
            id: 6,
            src: figma,
            title: 'Figma',
            style: 'shadow-green-500'
        },
        {
            id: 7,
            src: boostrap,
            title: 'Boostrap',
            style: 'shadow-purple-500'
        },
        {
            id: 8,
            src: tailwin,
            title: 'Tailwind',
            style: 'shadow-blue-500'
        }
    ]

    return (
        <div
            name={t("nav3")}
            className='bg-gradient-to-b from-white to-gray-200
            dark:from-black dark:to-gray-800 w-full py-20'>

            <div className='max-w-screen-lg mx-auto p-4  w-full h-full text-gray-800 dark:text-white text-center md:text-left'>

                <div>
                    <p className='text-4xl font-bold  border-gray-500 p-2  pb-5'>{t("experience")}</p>
                </div>

                <p className='py-10'>{t("experience_info")}</p>

                <div>
                    {
                        mistrabajos.map((data, index) => {
                            return <Myjobs
                                key={index}
                                open={index === open}
                                title={data.titulo}
                                fecha={data.fecha}
                                desc={data.descrip}
                                toggle={() => toggle(index)} />
                        })
                    }
                </div>

                <p className='pt-16'>{t("tecnologias")}</p>

                <div className='w-full text-center py-8 px-12 sm:px-0'>
                    <Swiper
                        // install Swiper modules
                        modules={[Pagination, Autoplay]}
                        spaceBetween={50}
                        loop={true}
                        autoplay={
                            {
                                delay: 1500,
                                disableOnInteraction: false
                            }
                        }
                        grabCursor={true}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                slidesPerGroup: 1
                            },
                            575: {
                                slidesPerView: 2,
                                slidesPerGroup: 2
                            },
                            767: {
                                slidesPerView: 3,
                                slidesPerGroup: 3
                            }
                        }}
                    >
                        {
                            techs.map(({ id, src, style, title }) => (
                                <SwiperSlide key={id} className='pt-10 pb-16'>
                                    <div className={'bg-gray-800 text-white shadow-md py-8 rounded-lg' + " " + style}>
                                        <img src={src} alt="" className='h-16 mx-auto' />
                                        <p className='mt-4'>{title}</p>
                                    </div>
                                </SwiperSlide>

                            ))
                        }

                    </Swiper>
                </div>


            </div>

        </div>
    )
}
