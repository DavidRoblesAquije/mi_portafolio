import { useTranslation } from 'react-i18next'
import GiftApp from '../assets/portfolio/project.png'
import JournalApp from '../assets/portfolio/project2.png'
import JobSearchApp from '../assets/portfolio/project3.png'
import CalendarApp from '../assets/portfolio/project4.png'
import LandingPage from '../assets/portfolio/project5.png'
import HeroesApp from '../assets/portfolio/project6.png'

export const MyProjects = () => {

    const { t } = useTranslation();

    const portfolios = [
        {
            id: 1,
            src: GiftApp,
            title: t("project1"),
            demo: "https://remarkable-gnome-5c986e.netlify.app/",
            codigo: "https://github.com/DavidRoblesAquije/react-gif-expert",
        },
        {
            id: 2,
            src: JournalApp,
            title: t("project2"),
            demo: "https://rainbow-nougat-1f561f.netlify.app/auth/login",
            codigo: "",
        },
        {
            id: 3,
            src: JobSearchApp,
            title: t("project3"),
            demo: "https://bucolic-fox-cf8886.netlify.app/",
            codigo: "",
        },
        {
            id: 4,
            src: CalendarApp,
            title: t("project4"),
            demo: "https://node-mongodb-api-zvqs.onrender.com/",
            codigo: "https://github.com/DavidRoblesAquije/backend/tree/main",
        },
        {
            id: 5,
            src: LandingPage,
            title: t("project5"),
            demo: "https://web-dolla.vercel.app/",
            codigo: "",
        },
        {
            id: 6,
            src: HeroesApp,
            title: t("project6"),
            demo: "https://monumental-tanuki-b43305.netlify.app",
            codigo: "",
        }
    ]

    return (
        <div
            name={t("nav2")}
            className='w-full bg-gradient-to-b 
            from-gray-200 to-white text-gray-800
             dark:from-gray-800 dark:to-black dark:text-white
               md:h-screen'>

            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 text-center md:text-left'>
                    <p className='text-4xl font-bold inline border-slate-950 dark:border-gray-500'>{t("mis proyectos")}</p>
                    <p className='py-6'>{t("deja compartir")}</p>
                </div>
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {
                        portfolios.map(({ id, src, demo, codigo, title }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg overflow-hidden'>
                                <a href={demo}
                                    target='_blank'>
                                    <img
                                        src={src}
                                        alt="my project"
                                        className='rounded-md hover:scale-110 duration-150' />
                                </a>
                                <div className='flex items-center justify-center'>
                                    <p className='px-6 py-5 font-semibold'>{title}</p>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div>
    )
}
