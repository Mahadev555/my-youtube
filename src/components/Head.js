import React from "react";
import { useDispatch } from "react-redux"; 
import { toggleMenu } from "../utils/appSlice";

const Head = () => {

    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        dispatch(toggleMenu())
    }

  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg ">
      <div className="flex col-span-1">
        <img
        onClick={()=>toggleMenuHandler()}
          className="h-8 m-1 cursor-pointer "
          alt="menu"
          src="https://tse4.mm.bing.net/th?id=OIP.9p-z5zqBkdA8t51iaBWo0wHaHa&pid=Api&P=0&h=180"
        />
        <a href="Google.com">
        <img
          className="h-12 ml-3 pb-2 cursor-pointer"
          alt="YT-Icon"
          src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0&h=180"
        />
        </a>
      </div>
      <div className="col-span-10 ">
        <input
          placeholder="Search" className=" px-4  w-1/2  h-8 ml-20   rounded-l-full border border-gray-400"
          type="text"
        />
        <button className="  rounded-r-full border border-gray-400 p-1   h-8 w-20">
          Search
        </button>
      </div>
      <div>
        <img
          className="h-9 pt-1 col-span-1"
          alt="user"
          src="https://www.logolynx.com/images/logolynx/s_4b/4beebce89d681837ba2f4105ce43afac.png"
        />
      </div>
    </div>
  );
};

export default Head;
