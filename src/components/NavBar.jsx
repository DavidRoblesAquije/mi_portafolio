import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { BsLightbulbFill, BsLightbulbOffFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'


export const NavBar = ({ handleSwitch, theme, changeEnglish, changeSpanish }) => {

    const { t, i18n } = useTranslation();

    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: t("nav1")
        },
        {
            id: 2,
            link: t("nav2")
        },
        {
            id: 3,
            link: t("nav3")
        },
        {
            id: 4,
            link: t("nav4")
        }
    ]

    return (
        <div className='flex justify-between items-center w-full h-20 fixed text-white bg-black px-4 z-10'>
            <div className='flex justify-center items-center'>
                <img src={Logo} alt="logo" width={45} />
                <h1 className='text-3xl md:text-4xl font-semibold ml-4'>SoftGaebal</h1>
            </div>

            <div className='flex'>

                <div className='pr-5'>
                    <button className='pr-5' onClick={changeEnglish}>EN</button>
                    <button onClick={changeSpanish}>ES</button>
                </div>
                
                <button className='bg-gray-600 p-2 rounded-xl text-xl hover:scale-110 duration-100' onClick={handleSwitch}>
                    {theme === 'dark' ? <BsLightbulbOffFill /> : <BsLightbulbFill />}
                </button>

                <ul className='hidden md:flex items-center'>
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                                <Link to={link} smooth duration={500}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>


            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
                {
                    nav ? <FaTimes size={30} /> : <FaBars size={30} />
                }
            </div>

            {
                nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                        {
                            links.map(({ id, link }) => (
                                <li key={id} className='px-4 cursor-pointer capitalize py-6 text-2xl'>
                                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                                </li>
                            ))
                        }

                    </ul>
                )
            }



        </div>
    )
}
