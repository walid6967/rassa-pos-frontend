import React from 'react'
import style from '../assets/styles/styles'
import Text from '../components/Text'
import { BsChevronRight } from "react-icons/bs";
const Facktor = () => {
  return (
    <div className={`p-5`}>
        <div className={`${style.row} items-center w-full justify-center gap-x-5`}>
          <BsChevronRight />
          <button className={`${style.font} text-gray_fac text-[14px] font-medium`}>بازگشت</button>
          <div className={`border border-gray_line w-[100%] h-[1px]`}></div>
        </div>
        <div className={`mt-5 w-full flex flex-col items-center justify-center shadow-2xl px-10 py-5 rounded-md `}>
          {/* Header of facktor */}
          <div className={`${style.row} justify-between items-center w-full`}>
            <div className={`${style.row} items-center `}>
              <h1 className={`border-r-2 border-black pr-2 ${style.font}`}>نمایش فاکتور</h1>
            </div>
            <div className={`${style.row} items-center`}>
               
            </div>
          </div>
          {/* Header of facktor */}
        <div className={`${style.col} items-start mt-5 w-full `}>
            <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                <div className={`${style.chartHeader} w-[10%] rounded-md`}>NO</div>
                <div className={`${style.chartHeader} w-[25%] rounded-md`}>نام فروشنده</div>
                <div className={`${style.chartHeader} w-[25%] rounded-md`}>شماره فاکتور</div>
                <div className={`${style.chartHeader} w-[25%] rounded-md`}>تاریخ</div>
                <div className={`${style.chartHeader} w-[25%] rounded-md`}>تعداد اقلام</div>
                <div className={`${style.chartHeader} w-[25%] rounded-md`}>مجموع کل</div>
            </div>
            <div className={`${style.col} items-center justify-center p-0 w-full`}>
                {
                    Text.map((item , index) =>{
                        return(
                            <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                                <div id={index} className={`${style.chart} w-[10%] rounded-md bg-gray-100`} >{item.no}</div>
                                <div id={index} className={`${style.chart} w-[25%] rounded-md bg-gray-100`} >{item.fName}</div>
                                <div id={index} className={`${style.chart} w-[25%] rounded-md bg-gray-100`} >{item.FNumber}</div>
                                <div id={index} className={`${style.chart} w-[25%] rounded-md bg-gray-100`} >{item.data}</div>
                                <div id={index} className={`${style.chart} w-[25%] rounded-md bg-gray-100`} >{item.howMany}</div>
                                <div id={index} className={`${style.chart} w-[25%] rounded-md bg-gray-100`} >{item.collect}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Facktor