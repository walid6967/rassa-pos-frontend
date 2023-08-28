import React, { Component, useState, useEffect } from 'react'

import dataBase from '../../data/data'
import Secondar_Victor from '../../assets/image/Secondar_Victor.svg'
import Thired_victoore from '../../assets/image/Thired_victoore.svg'
import Save_new_product from './Save_new_product'
import Change_items from './Save_new_product'
import axios from 'axios'
import Item_changes from './Changes'

const Types = ()=>{
   const [one,setOne] = useState(1)
   const [tow,seTow] = useState(2)
   const [three,setThree] = useState(3)
   const [foure,setFour] = useState(5)
   const [douth,setDouth] = useState('...')
   const [dispaly , setDisplay]=useState(false)
   const[display_2,setdisplay_2] = useState(false)
//    cosnt [index,setIndex] = useState()

// the data which was get from api
const [Data,setData] = useState([])

//    the style state
const [style,setStyle] = useState(0)
    const handelthree = ()=>{
        setStyle(3)
    }
    const handeltow = ()=>{
        setStyle(2)
        
    }
    const handeltone = ()=>{
        setStyle(1)
    }


   const Incremetn = ()=>{
    // setDouth(foure)
    setOne(one+1)
    seTow(one+2)
    setThree(tow+2)
    setFour(three+3)
   }
   const Decremet = ()=>{
    // setOne(douth)
    // setOne(douth)
   if (one !== 1) {
    setOne(one-1)
    seTow(tow-1)
    setThree(three-1)
   }else{
   }
   }

   const handelChanges = (i)=>{
    setdisplay_2(true)

   }
 

    // start getting the data form local api
    useState(()=>{
        
        async function getData() {
            const token = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzIwNDY1MCwianRpIjoiNjljODYzMzItZjQ4ZS00ODQyLTlmN2UtYWI2MzFiNjI1MjZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzIwNDY1MCwiZXhwIjoxNjkzMjkxMDUwfQ.3jyYo44hIwGH_0iNwHNaNiJysHUmIr21qFcM8N0hp-k"
 
            try {
              const response = await axios.get('http://127.0.0.1:9005/utilities',{headers: { Authorization: `Bearer ${token}` },});
              setData(response.data);
              if (response.status === 200) {
                console.log( response.data)
              }else{
            alert('no')
              }
            } catch (error) {
              console.error('Error itmes:', error)
            }
            console.log(Data);
        }
        getData()
   

    },[]) 
          
      
           
    




    return(
        <div className=' font-Estedad flex flex-col justify-center items-center shadow-md shadow-[rgb(235, 235, 235) rounded-md  mx-5 p-4 '>
           {/* header */}
           <div className=" w-full flex flex-row justify-between items-center ">
                <button onClick={()=>setDisplay(true)} className=' text-white py-[12px] px-[20px] bg-B-blue rounded-md '>ثبت مورد جدید</button>
                <div className="flex flex-row justify-center items-center mr-2">
                    <h1 className='mb-1 font-Estedad  text-lg font-normal'>مورد ها</h1>
                    <div className="w-1 h-6 rounded-md bg-black ml-2 "></div>
                </div>
           </div>
           {/* the save alart Component */}
                {
                    dispaly &&
                    <Save_new_product  displayState={dispaly} setDisplayState={setDisplay}/>
                }
            {/* the utilites list */}
            <div className="w-full flex flex-col justify-center items-start mt-10">
                <div className="h-[40px] w-full flex flex-row-reverse justify-around items-center bg-[#E6F6FD]">
                    <p className=" text-end pr-9 w-1/5">no</p>
                    <p className=" text-end pr-5   w-1/5">عنوان</p>
                    <p className=" text-center   w-1/5">کلید</p>
                    <p className=" text-center   w-1/5">مقدار</p>
                    <p className=" text-center   w-1/5">ملاحضات</p>
                </div>
                {dataBase.map((data, index)=>(
                    
               <div onClick={()=>handelChanges(index)}  id={index} className={`  w-full flex flex-row-reverse justify-around items-center mb-2 h-10 ${index %2 ? "bg-[#FAFAFA]" : "bg-white"} `}>
                  <p className='text-end pr-10 w-1/5'>{index+1}</p>
                  <p className='text-end w-1/5 text-base'>{data.text}</p>
                  <p className='text-center w-1/5'>{data.Key}</p>
                  <p className='text-center w-1/5'>{data.amount}</p>
                  <p className='text-center w-1/5'>{data.acssepted}</p>
               </div>
                ))}
                {
                 display_2 && 
                    <Item_changes  setdisplay_2 = {setdisplay_2} />
                }
               {/* the footer part of this page */}
                    <div className="w-full flex flex-row justify-center items-centerpy-5">
                       <button onClick={()=>Incremetn()} className="flex flex-row justify-center items-center border-solid border-[1px] border-[#666666]  w-10 h-9  rounded-md mx-1"><img src={Secondar_Victor}  alt="" /></button>
                       <button  className={"flex flex-row justify-center items-center border-solid border-[1px] border-[#999999] text-[#666666] w-10 h-9  rounded-md mx-1"}>{douth}</button>
                       <button onClick={()=>handelthree()} className={`flex flex-row justify-center items-center border-solid border-[1px] border-[#999999] text-[#666666] w-10 h-9  rounded-md mx-1  ${style == 3 ? 'bg-B-blue  text-white' : 'bg-white'} `}>{three}</button>
                       <button onClick={()=>handeltow()}className={`flex flex-row justify-center items-center border-solid border-[1px] border-[#999999] text-[#666666] w-10 h-9  rounded-md mx-1  ${style == 2 ? ' bg-B-blue  text-white'  : ' bg-white'}`}>{tow}</button>
                       <button onClick={()=>handeltone()} className={`flex flex-row justify-center items-center border-solid border-[1px] border-[#999999] text-[#666666] w-10 h-9  rounded-md mx-1  ${style == 1 ? 'bg-B-blue text-white' :'bg-white'} `}>{one}</button>
                       <button onClick={()=>Decremet()} className="flex flex-row justify-center items-center border-solid border-[1px] border-[#999999] text-[#666666] w-11 h-9 rounded-md mx-1"><img src={Thired_victoore} className='' alt="" /></button>
                    </div>
            </div>
        </div>
    )
}
export default Types