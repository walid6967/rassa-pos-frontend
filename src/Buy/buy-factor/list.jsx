import React, { Component, useState } from 'react'
import {BsChevronCompactDown} from  'react-icons/bs'
import DownVictore from '../../assets/image/DownVictore.svg'
const List = ()=>{
    const [show,setShow] = useState(false)
    const [show_2,setShow_2] = useState(false)
    return(
        <div className="w-full flex flex-row-reverse justify-start items-start ">
            <div className="flex flex-col  mt-2">
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#F2F8FE] rounded-md mb-2">no</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">1</div>
                <div className="w-[50px] h-11 py-[10px] px-[18px] bg-[#FAFAFA]  mb-2">2</div>
            </div>

            <div className="flex flex-col  item-center  w-[89%] mr-5 ">
                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="نام جنس فروخته شده" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue focus:border-[2px]" /></div>
                     <div className=""><input type="text" placeholder="واحد" className="w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#F2F8FE] text-right outline-none  focus:border-B-blue   focus:border-[2px]"/></div>
                     <div className=""><input type="text" placeholder="تعداد" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] "/></div>
                     <div className=""><input type="text" placeholder="قیمت فی" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] " /></div>
                     <div className=""><input type="text" placeholder="مجموعه کل" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#F2F8FE] text-right outline-none focus:border-B-blue  focus:border-[2px] "/></div>
                </div>
                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div className=""><input type="text" placeholder="نام جنس فروخته شده" className="w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none" /></div>
                     <div className=""><input type="text" placeholder="واحد" className="w-[170px] h-[42px]  rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "/></div>
                     <div   className="flex flex-row justify-center items-center w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "> <img src={DownVictore} alt="" /> <input type="text" placeholder="" className=" text-right  outline-none bg-[#FAFAFA] w-full  "/></div>
                     <div className=""><input type="text" placeholder="قیمت فی" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="مجموعه کل" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                </div>

                <div className=" w-full flex flex-row-reverse justify-around mb-2 mt-2">
                     <div onClick={()=>setShow_2(!show_2)} className="flex flex-row justify-center items-center w-[280px] h-[42px] rounded-md py-[10px] px-[12px] bg-[#FAFAFA] "> <img src={DownVictore} alt="" /> <input type="text" placeholder="" className=" bg-[#FAFAFA] rounded-md w-full text-right outline-none" /></div>
                            {
                                show_2 && 
                                <div className=" bg-gray-50 w-[280px] rounded-md   mt-2 fixed absolut z-10 bottom-[23%] right-[29%]  shadow-md shadow-gray-300  p-[2px] text-right flex flex-col justify center items-end ">
                                    <div className=" w-full pb-1 hover:bg-blue-200  cursor-pointer px-2"><p>آب مونا </p></div>
                                    <div className=" w-full pb-1 hover:bg-blue-200 cursor-pointer px-2"><p>کلوچه</p></div>    
                                    <div className=" w-full pb-1 hover:bg-blue-200 cursor-pointer px-2"><p>آب انار</p></div>    
                                    <div className=" w-full pb-1 hover:bg-blue-200 cursor-pointer px-2"><p>کلوجه نارنجکی</p></div>    
                                </div>
                            }
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div onClick={()=>setShow(!show)}  className="flex flex-row justify-center items-center w-[170px] h-[42px]   rounded-md py-[10px] px-[12px]  bg-[#FAFAFA] text-right outline-none "> <img src={DownVictore} alt="" /> <input type="text" placeholder="" className=" text-right  outline-none bg-[#FAFAFA] w-full  "/>
                       {
                           show && 
                           <div className=" bg-gray-50 w-[160px] rounded-md   mt-2 fixed absolut z-10 bottom-[31.5%] shadow-md shadow-gray-300  p-[2px] text-right flex flex-col justify center items-end ">
                               <div className=" w-full pb-1 hover:bg-blue-200  cursor-pointer px-2"><p>کارتن </p></div>
                               <div className=" w-full pb-1 hover:bg-blue-200 cursor-pointer px-2"><p>بسته</p></div>
                               
                           </div>
                       }
                     </div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px] rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                     <div className=""><input type="text" placeholder="" className="w-[170px] h-[42px]  rounded-md  py-[10px] px-[12px] bg-[#FAFAFA] text-right outline-none "/></div>
                </div>
            </div>
        </div>
    )
}
export default List