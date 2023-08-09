import React from 'react'
import { BsChevronLeft , BsChevronRight } from "react-icons/bs";
import style from '../assets/styles/styles';
const Pagebtn = () => {
  return (
    <div className={`${style.row} items-center mt-5 justify-center w-full`}>
        <div className={`${style.row} items-center gap-x-2`}>
            <button className={`${style.row }  w-[40px] h-[40px] focus:bg-btn focus:text-white text-gray-500 items-center justify-center border border-page rounded-md`}><BsChevronRight className={`${style.font} text-xl`} /></button>
            <button className={`${style.row , style.page}`}>1</button>
            <button className={`${style.row , style.page}`}>2</button>
            <button className={`${style.row , style.page}`}>3</button>
            <button className={`${style.row , style.page}`}>...</button>
            <button className={`${style.row }  w-[40px] h-[40px] focus:bg-btn focus:text-white text-page items-center justify-center border border-page rounded-md`}><BsChevronLeft className={`${style.font} text-xl`} /></button>
        </div>
    </div>
  )
}

export default Pagebtn
