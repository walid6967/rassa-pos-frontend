import React from 'react'
import style from '../assets/styles/styles'
import Header_page_fac from '../components/Header_page_fac'
import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Facktor_item_buy from '../components/Facktor_item_buy';
const Facktor_buy = () => {
  return (
    <div className={`${style.col} items-center justify-center w-full ${style.font} mt-5`}>
        <div className={`shadow-xl p-5 w-[98%] rounded-lg h-auto`}>
            <Link to="/buy" className={`${style.row} items-center justify-between w-full`}>
                <Header_page_fac />
                <button className={`${style.row} bg-gray_button mr-5 px-5 py-4 rounded-md text-page items-center`}>بازگشت <BsChevronLeft className={`text-page mr-1 text-bold`} /></button>
            </Link>
            <div className={`${style.row } items-center justify-start gap-x-10 mt-5`}>
                <div className={`${style.row} items-center gap-x-2`}>
                    <h3 className={`text-black font-medium`}>نام مشتری:</h3>
                    <p className={`text-gray_fac`}>انبار مرکزی</p>
                </div>
                <div className={`${style.row} items-center gap-x-2`}>
                    <h3 className={`text-black font-medium`}>شماره فاکتور:</h3>
                    <p className={`text-gray_fac`}>3456</p>
                </div>
                <div className={`${style.row} items-center gap-x-2`}>
                    <h3 className={`text-black font-medium`}>تاریخ:</h3>
                    <p className={`text-gray_fac`}>1401/12/12</p>
                </div>
            </div>
                <Facktor_item_buy />
            <div className={`w-full `}>
                <div className={`${style.row} items-center float-left text-[20px] mt-5`}>
                    <h1 className={` font-medium text-black`}>مجموع کل:</h1>
                    <p className={`text-btn mr-2`}>25,000</p>
                    <span className={`text-gray_fac mr-1`}>افغانی</span>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Facktor_buy