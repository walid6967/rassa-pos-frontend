import React from 'react'
import style from './assets/styles/styles'
import { BsChevronDown } from "react-icons/bs";
 const App = () => {
  const texts = [
    {
      no: "1",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "2",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "3",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "4",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "5",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "6",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
    {
      no: "6",
      fName:"یاسین جان",
      FNumber: "23452",
      data: "1401/12/12",
      howMany: "20",
      collect : "10,000" 
    },
  ]
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
            <input type="search" placeholder='جستجو...' className={`px-5 w-[360px] h-[50px] py-[12px] font-medium rounded-md drop-shadow-xl ${style.font} outline-none`} />
            <button className={`${style.font} text-white  font-medium bg-btn py-[12px] px-[20px] rounded-md`}>ثبت فاکتور خرید</button>
          </div> 
        </div>
        <div className={`border border-black w-full mt-4 ${style.col} items-start `}>                        
           <div className={`${style.row} items-center justify-start w-full`}>
              <div className={`${style.row} items-center justify-around bg-charts py-2 px-3 w-full gap-x-5`}>
                <div className={` font-[600] text-center ${style.font} text-md`}>NO</div>
                <div className={`w-1/3 font-[600] text-center ${style.font} text-md`}>NO</div>
                <div className={`w-1/3 font-[600] text-center ${style.font} text-md`}>NO</div>
                <div className={`w-1/3 font-[600] text-center ${style.font} text-md`}>NO</div>
                <div className={`w-1/3 font-[600] text-center ${style.font} text-md`}>NO</div>
              </div>
           </div>
           <div className={`${style.backGroundRed} ${style.font} w-full`}>
            <div>
              {
                texts.map((item , index) =>{
                  return(
                    <div id={index} className={`flex flex-row items-center ${index == 0 ? "justify-around" : "justify-around"} w-full p-3 rounded0-lg ${index % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                      <div className={` text-center`}>{item.no}</div>
                      <div className={`w-1/6 text-center`}>{item.fName}</div>
                      <div className={`w-1/6 text-center`}>{item.FNumber}</div>
                      <div className={`w-1/6 text-center`}>{item.data}</div>
                      <div className={`w-1/6 text-center`}>{item.howMany}</div>
                      <div className={`w-1/6 text-center`}>{item.collect}</div>
                    </div>
                  )
                })
              }
            </div>
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