import React, { useState }  from 'react'
import { BsChevronLeft , BsChevronRight } from "react-icons/bs";
import style from '../assets/styles/styles';
const Pagebtn = () => {
  const [pageTow , setPageTow] = useState(false)
  const nextPage = () =>{
    pageTow(!setPageTow)
  }
  return (
    <>
    <div className={`${style.row} items-center mt-5 justify-center w-full`}>
        <div className={`${style.row} items-center gap-x-2`}>
            <button className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}><BsChevronRight className={`${style.font} text-xl`} /></button>
            <button className={`${style.row , style.page} bg-btn text-white`}>1</button>
            <button className={`${style.row , style.page}`} onClick={nextPage}>2</button>
            <button className={`${style.row , style.page}`}>...</button>
            <button className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}><BsChevronLeft className={`${style.font} text-xl`} /></button>
        </div>
    </div>
    </>
  )
}

export default Pagebtn