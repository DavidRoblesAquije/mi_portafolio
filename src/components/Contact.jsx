import { FaGithub, FaLinkedin } from 'react-icons/fa'
import computer from '../assets/computer.png'
import { HiOutlineMail } from 'react-icons/hi'
import { useTranslation } from 'react-i18next';

export const Contact = () => {
    const { t } = useTranslation();
    return (
        <div
            name={t("nav4")}
            className='w-full pt-0 md:pt-20 pb-20 
            bg-gradient-to-b from-gray-200 to-white 
             dark:from-gray-800 dark:to-black text-gray-800 dark:text-white'>

            <div className='max-w-screen-lg mx-auto px-4 grid grid-cols-1 md:grid-cols-2'>

                <div className=''>
                    <img
                        src={computer}
                        alt="my profile"
                        className='mx-auto float-none md:float-left w-[15rem] md:w-[20rem]' />
                </div>

                <div className='text-center md:text-right mt-10 md:mt-0'>
                    <h2 className='mb-10 text-4xl font-bold'>{t("contactame")}</h2>

                    <p className='whitespace-pre-wrap'>
                        {t("info_contacto")}
                    </p>

                    {/* Redes Sociales */}
                    <div className='flex flex-col items-center md:items-end pt-10'>
                        <ul className='flex flex-row gap-5'>
                            <li>
                                <a
                                    href='https://www.linkedin.com/in/davidroblesaquije/'
                                    className='text-gray-80 dark:text-white w-[4em] h-[4em] rounded-full flex justify-center items-center border-gray-500 border-2 hover:scale-110 duration-200'
                                    target='_blank'
                                >
                                    <>
                                        <FaLinkedin size={30} />
                                    </>
                                </a>
                            </li>

                            <li>
                                <a
                                    href='https://github.com/DavidRoblesAquije'
                                    className='text-gray-80 dark:text-white w-[4em] h-[4em] rounded-full flex justify-center items-center border-gray-500 border-2 hover:scale-110 duration-200'
                                    target='_blank'
                                >
                                    <>
                                        <FaGithub size={30} />
                                    </>
                                </a>
                            </li>

                            <li>
                                <a
                                    href='mailto:dra3897@gmail.com'
                                    className='text-gray-80 dark:text-white
                                     w-[4em] h-[4em] rounded-full flex justify-center items-center border-gray-500 border-2 hover:scale-110 duration-200'
                                    target='_blank'
                                >
                                    <>
                                        <HiOutlineMail size={30} />
                                    </>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>



            </div>

        </div>
    )
}
