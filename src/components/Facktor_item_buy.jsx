import React from 'react'
import style from '../assets/styles/styles'
import Text from './Text'
const Facktor_item_buy = () => {
  return (
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
  )
}

export default Facktor_item_buy