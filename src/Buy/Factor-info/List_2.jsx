import React, { Component, useEffect, useState } from 'react'
import {BsChevronCompactDown} from  'react-icons/bs'
import dataBase_2 from './data_2'
import axios from 'axios'
const List_2 = ({
    
    setPayable,
    setFinallPyment,
    tax,discount,
    title,
    setTitle,
    items_mount,
    setItemMount,
    items_price,
    setItemPrice
})=>{
    const [totalMount,setTotalMount] = useState()
   
    let nano = items_mount * items_price

    useEffect(()=>{
        if(items_mount&& items_price == NaN){
            return 
        }else{
            setTotalMount(nano)
            setFinallPyment(totalMount)
            setPayable(totalMount-discount+tax)
        }
    })

   
    useEffect(()=>{
        async function getData() {
            const token = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzIwNDY1MCwianRpIjoiNjljODYzMzItZjQ4ZS00ODQyLTlmN2UtYWI2MzFiNjI1MjZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzIwNDY1MCwiZXhwIjoxNjkzMjkxMDUwfQ.3jyYo44hIwGH_0iNwHNaNiJysHUmIr21qFcM8N0hp-k'
    
            try {
              const response = await axios.get('http://127.0.0.1:9005/invoices',{headers: { Authorization: `Bearer ${token}` },});
            //   setData(response.data);
              if (response.status === 200) {
                console.log( response.data)
              }else{
            alert('no')
              }
            } catch (error) {
              console.error('Error itmes:', error)
            }
            // console.log(Data);
        }
        getData()
    
    },[])

    
    return(
        <div className="w-full flex flex-row-reverse justify-start items-start ">
            <div className="flex flex-col  mt-2">
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#F2F8FE] rounded-md mb-2">no</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">1</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">2</div>
            </div>
            <div className="flex flex-col  item-center  w-[89%] mr-5 ">
                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="نام جنس فروخته شده" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px]" /></div>
                     <div className=""><input type="text" placeholder="واحد" className="w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#F2F8FE] text-right outline-none  focus:border-B-blue   focus:border-[2px]"/></div>
                     <div className=""><input type="text" placeholder="تعداد" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] "/></div>
                     <div className=""><input type="text" placeholder="قیمت فی" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] " /></div>
                     <div className=""><input type="text" placeholder="مجموعه کل" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:bborder-B-blue  focus:border-[2px] "/></div>
                </div>
                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div className=""><input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="sdffd" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none" /></div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input  type="text" placeholder="" value={items_mount} onChange={(e)=>setItemMount(e.target.value)} className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="" value={items_price} onChange={(e)=>setItemPrice(e.target.value)}  className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="" value={totalMount} onChange={(e)=>setTotalMount(e.target.value)} className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                </div>

                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none" /></div>
                     <div className="flex flex-col justify-center items-center"><input  type="text" placeholder="" className="w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "/>
                      
                     </div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                </div>
                
            </div>
        </div>
    )
}
export default List_2