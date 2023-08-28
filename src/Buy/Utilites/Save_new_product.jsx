import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'
import dataBase from '../../data/data'
const Save_new_product = ({ displayState ,setDisplayState })=>{
    const [alltodo,setAllTodo] =useState([]) 
    const [key,setKey] = useState('')
    const [mount,setMount] = useState('')
    const [title,setTitle] = useState('')
    const [desc,setDesc] = useState('')
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    
    // start posting the data


    const EmployeeData = {
        title: title,
        key: key,
        value: mount
      };
    const HandlPost = async () => {
        alert('KASJLjas')
        const token = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5MzIwNDY1MCwianRpIjoiNjljODYzMzItZjQ4ZS00ODQyLTlmN2UtYWI2MzFiNjI1MjZhIiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImtoYWxpZCIsIm5iZiI6MTY5MzIwNDY1MCwiZXhwIjoxNjkzMjkxMDUwfQ.3jyYo44hIwGH_0iNwHNaNiJysHUmIr21qFcM8N0hp-k'
        
        const res = await axios({
            method:'post',
            url : 'http://127.0.0.1:9005/utilities',
            headers: { Authorization: `Bearer ${token}` },
            data : EmployeeData
        })
        if(res.status === 200){
           alert('done')
            console.log(res)
            console.log(EmployeeData);
        }else{
            alert('There was an Error')
            console.log(res)
        }

    };




    
    const handelsaveNewItem = ()=>{
        let newTodoItem = {
            Key : key,
            amount : mount,
            text : title,
            acssepted : desc   
        }
        
        let ubdataTodo = [...alltodo]
        ubdataTodo.push(newTodoItem)
        setAllTodo(ubdataTodo)
        dataBase.push(...ubdataTodo)
        localStorage.setItem('todolistItem',JSON.stringify(ubdataTodo))
        setDisplayState(false)
        HandlPost()
    }
    // taking the data from localstroge
    const handleInputChange = (event) => {
        let newValue = event.target.value;
        setKey(newValue)
        // Check if the new value contains any capital litters
        if (/[A-Z]/.test(newValue)) {
          setError('از حروف کوچگ انگلیسی استفاده کنید');
        } else {
          setError('');
          setInputValue(newValue);
        }

        
    };
    useEffect(()=>{
        let savedTodo = JSON.parse(localStorage.getItem('todolistItem'))
    },[])
    return(
        <div className="w-full h-full absolute top-0 left-0 z-index-10 bg-[rgba(0,0,0,0.3)] ">
            <div className="w-[668px] py-5 bg-[#FFFFFF]  absolute z-index-4 top-[25%] left-[25%]   p-[30px]  flex flex-col justify-start items-center rounded-md">
                {/* title */}
                <div className="flex flex-row justify-between item-center  w-full mb-5">
                    <button onClick={()=>setDisplayState(false)} className="mb-1 text-[30px]">&times;</button>
                   <div className=" flex flex-row justify-center items-center  ">
                       <h1 className="font-Estedad font-semibold text-lg" >مورد جدید</h1>
                       <div className="ml-2 w-1 h-[70%] bg-black rounded-[10px]"></div>
                   </div>
                </div>
                {/* the account part */}
                <div className=" w-full flex flex-col justify-center items-center">
                    <div className="flex flex-row justify-around items-start mb-2">
                        <input type="text" value={mount} onChange={(e)=>setMount(e.target.value)}  placeholder="مقدار" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 "/>
                        <div>
                             <input 
                                placeholder='کلید'
                                type="text"
                                value={inputValue}
                                onChange={handleInputChange}
                                className='w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 '/>
                                {error && <p style={{ color: 'red' }} className=" text-right pr-4 mt-2" >{error}</p>}
                        </div>
                    </div>
                    <div className="flex flex-row justify-around items-start">
                        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} cols='100' className="w-[290px]  py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 ">ملاحضات</textarea>
                        {/* <textarea name="" id="" cols="10" rows="10"></textarea> */}
                        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text"  placeholder="عنوان" className="w-[290px] h-[40px] py-[8px] px-[4px] pr-[10px] text-right border-solid border-[1px] border-[#DADADA] rounded-md outline-none mx-2 "/>
                    </div>
                </div>
              
                {/* main subment buttons */}
                <div className="w-full px-2 mt-5 flex flex-row justify-start items-start">
                    <button onClick={()=>handelsaveNewItem()}  className="py-[10px] px-[20px] rounded-md bg-B-blue mr-5 text-[#fff] font-semibold">ثبت کردن</button>
                    <button onClick={()=>setDisplayState(false)} className="py-[10px] px-[18px] bg-[#F5F5F5] rounded-md text-[#808080] ">لغو</button>
                </div>
            </div>
        </div>
    )
}
export default Save_new_product