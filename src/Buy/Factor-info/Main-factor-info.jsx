import React, { useState } from 'react'
import axios from 'axios'
import List_2 from './List_2'
import SaveData from './SaveAreat'
import Date from '../buy-factor/Date'
import Reload from '../../assets/image/Reload.png'
import dataBase_2 from './data_2'
import image from '../../assets/image/image.png'
 const Factor_info = ()=>{
    const [buyAlard,setBuyAlard] = useState(false)
    const [factorNumber,setFactorNumber] = useState()
    const [customarName,setCoustomarName] = useState('')
    const [payable,setPayable] = useState('')
    const [finallPyment,setFinallPyment] = useState('25,000')
    const [tax,setTaax] = useState('')
    const [items_mount,setItemMount] = useState('')
    const [items_price,setItemPrice] = useState('')
    const [seller,serSeller] = useState()
    const [discount,setDiscount] = useState('')
    const [date,setDate] = useState('')
    // the post constant
    const [title,setTitle] = useState('')

// console.log(tax);
// console.log(finallPyment);


    // the posting to the api
   
    const [current_Date,setCurrent_Date] = useState("1402,2,3")
    const [buy,setBuy] = useState("buy")
    const [remaining,setRemaining] = useState(100)
    


    const EmployeeData = {
        invoice_num: factorNumber,
        contact: customarName,
        date: current_Date,
        buy: buy,
        remaining: remaining,
        total_amount: finallPyment,
        discount: Number(discount),
        taxes: tax,
        payable_amount: payable,
        title : 'nano',
        invoice_items: [
            {
                "title": title,
                "amount": Number(items_mount),
                "price": Number(items_price)
            }
        ]
        // title : ,
        // amount: ,
        // price: Number(items_price)
      };
    const handelBtn = async () => {
        setBuyAlard(true)
        // alert('KASJLjas')
        const token = " eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzIwNDY1MCwianRpIjoiNjljODYzMzItZjQ4ZS00ODQyLTlmN2UtYWI2MzFiNjI1MjZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzIwNDY1MCwiZXhwIjoxNjkzMjkxMDUwfQ.3jyYo44hIwGH_0iNwHNaNiJysHUmIr21qFcM8N0hp-k"
        
        const res = await axios({
            method:'post',
            url : 'http://127.0.0.1:9005/invoices',
            headers: { Authorization: `Bearer ${token}` },
            data : EmployeeData
        })
        if(res.status === 200){
        }else{
            alert('There was an Error')
            console.log(res)
        }
    };
    
    
    // const handelMyPersonal = ()=>{
   
    // }



    const handelRNumber = ()=>{
        const factorNum = Math.floor(100000 + Math.random() * 900000)
        setFactorNumber(factorNum)
    }
    return(
    <div className=" p-5 font-family-Estedad flex flex-col justify-center items-center m-5 shadow-md shadow-[rgb(235, 235, 235)">
      <div className="w-full">
            {/* title */}
            <div className="">
                <div className="flex flex-row justify-end item-center  w-full">
                     {/* <div className="w-1 </div> */}
                        <div className=" flex flex-row justify-center items-center  ">
                           <h1 className="font-Estedad font-semibold text-lg " >فاکتور خرید</h1>
                           <div className="ml-2 w-1 h-[100%] bg-black rounded-[10px]"></div>
                        </div>
                </div>
            </div>
            {/* the headers input part  */}
            <div className="flex flex-row justify-between items-center  mt-10  w-full mb-10 ">
                    <div className="flex flex-col ">
                        <div className=" flex-wrap flex flex-row justify-center items-center mr-3 w-full ">
                            <div className=" w-[351px] rounded-md py-2 px-[12px]  text-right border-solid border-[#DADADA] border-2 outline-none focus:border-[#00B4FF] focus:border-[2px] mr-5">
                                    <label htmlFor="" className='w-full text-center '><Date date = {date} serDate = {setDate}/></label>
                            </div>
                            <div className=" flex flex-row justify-start items-center w-[350px] h-[44px]">
                                  <button onClick={()=>handelRNumber()}><img src={Reload} alt="" className=" h-[44px] bg-[#E6F6FD] rounded-md mr-2 py-2 px-2 "/></button>
                                  <input value={factorNumber}  placeholder="شماره فاکتور" className="  w-[300px] h-[44px] rounded-md py-4 px-[12px]  text-right border-solid border-[#DADADA] border-2 outline-none focus:border-B-blue  focus:border-[2px] mr-5"/>
                            </div>
                            <div className=""><input value={customarName} onChange={(e)=>setCoustomarName(e.target.value)}  placeholder="نام فروشنده" className="w-[350px] h-[44px] rounded-md py-4 px-[12px] text-right border-solid border-[#DADADA] border-2 outline-none focus:border-B-blue  focus:border-[2px] mr-5"/></div>
                        </div>
                        <div className="flex flex-row justify-end items-start mr-[6px] mt-4">
                            <input type="text" placeholder="واحد پول" className="w-[350px] h-[44px] rounded-md py-4 px-[12px] text-right border-solid border-[#DADADA] border-2 outline-none focus:border-B-blue  focus:border-[2px]  mr-5"/>
                        </div>
                    </div>
                    <div className=" pr-100 "><h1 className="font-semibold text-2xl  ">مشخصات فاکتور</h1></div>
            </div>

            {/* the input lists */}
            <div className="h-full flex flex-row justify-start items-start  mt-14">
                <List_2
                  items_price = {items_price}
                  setItemPrice = {setItemPrice}
                  items_mount = {items_mount}
                  setItemMount = {setItemMount}
                  title = {title}
                  setTitle ={setTitle}
                  tax={tax}
                  discount={discount}
                  setPayable = {setPayable}
                  setFinallPyment={setFinallPyment}
                  /> 
                <div className=" w-[430px] h-[150px] text-right pr-10 "><h1 className="">اجناس</h1></div>
            </div>
              {/* // the last part if this page */}
            <div className="flex flex-col justify center items-stat mt-10 mb-4 ">
                    <div className="ml-5 mb-7">
                      <span className="font-Estedad font-semibold text-base">  مجموعه کل</span>  : <span className="text-B-blue">{finallPyment}</span> افغانی
                    </div>
            </div>
            {/* the subment part part of this code  */}
            <div className="flex flex-row justify-start items-center">
                <div className="flex flex-col justify-start items-satrt mx-4 ">
                    <p className="text-right mb-2"> : قابل پرداخت</p>
                    <div className=" flex flex-row justify-end pr-4 items-center w-[300px] h-[40px] rounded-md border-solid border-[#DADADA] border-[2px] outline-none text-right"><input value={payable} onChange={(e)=>setPayable(e.target.value)} type="text" placeholder='23,000' className='text-right outline-none w-full ' /></div>
                </div>
                <div className="flex flex-col justify-start items-satrt mx-4 ">
                    <p className="text-right mb-2"> : مالیات</p>
                    <div  className="flex flex-row justify-end  items-center pr-4 w-[300px] h-[40px] rounded-md border-solid border-[#DADADA] border-[2px] outline-none focus:border-B-blue  focus:border-[2px]  text-right"><input value={tax} onChange={(e)=>setTaax(Number(e.target.value))} type="text" placeholder='23,000'  className='text-right outline-none w-full ' /></div>
                </div>
                <div className="flex flex-col justify-start items-satrt mx-4 ">
                    <p className="text-right mb-2">: مبلغ تخفیف</p>
                    <div  className="flex flex-row justify-end  items-center pr-4 w-[300px] h-[40px] rounded-md border-solid border-[#DADADA] border-[2px] outline-none focus:border-B-blue  focus:border-[2px]  text-right"><input value={discount} onChange={(e)=>setDiscount(e.target.value)} type="text" placeholder='23,000'  className='text-right outline-none w-full ' /></div>
                </div>
            </div>
            {/* the final buttons */}
            <div className="flex flex-row justify-start items-center  mt-5 pl-3  ">
                <button onClick={()=>handelBtn()} className="py-[10px] px-[18px] rounded-md bg-B-blue  mr-2 text-white ">ثبت کردن</button>
                    {
                        buyAlard &&
                         <SaveData
                            customarName={customarName}
                            payable= {payable}
                            state={buyAlard}
                             setstate ={setBuyAlard}
                         />
                    }
                <button  className="py-[8px] px-[18px] rounded-md border-[#999999] border-solid border-[1px] mr-2 text-[#808080]">پرداخت ثبت کردن</button>
                <button className="py-[10px] px-[18px] bg-[#F5F5F5] rounded-md text-[#808080] ">لغو</button>
            </div>
        </div>
    </div>
     )
 } 
 export default Factor_info