import React, { useEffect, useState } from "react";
import style from "../assets/styles/styles";
import { BsChevronLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  Remove,
  Edit,
  Print,
  addcircle,
  Group,
  Check,
  Cross,
} from "../assets/img";
import Text from "../components/Text";
import axios from "axios";
const Facktor_buy = () => {
  const [data, setData] = useState(Text);
  const [edit, setEdit] = useState(true);
  const [open, setOpen] = useState(false);
  const [arr, setArr] = React.useState(data);
  const [apiData , setApiData] = useState()

  const jwt =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY5Mjc5Mzk5MywianRpIjoiYzIwYzE1NGItNGZiOC00YTRlLWExYmEtZTkzM2UyYWQ0N2I5IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6ImhhbWVkLmF6aXppLnhlYXJAZ21pbC5jb20iLCJuYmYiOjE2OTI3OTM5OTMsImV4cCI6MTY5Mjg4MDM5M30.g6rLDq4HjMFQNlBUgpm-LiMd0h-R0ow9SGzycASmXHs";

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://127.0.0.1:9005/invoices`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        if (response.status === 200) {
          console.log("Data fetched successfully:", response.data);
        } else {
          console.log("Received status:", response.status);
          setApiData(response.data)
          console.log(apiData)
        }
      } catch (error) {
        console.log("Error message:", error.message);
        console.error("Error details:", error);
      }
    }

    fetchData();
  }, []);

  const handelChange = (value, id, input) => {
    if (input === "fName") {
      let copyarr = arr.map((item) =>
        item.id == id ? { ...item, fName: value } : item
      );
      setArr(copyarr);
    } else if (input === "FNumber") {
      let copyarr = arr.map((item) =>
        item.id == id ? { ...item, FNumber: value } : item
      );
      setArr(copyarr);
    } else if (input === "howMany") {
      let copyarr = arr.map((item) =>
        item.id == id ? { ...item, howMany: value } : item
      );
      setArr(copyarr);
    }
  };

  const handlePrint = () => {
    window.print();
  };
  const handleRemove = (itemId) => {
    const updatedItems = arr.filter((item) => item.id !== itemId);
    setArr(updatedItems);
  };
  const removingAll = () => {
    setOpen(true);
  };
  const reject = () => {
    setOpen(false);
  };
  const renoveF = () => {
    localStorage.clear("items");
  };
  const saveEdit = () => {
    setData(arr);
    setEdit(true);
  };
  const editF = () => {
    setEdit(false);
  };
  const rejectEdit = () => {
    setArr(data);
    setEdit(true);
  };
  return (
    <>
      <div
        className={`${style.col} items-center justify-center w-full ${style.font} mt-5`}
      >
        <div className={`shadow-xl p-5 w-[98%] rounded-lg h-auto`}>
          <div className={`${style.row}`}>
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
                  onClick={rejectEdit}
                  className={`border rounded-md border-red-500 py-[11px] px-[12px]`}
                >
                  <img src={Cross} />
                </button>
              </div>
            </div>
            <Link
              to="/sell"
              className={`${style.row} items-center justify-between ${
                edit == false ? "hidden" : "flex"
              }`}
            >
              <button
                className={`${style.row} bg-gray_button mr-5 px-5 py-4 rounded-md text-page items-center`}
              >
                بازگشت <BsChevronLeft className={`text-page mr-1 text-bold`} />
              </button>
            </Link>
          </div>
          <div className={`${style.col}`}>
            <div
              className={`${style.row} items-center justify-start gap-x-10 mt-5`}
            >
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
            <div className={`${style.col} items-start mt-5 w-full `}>
              <div
                className={`${style.row} items-center justify-center gap-x-5 gap-y-5 h w-full h-full py-2`}
              >
                <div
                  className={`${
                    (style.chart, style.row)
                  } cursor-auto w-[81px] h-[46px] py-2 rounded-md bg-gray-100 ${
                    edit == true ? "hidden" : "flex"
                  }`}
                ></div>
                <div className={`${style.chartHeader} w-[8%] rounded-md`}>
                  NO
                </div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>
                  نام جنس
                </div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>
                  تعداد
                </div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>
                  قیمت فی
                </div>
                <div className={`${style.chartHeader} w-[40%] rounded-md`}>
                  مجموع
                </div>
              </div>
              <div
                className={`${style.col} items-center justify-center p-0 w-full`}
              >
                {arr.map((item, index) => {
                  return (
                    <div
                      className={`w-full gap-x-5 py-3 h-auto ${style.row} items-center`}
                    >
                      <button
                        className={`${
                          (style.chart, style.row)
                        } cursor: text px-2 py-2 rounded-md bg-gray-100 ${
                          edit == true ? "hidden" : "flex"
                        }`}
                        onClick={() => handleRemove(item.id)}
                      >
                        <img
                          className={`${style.row} w-[50px] items-center justify-center`}
                          src={addcircle}
                          alt="remove"
                        />
                      </button>
                      <div
                        id={index}
                        className={`${style.chart} w-[8%] rounded-md  bg-gray-100`}
                      >
                        {index + 1}{" "}
                      </div>
                      <input
                        className={`${style.chart} w-[40%] rounded-md   bg-gray-100`}
                        onChange={(e) => {
                          handelChange(e.target.value, item.id, "fName");
                        }}
                        id={item.id}
                        value={item.fName}
                        disabled={edit}
                      />
                      <input
                        onChange={(e) => {
                          handelChange(e.target.value, item.id, "howMany");
                        }}
                        className={`${style.chart} w-[40%] rounded-md ${
                          edit == false ? "text-gray-500" : "text-black"
                        }  bg-gray-100`}
                        id={item.id}
                        value={item.howMany}
                        disabled={edit}
                        type="number"
                      />
                      <input
                        onChange={(e) => {
                          handelChange(e.target.value, item.id, "FNumber");
                        }}
                        className={`${style.chart} w-[40%] rounded-md ${
                          edit == false ? "text-gray-500" : "text-black"
                        }  bg-gray-100`}
                        id={item.id}
                        value={item.FNumber}
                        disabled={edit}
                        type="number"
                      />

                      <span
                        className={`${style.chart} w-[40%] rounded-md  bg-gray-100`}
                      >
                        {item.howMany * item.FNumber}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className={`w-full ${edit == false ? "hidden" : ""} `}>
              <div
                className={`${style.row} items-center float-left text-[20px] mt-5`}
              >
                <h1 className={` font-medium text-black`}>مجموع کل:</h1>
                <p className={`text-btn mr-2`}>25,000</p>
                <span className={`text-gray_fac mr-1`}>افغانی</span>
              </div>
            </div>
              {apiData == null ? " " : (
                <p>{apiData.result[0]}</p>
              )}
          </div>
          <div
            className={` absolute top-0 left-0 right-0 bottom-0 ${
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
      </div>
    </>
  );
};

export default Facktor_buy;
