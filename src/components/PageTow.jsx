import React from 'react'
import style from '../assets/styles/styles'
import Text_2 from './Text_Tow'
const PageTow = () => {
  return (
    <>
    <div className={`${style.col} items-start mt-5 w-full`}>
        <div className={`${style.row} items-center justify-center p-0 w-full`}>
            <div className={`${style.chartHeader} w-[10%]`}>NO</div>
            <div className={`${style.chartHeader} w-[25%]`}>نام فروشنده</div>
            <div className={`${style.chartHeader} w-[25%]`}>شماره فاکتور</div>
            <div className={`${style.chartHeader} w-[25%]`}>تاریخ</div>
            <div className={`${style.chartHeader} w-[25%]`}>تعداد اقلام</div>
            <div className={`${style.chartHeader} w-[25%]`}>مجموع کل</div>
        </div>
        <div className={`${style.col} items-center justify-center p-0 w-full`}>
            {
                Text_2.map((item , index) =>{
                    return(
                    <div className={`${style.row} items-center justify-center p-0 w-full`}>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[10%]`}>{item.no}</div>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`}>{item.fName}</div>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`}>{item.FNumber}</div>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`}>{item.data}</div>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`}>{item.howMany}</div>
                        <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`}>{item.collect}</div>
                    </div>
                    )
                })
            }
        </div>
    </div>
    </>
  )
}

export default PageTow