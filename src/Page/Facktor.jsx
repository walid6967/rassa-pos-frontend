import React from 'react'
import style from '../assets/styles/styles'
import Text from '../components/Text'
import { BsChevronRight } from "react-icons/bs";
import Footer_page_fac from '../components/Footer_page_fac';
import Header_page_fac from '../components/Header_page_fac';
import Facktor_items from '../components/Facktor_items';
import { Link } from 'react-router-dom';
const Facktor = () => {
  return (
    <div className={`p-5`}>
        <Link to="/buy" className={`${style.row} items-center w-full justify-center gap-x-1`}>
          <BsChevronRight />
          <button className={`${style.font} text-gray_fac text-[14px] font-medium ml-2`}>بازگشت</button>
          <div className={`border border-gray_line w-[100%] h-[1px]`}></div>
        </Link>
        <div className={`mt-5 w-full flex flex-col items-center justify-center shadow-2xl px-10 py-5 rounded-lg `}>
          {/* Header of facktor */}
          <Header_page_fac />
          {/* Header of facktor */}
          {/* Facktor_item */}
        <Facktor_items />
        {/* end of Facktor_item */}
        {/* footer */}
        <Footer_page_fac />
        {/* end of footer  */}
      </div>
    </div>
  )
}

export default Facktor