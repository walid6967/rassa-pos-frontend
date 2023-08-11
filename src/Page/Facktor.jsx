import React from 'react'
import style from '../assets/styles/styles'
import Text from '../components/Text'
import { BsChevronRight } from "react-icons/bs";
import Footer_page_fac from '../components/Footer_page_fac';
import Header_page_fac from '../components/Header_page_fac';
const Facktor = () => {
  return (
    <div className={`p-5`}>
        <div className={`${style.row} items-center w-full justify-center gap-x-5`}>
          <BsChevronRight />
          <button className={`${style.font} text-gray_fac text-[14px] font-medium`}>بازگشت</button>
          <div className={`border border-gray_line w-[100%] h-[1px]`}></div>
        </div>
        <div className={`mt-5 w-full flex flex-col items-center justify-center shadow-2xl px-10 py-5 rounded-lg `}>
          {/* Header of facktor */}
          <Header_page_fac />
          {/* Header of facktor */}
        <div className={`${style.col} items-start mt-5 w-full `}>
            <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                <div className={`${style.chartHeader} w-[8%] rounded-md`}>NO</div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>نام جنس</div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>تعداد</div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>قیمت فی</div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>مجموع</div>
            </div>
            <div className={`${style.col} items-center justify-center p-0 w-full`}>
                {
                    Text.map((item , index) =>{
                        return(
                            <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                                <div id={index} className={`${style.chart} cursor-auto w-[8%] rounded-md bg-gray-100`} >{item.no}</div>
                                <div id={index} className={`${style.chart} cursor-auto w-[40%] rounded-md bg-gray-100`} >{item.fName}</div>
                                <div id={index} className={`${style.chart} cursor-auto w-[40%] rounded-md bg-gray-100`} >{item.FNumber}</div>
                                <div id={index} className={`${style.chart} cursor-auto w-[40%] rounded-md bg-gray-100`} >{item.data}</div>
                                <div id={index} className={`${style.chart} cursor-auto w-[40%] rounded-md bg-gray-100`} >{item.howMany}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <Footer_page_fac />
      </div>
    </div>
  )
}

export default Facktor