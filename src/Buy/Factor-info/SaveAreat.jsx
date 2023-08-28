import React, { Component, useState } from 'react'
import dataBase_2 from './data_2'

const SaveData = ({state,setstate,payable,customarName })=>{
    const [allTodo,setAll] = useState([])
    const [name,setNmae] = useState()
    const [count,setCount] = useState()

    const handelCloseAlard =()=>{
      
        setstate(!state)
        let allTodoInfo = {
            user : name,
            mount : count
        }
        let ubdataTodo = [...allTodo]
        ubdataTodo.push(allTodoInfo)
        dataBase_2.push(...ubdataTodo)
        console.log(dataBase_2);
        // window.location.reload();
        window.location.reload()
    }

    return(
        <div className="w-full h-full absolute top-0 left-0 z-index-10 bg-[rgba(0,0,0,0.3)] ">
            <div className="w-[668px] py-5 bg-[#FFFFFF]  absolute z-index-4 top-[25%] left-[25%]   p-[30px]   flex flex-col justify-start items-center rounded-md">
                {/* title */}
                <div className="flex flex-row justify-between item-center  w-full">
                    <button onClick={()=>handelCloseAlard()} className="mb-1 text-[30px]">&times;</button>
                   <div className=" flex flex-row justify-center items-center ">
                       <h1 className="font-Estedad font-semibold text-lg" >فاکتور خرید</h1>
                       <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                   </div>
                </div>
                {/* the account part */}
                <div className=" w-full flex flex-row justify-around items-center  ">
                    <div className="flex flex-col justify-center items">
                        <h1 className="text-right mb-2 font-medium text-lg">مقدار پرداخت</h1>
                        <input type="text" value={payable}  placeholder="3,000" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right  rounded-md outline-none  border-solid border-[#DADADA] border-[2px] "/>
                    </div>
                    <div className="flex flex-col justify-center items">
                        <h1 className="text-right mb-2 font-medium text-lg">نام مشتری</h1>
                        <input type="text" value={customarName} placeholder="احمد کرمی" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right rounded-md outline-none border-solid  border-[#DADADA] border-[2px] "/>
                    </div>
                </div>
                {/* cheak box */}
                <div className="w-full px-2 mt-5 flex flex-row justify-start items-start ">
                    <div className="w-[20px] h-[20px] border-solid border-[#00B4FF] border-[2px] mt-1 mr-2 rounded-[4px]"></div>
                    <div className="font-Estedad font-medium flex flex-row "> 
                        <p className="mr-1">پرداخت</p>
                        <span>100%</span>
                    </div>
                </div>
                {/* main subment buttons */}
                <div className="w-full px-2 mt-5 flex flex-row justify-start items-start">
                    <button onClick={()=>handelCloseAlard()} className="py-[10px] px-[18px] rounded-md bg-[#00B4FF] mr-2 text-[#fff] ">ثبت کردن</button>
                    <button onClick={()=>handelCloseAlard()} className="py-[10px] px-[18px] bg-[#F5F5F5] rounded-md text-[#808080] ">لغو</button>
                </div>
            </div>
        </div>
    )
}
export default SaveData