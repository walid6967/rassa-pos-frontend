import React from 'react'
import style from './assets/styles/styles'
import { CiSearch } from "react-icons/ci";

 const App = () => {
  return (
    <div className={`${style.center} border border-black overflow-hidden p-5 w-full h-[100vh]`}>
      <div className={`rounded-lg shadow-2xl flex flex-col w-full h-full p-5`}>
        <div className={`${style.row} items-start justify-between w-full`}>
          <div className={`${style.row} items-center gap-x-5`}>
            <p className={`font-medium ${style.font} border-r-4 border-black pr-3 text-20`}>خرید</p>
            <input
              placeholder="تعیین تاریخ..."
              type="date"
              id="date"
              className={`${style.font} px-5 py-3 rounded-sm border border-gray-100 outline-none before:content-['']`}
             />
          </div>
          <div className={`${style.row} items-center gap-x-5`}>
            <div className={`${style.row} bg-white items-center justify-between w-[w-[360px] h-[50px] px-5  py-[12px] font-medium rounded-md drop-shadow-xl`}>
              <input type="text" placeholder='جستجو...' className={` ${style.font} outline-none px-5  py-[12px]`} />
              <button><CiSearch className={`text-[24px]`}/></button>
            </div>
              <button className={`${style.font} text-white  font-medium bg-btn  py-[12px] px-[20px] rounded-md`}>ثبت فاکتور خرید</button>
          </div> 
        </div>

      </div>
    </div>
  )
}
export default App
{/**
<div className={`${style.backGroundRed} ${style.font}`}>
      <div>
        {
          texts.map((item , index) =>{
            return(
              <div id={index} className={`flex flex-row items-center ${index == 0 ? "justify-around" : "justify-around"} w-full p-3 rounded0-lg ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                <div>{item.no}</div>
                <div>{item.fName}</div>
                <div>{item.FNumber}</div>
                <div>{item.data}</div>
                <div>{item.howMany}</div>
                <div>{item.collect}</div>
              </div>
            )
          })
        }
      </div>
    </div>
*/}