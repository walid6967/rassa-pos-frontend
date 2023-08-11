import React from 'react'
import style from '../assets/styles/styles'

const Footer_page_fac = () => {
  return (
    <>
        <div className={`w-full  mt-5 ${style.row} items-center`}>
          <div className={`w-full`}>
            <span className={`${style.font} text-gray_fac float-left `}>افغانی</span>
            <span className={`${style.font} font-bold text-btn mx-1 float-left`}>25,000</span>
            <h1 className={`font-bold ${style.font} float-left`}>مجموع کل:</h1>
          </div>
        </div>
        <div className={`${style.row} items-center justify-between w-full gap-x-10 mt-5`}>
          <div className={`${style.col} w-1/3 gap-y-2 `}>
            <label htmlFor="off" className={`${style.font} text-gray_fac `}>مبلغ تخفیف:</label>
            <input id='off' className={`w-full py-2 px-5 border border-gray-300 rounded-lg outline-none font-bold ${style.font}`} type="text" placeholder='23,000' />
          </div>
          <div className={`${style.col} w-1/3 gap-y-2 `}>
            <label htmlFor="off" className={`${style.font} text-gray_fac `}>مالیات:</label>
            <input id='off' className={`w-full py-2 px-5 border border-gray-300 rounded-lg outline-none font-bold ${style.font}`} type="text" placeholder='23,000' />
          </div>
          <div className={`${style.col} w-1/3 gap-y-2 `}>
            <label htmlFor="off" className={`${style.font} text-gray_fac `}>قابل پرداخت:</label>
            <input id='off' className={`w-full py-2 px-5 border border-gray-300 rounded-lg outline-none font-bold ${style.font}`} type="text" placeholder='23,000' />
          </div>
        </div>
    </>
  )
}

export default Footer_page_fac