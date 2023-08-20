import React, { useEffect, useState } from 'react'
import style from '../assets/styles/styles'

import { BsChevronLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';

import { Remove , Edit , Print , addcircle , Group } from '../assets/img';
import Text from '../components/Text';
import { useRef } from 'react';

const Facktor_buy = () => {
    
    const [object , setObject ]  = useState(Text)
    const [edit , setEdit] = useState(true)
    const [text , setText] = useState(Text)
    const [mode, setMode] = useState('view');
    const [deletAll , setDeletAll] = useState(true)
    const [open , setOpen] = useState(false)
    const [editText , setEditText] =useState()
    const editF = () =>{
        setEdit(false)
    }

    const componentRef = useRef()

       const handlePrint = () =>{
        window.print()  
       }
       const handleRemove = (itemId ) => {
        const updatedItems = text.filter((item) => item.id !== itemId);
        setText(updatedItems);
      };
      const handleChange = (e) => {
        setText(e.target.value);
      };
              
      const removingAll = () =>{
        setOpen(true)
      }
      const reject = () =>{
        setOpen(false)
      }
      const renoveF = () =>{
    
        localStorage.clear("items");

      }
       const handleInputChange = (event) => {
        setEditText(event.target.value);
        };
        const rejectEdit = () =>{
            setEdit(true)
        }
  return (
    <>
    <div className={`${style.col} items-center justify-center w-full ${style.font} mt-5`}>
        <div  className={`shadow-xl p-5 w-[98%] rounded-lg h-auto`}>
            <div className={`${style.row}`}>
            <div className={`${style.row} justify-between items-center w-full`}>
            <div className={`${style.row} items-center `}>
              <h1 className={`border-r-2 border-black pr-2 ${style.font}`}>نمایش فاکتور</h1>
            </div>
            <div className={`${style.row} items-center gap-x-2 ${edit == false ? "hidden" : "flex"}`}>
                <button className={`px-[12px] py-[11px] border border-gray-500 rounded-md `} onClick={handlePrint}>
                    <img src={Print} />
                </button>
                <button className={`px-[12px] py-[11px] border border-green-500 rounded-md`} onClick={editF}>
                    <img src={Edit} />
                </button>
                <button className={`px-[12px] py-[11px] border border-red-500 rounded-md`} onClick={removingAll}>
                    <img src={Remove} />
                </button>
            </div>
            </div>
                <Link to="/sell" className={`${style.row} items-center justify-between ${edit == false ? "hidden" : "flex"}`}>
                    <button className={`${style.row} bg-gray_button mr-5 px-5 py-4 rounded-md text-page items-center`}>بازگشت <BsChevronLeft className={`text-page mr-1 text-bold`} /></button>
                </Link>
            </div>
        <div className={`${style.col}`}>
                <div className={`${style.row } items-center justify-start gap-x-10 mt-5`}>
                    <div className={`${style.row} items-center gap-x-2`}>
                        <h3 className={`text-black font-medium`}>نام مشتری:</h3>
                        <p className={`text-gray_fac`}>انبار مرکزی</p>
                    </div>
                    <div className={`${style.row} items-center gap-x-2`}>
                        <h3 className={`text-black font-medium`}>شماره فاکتور:</h3>
                        <p className={`text-gray_fac`}>3456</p>
                    </div>
                    <div className={`${style.row} items-center gap-x-2`}>
                        <h3 className={`text-black font-medium`}>تاریخ:</h3>
                        <p className={`text-gray_fac`}>1401/12/12</p>
                    </div>
                </div>
            <div  className={`${style.col} items-start mt-5 w-full `}>
                <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                <div className={`${style.chart , style.row} cursor-auto w-[81px] h-[46px] py-2 rounded-md bg-gray-100 ${edit == true ? "hidden" : "flex"}`}>
                
                </div>
                    <div className={`${style.chartHeader} w-[8%] rounded-md`}>NO</div>
                    <div className={`${style.chartHeader} w-[40%] rounded-md`}>نام جنس</div>
                    <div className={`${style.chartHeader} w-[40%] rounded-md`}>تعداد</div>
                    <div className={`${style.chartHeader} w-[40%] rounded-md`}>قیمت فی</div>
                    <div className={`${style.chartHeader} w-[40%] rounded-md`}>مجموع</div>
                </div>
                <div className={`${style.col} items-center justify-center p-0 w-full ${deletAll == true ? "flex" : "hidden"}`}>
                    {
                        text == null ? "" : (
                        text.map((item , index) =>{
                            return(
                                <div className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}>
                                    <button className={`${style.chart , style.row} cursor: text px-2 py-2 rounded-md bg-gray-100 ${edit == true ? "hidden" : "flex"}`} onClick={() => handleRemove(item.id)}>
                                        <img className={`${style.row} w-[50px] items-center justify-center`} src={addcircle} alt="remove" />
                                    </button>
                                    <div id={index} className={`${style.chart } w-[8%] rounded-md  bg-gray-100`} >{index+1} </div>
                                    <div id={index} className={`${style.chart } w-[40%] rounded-md ${edit == false ? "text-gray-500" : "text-black" }  bg-gray-100`}>{item.fName} </div>
                                    <div id={index} className={`${style.chart } w-[40%] rounded-md ${edit == false ? "text-gray-500" : "text-black" }  bg-gray-100`}>{item.howMany} </div>
                                    <div id={index} className={`${style.chart } w-[40%] rounded-md ${edit == false ? "text-gray-500" : "text-black" }  bg-gray-100`}>{item.FNumber} </div>
                                    <div id={index} className={`${style.chart } w-[40%] rounded-md ${edit == false ? "text-gray-500" : "text-black" }  bg-gray-100`}>{item.collect} </div>
                                </div>
                            )
                        })
                        )
                    }
                </div>
                </div>
                <div className={`w-full `}>
                    <div className={`${style.row} items-center float-left text-[20px] mt-5`}>
                        <h1 className={` font-medium text-black`}>مجموع کل:</h1>
                        <p className={`text-btn mr-2`}>25,000</p>
                        <span className={`text-gray_fac mr-1`}>افغانی</span>
                    </div>
                </div> 
            </div>
            <div className={`float-left ${style.row} items-center mt-5 gap-x-2 ${edit == true ? "hidden" : "flex"}`}>
                <button className={`px-4 py-2 bg-gray-100 rounded-md`} onClick={rejectEdit}>لغو</button>
                <button className={`px-5 py-2 text-white rounded-md bg-btn`} onClick={renoveF}>تائید</button>            
            </div>
            <div className={` absolute top-0 left-0 right-0 bottom-0 ${style.row ,style.font} items-center justify-center w-full ${open == true ? "flex" : "hidden"} bg-[rgba(0,0,0,0.3)] h-[100%]`}>
                <div className={`w-[25%] bg-white rounded-xl`}>
                    <div className={`bg-error text-center rounded-t-xl ${style.row} items-center justify-center py-6 w-full`}>
                        <img src={Group} />
                    </div>
                    <div className={`${style.col} items-center justify-center gap-y-5 p-5`}>
                        <h1 className={`font-bold text-2xl`}>هشدار !</h1>
                        <p className={`w-full`}>آیا از حذف جنس مطمئن هستید؟!</p>
                        <div className={`${style.row} items-center justify-end w-full gap-x-4`}>
                            <button className={`px-4 py-2 bg-gray-100 rounded-md`} onClick={reject}>لغو</button>
                            <Link to="/sell">
                                <button className={`px-5 py-2 text-white rounded-md bg-error`} onClick={renoveF}>حذف کردن</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Facktor_buy