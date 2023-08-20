import React from 'react'
import style from '../assets/styles/styles'
import { Remove , Print , Edit } from '../assets/img/index';
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react';
const Header_page_fac = () => {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content:() => componentRef.current,
    documentTitle: "emp-data",
    onafterprint: () => alert("Good")
  })
  return (
    <>
        <div className={`${style.row} justify-between items-center w-full`}>
            <div className={`${style.row} items-center `}>
              <h1 className={`border-r-2 border-black pr-2 ${style.font}`}>نمایش فاکتور</h1>
            </div>
            <div className={`${style.row} items-center gap-x-2`}>
              <button className={`px-[12px] py-[11px] border border-gray-500 rounded-md`}>
                <img src={Print} />
              </button>
              <button className={`px-[12px] py-[11px] border border-green-500 rounded-md`}>
                <img src={Edit} />
              </button>
              <button className={`px-[12px] py-[11px] border border-red-500 rounded-md`}>
                <img src={Remove} />
              </button>
            </div>
        </div>
    </>
  )
}

export default Header_page_fac