import React from 'react'
import style from '../assets/styles/styles'
import Text from './Text'
const Chart = () => {
  return (
    <div className={`${style.row} items-start mt-5 w-full`}>
        <div className={`${style.col , style.font} justify-center w-[10%]  `}>
            <div className={` py-3 text-center`}>
                <p className={`font-medium w-full ${style.font} bg-charts py-3`}>NO</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col} w-full`}>
                        <div key={index} className={`  py-3 text-center  ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.no}</div>
                    </div>
                )
            })}
        </div>
        <div className={`${style.col , style.font} justify-center  w-[25%]`}>
            <div className={` py-3 text-center  `}>
                <p className={`font-medium ${style.font} bg-charts py-3`}>نام فروشنده</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col}`}>
                        <div key={index} className={`py-3 text-center ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.fName}</div>
                    </div>
                )
            })}
        </div>
        <div className={`${style.col , style.font} justify-center  w-[20%]`}>
            <div className={`w-[240px] py-3 text-center  `}>
                <p className={`font-medium ${style.font} bg-charts py-3`}>شماره فاکتور</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col}`}>
                        <div key={index} className={`w-[240px] py-3 text-center ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.FNumber}</div>
                    </div>
                )
            })}
        </div>
        <div className={`${style.col , style.font} justify-center  w-[20%]`}>
            <div className={`w-[240px] py-3 text-center  `}>
                <p className={`font-medium ${style.font} bg-charts py-3`}>تاریخ</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col}`}>
                        <div key={index} className={`w-[240px] py-3 text-center ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.data}</div>
                    </div>
                )
            })}
        </div>
        <div className={`${style.col , style.font} justify-center  w-[20%]`}>
            <div className={`w-[240px] py-3 text-center  `}>
                <p className={`font-medium ${style.font} bg-charts py-3`}>تعداد اقلام</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col}`}>
                        <div key={index} className={`w-[240px] py-3 text-center ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.howMany}</div>
                    </div>
                )
            })}
        </div>
        <div className={`${style.col , style.font} justify-center  w-[20%]`}>
            <div className={`w-[240px] py-3 text-center  `}>
                <p className={`font-medium ${style.font} bg-charts py-3`}>مجموع کل</p>
            </div>
            {Text.map((item , index) =>{
                return(
                    <div className={`${style.col}`}>
                        <div key={index} className={`w-[240px] py-3 text-center ${index  % 2 ? "bg-gray-100" : "bg-white"}`}>{item.collect}</div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Chart