import React from 'react'
import style from '../assets/styles/styles';
import { CiSearch } from "react-icons/ci";
import Chart from './Chart';
import Date from './Date'

 const Dashbord = (props) => {
  return (
    <>
      <div className={`${style.center} justify-center p-5 w-full h-auto `}>
          <div className={`rounded-lg shadow-2xl flex flex-col w-full h-full p-5`}>
            <div className={`${style.row} items-start justify-between w-full`}>
              <div className={`${style.row} items-center gap-x-5`}>
                <p className={`font-medium ${style.font} border-r-4 border-black pr-3 text-20`}>{props.name}</p>
                <Date />
              </div>
              <div className={`${style.row} items-center gap-x-5`}>
                <div className={`${style.row} bg-white items-center justify-between w-[w-[360px] h-[50px] px-5  py-[12px] font-medium rounded-md drop-shadow-xl`}>
                  <input type="text" placeholder='جستجو...' className={` ${style.font} outline-none px-5  py-[12px]`} />
                  <button><CiSearch className={`text-[24px]`}/></button>
                </div>
                  <button className={`${style.font} text-white  font-medium bg-btn  py-[12px] px-[20px] rounded-md`}>ثبت فاکتور خرید</button>
              </div> 
            </div>
            <Chart /> 
          </div>
        </div> 
    </>
  )
}
export default Dashbord