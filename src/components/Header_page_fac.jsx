import React from "react";
import style from "../assets/styles/styles";
import { Remove, Print, Edit , Check , Cross , Group } from "../assets/img/index";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header_page_fac = () => {
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);

  const handlePrint = () => {
    window.print();
  };
  const removingAll = () => {
    setOpen(true);
  };

  const saveEdit = () => {
    setEdit(true);
  };
  const editF = () => {
    setEdit(false);
  };
  const reject = () => {
    setOpen(false);
  };  
  const renoveF = () => {
    localStorage.clear("items");
  };
  return (
    <>
      <div className={`${style.row} justify-between items-center w-full`}>
        <div className={`${style.row} items-center `}>
          <h1 className={`border-r-2 border-black pr-2 ${style.font}`}>
            نمایش فاکتور
          </h1>
        </div>
        <div
          className={`${style.row} items-center gap-x-2 ${
            edit == false ? "hidden" : "flex"
          }`}
        >
          <button
            className={`px-[12px] py-[11px] border border-gray-500 rounded-md `}
            onClick={handlePrint}
          >
            <img src={Print} />
          </button>
          <button
            className={`px-[12px] py-[11px] border border-green-500 rounded-md`}
            onClick={editF}
          >
            <img src={Edit} />
          </button>
          <button
            className={`px-[12px] py-[11px] border border-red-500 rounded-md`}
            onClick={removingAll}
          >
            <img src={Remove} />
          </button>
        </div>
        <div
          className={`${edit == true ? "hidden" : "flex"} ${
            style.row
          } items-center gap-x-3`}
        >
          <button
            onClick={saveEdit}
            className={`border rounded-md border-[#52C181] py-[11px] px-[12px]`}
          >
            <img src={Check} />
          </button>
          <button
            className={`border rounded-md border-red-500 py-[11px] px-[12px]`}
          >
            <img src={Cross} />
          </button>
        </div>
        <div
            className={` absolute top-0 left-0 right-0 h-[100vh] bottom-0 ${
              (style.row, style.font)
            } items-center justify-center w-full ${
              open == true ? "flex" : "hidden"
            } bg-[rgba(0,0,0,0.3)] h-[100%]`}
          >
            <div className={`w-[25%] bg-white rounded-xl`}>
              <div
                className={`bg-error text-center rounded-t-xl ${style.row} items-center justify-center py-6 w-full`}
              >
                <img src={Group} />
              </div>
              <div
                className={`${style.col} items-center justify-center gap-y-5 p-5`}
              >
                <h1 className={`font-bold text-2xl`}>هشدار !</h1>
                <p className={`w-full font-bold text-[#616161]`}>
                  آیا از حذف جنس مطمئن هستید؟!
                </p>
                <div
                  className={`${style.row} items-center justify-end w-full gap-x-4`}
                >
                  <button
                    className={`px-4 py-2 bg-gray-100 rounded-md`}
                    onClick={reject}
                  >
                    لغو
                  </button>
                  <Link to="/sell">
                    <button
                      className={`px-5 py-2 text-white rounded-md bg-error`}
                      onClick={renoveF}
                    >
                      حذف کردن
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </>
  );
};

export default Header_page_fac;
