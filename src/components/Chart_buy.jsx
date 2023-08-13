import React, { useState } from 'react'
import style from '../assets/styles/styles'
import Text from './Text'
import { BsChevronLeft , BsChevronRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import PageTow from './PageTow';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
const Chart_buy = () => {
    const [pageNext , setPageNext] = useState(false)
    
    const nextPage1 = () =>{
        setPageNext(false)
    }
    const nextPage2 = () =>{
        setPageNext(true)
    }
  return (
    <>
    <div className={`${style.col} items-start mt-5 w-full ${pageNext == true ? "hidden" : "flex"} `}>
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
                Text.map((item , index) =>{
                    return(
                    <Link to="/buy/fac" className={`${style.row} items-center justify-center p-0 w-full`}>
                        <div className={`${style.row} items-center justify-center p-0 w-full`}>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[10%]`} >{item.no}</div>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`} >{item.fName}</div>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`} >{item.FNumber}</div>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`} >{item.data}</div>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`} >{item.howMany}</div>
                            <div id={index} className={`${style.chart} ${index %2 ? "bg-gray-100" : "bg-white"}  w-[25%]`} >{item.collect}</div>
                        </div>
                    </Link>
                    )
                })
            }
        </div>
    </div>
    <div className={`${pageNext == false ? "hidden" : "flex"}`}>
        <PageTow />
    </div>
    <div className={`${style.row} items-center mt-5 justify-center w-full`}>
    <div className={`${style.row} items-center gap-x-2`}>
        <button className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}><BsChevronRight className={`${style.font} text-xl`} /></button>
        <button className={`${style.row , style.page} ${pageNext == false ? "bg-btn text-white" : "bg-white"}` }  onClick={nextPage1}>1</button>
        <button className={`${style.row , style.page} ${pageNext == true ? "bg-btn text-white" : "bg-white"}`}  onClick={nextPage2}>2</button>
        <button className={`${style.row , style.page} }`}  onClick={nextPage2}>3</button>
        <button className={`${style.row , style.page}`}>...</button>
        <button className={`w-12 h-10 flex items-center justify-center border rounded text-gray-500 hover:text-blue-500"`}><BsChevronLeft className={`${style.font} text-xl`} /></button>
    </div>
</div>  
</>
  )
}

export default Chart_buy