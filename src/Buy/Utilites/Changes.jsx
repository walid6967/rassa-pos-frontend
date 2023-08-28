import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import dataBase from '../../data/data'
import delet from '../../assets/image/delet.jpg'
import edit_pic from '../../assets/image/edit_pic.jpg'
const Item_changes = ({ setdisplay_2 })=>{
    const [key,setKey] = useState('')
    const [error, setError] = useState('');
    const [display,setdisplay] = useState(true)

    // taking the data from localstroge
    const handleInputChange = (event) => {
        let newValue = event.target.value;
        setKey(newValue)
        // Check if the new value contains any capital litters
        if (/[A-Z]/.test(newValue)) {
          setError('از حروف کوچگ انگلیسی استفاده کنید');
        } else {
          setError('');
        //   setInputValue(newValue);
        }
    };
   const handelSaveNewChanges= ()=>{
    setdisplay_2(false)
   }
   const handelEdit = ()=>{
    
   }
    return(
        <div className="w-full h-full absolute top-0 left-0 z-index-10 bg-[rgba(0,0,0,0.3)] ">
            <div className="w-[668px] py-5 bg-[#FFFFFF]  absolute z-index-4 top-[25%] left-[25%]   p-[30px]  flex flex-col justify-start items-center rounded-md">
                {/* title */}
                <div className="flex flex-row justify-between item-center  w-full mb-5">
                   <div className="flex flex-row justify-center items-center bg-red-500">
                   <button className="mb-1 text-[30px] mr-5">&times;</button>
                    {/* <button>{}</button> */}
                    {
                        display &&
                       <>
                        <img className="mr-5 cursor-pointer" src={delet} alt="" />
                        <button onClick={()=>handelEdit()} > <img className="mr-5 cursor-pointer" src={edit_pic} alt="" /></button></>
                    }
                   </div>
                   <div className=" flex flex-row justify-center items-center  ">
                       <h1 className="font-Estedad font-semibold text-lg" >مورد جدید</h1>
                       <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                   </div>
                </div>
                {/* the account part */}
                <div className=" w-full flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-around items-start mb-2">
                        <input type="text" placeholder="مقدار" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 "/>
                        <div>
                             <input 
                                placeholder='کلید'
                                type="text"
                                className='w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 '/>
                                {error && <p style={{ color: 'red' }} className=" text-right pr-4 mt-2" >{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row justify-around items-start">
                        <textarea  placeholder='ملاحضات' cols='100' className="w-[290px]  py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 "></textarea>
                        {/* <textarea name="" id="" cols="10" rows="10"></textarea> */}
                        <input type="text"  placeholder="عنوان" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 "/>
                    </div>
                </div>
              
                {/* main subment buttons */}
                <div className="w-full px-2 mt-5 flex flex-row justify-start items-start">
                    <button onClick={()=>handelSaveNewChanges(false)}  className="py-[10px] px-[20px] rounded-md bg-B-blue mr-5 text-[#fff] font-semibold">ثبت کردن</button>
                    <button  className="py-[10px] px-[18px] bg-[#F5F5F5] rounded-md text-[#808080] ">لغو</button>
                </div>
            </div>
        </div>
    )
}
export default Item_changes