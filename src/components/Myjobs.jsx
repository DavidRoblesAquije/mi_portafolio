import { Collapse } from 'react-collapse'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const Myjobs = ({ open, toggle, title, desc, fecha }) => {
    return (
        <div className='pt-[10px]'>
            <div className='bg-white dark:bg-gray-800 py-[25px] px-[30px] flex justify-between items-center cursor-pointer rounded-t-lg'
                onClick={toggle}>
                <div>
                    <p className='text-[18px] font-semibold'>{title}</p>
                    <span>{fecha}</span>
                </div>
                <div className='text-[30px]'>
                    {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className='bg-white dark:bg-gray-800 rounded-b-lg px-[30px] pb-[20px]'>
                    <p className='whitespace-pre-wrap'>{desc}</p>
                </div>
            </Collapse>
        </div>
    )
}
