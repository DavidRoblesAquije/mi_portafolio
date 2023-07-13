import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useTranslation } from 'react-i18next'
import MyCV_en from '../assets/curriculum/CV_DavidRoblesAquije.pdf'
import MyCV_es from '../assets/curriculum/CV_RoblesDavid.pdf'
import MyImage from '../assets/profile.png'



export const Home = () => {
    const { t, i18n } = useTranslation();

    return (
        <div
            name={t("nav1")}
            className='md:h-screen w-full pt-36 pb-20 
            bg-gradient-to-b from-white to-gray-200
             dark:from-black dark:to-gray-800 '
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center md:items-start items-center h-full'>
                    <h2 className='text-4xl sm:text-5xl font-bold text-gray-800 dark:text-white text-center md:text-left '>
                        {t("Hola soy David")} <br /> {t("ing de soft")}
                    </h2>

                    <p className=' text-gray-500 dark:text-white py-4 max-w-md text-center md:text-left'>{t("mi info")}</p>

                    <div>
                        <a
                            href={i18n.language === "es" ? MyCV_es : MyCV_en}
                            target='_blank'
                            className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            {t("mi cv")}
                            <span>
                                <BsFillPersonLinesFill
                                    size={25}
                                    className='ml-2 ' />
                            </span>
                        </a>
                    </div>

                    {/* Redes sociales */}
                </div>

                <div className='pt-10 md:pt-0 flex-auto'>
                    <img
                        src={MyImage}
                        alt="my profile"
                        className='rounded-2xl mx-auto w-2/3 md:w-[20rem] bg-gradient-to-r from-cyan-500 to-blue-500 float-none md:float-right' />
                </div>
            </div>
        </div>
    )
}
