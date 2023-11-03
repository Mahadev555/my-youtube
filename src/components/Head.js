import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

import mic_icon from '../data/microphone.png';
import user_img from '../data/user.png';

const Head = () => {

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="grid grid-flow-col p-1 m-1 shadow-lg  ">
      <div className="flex ">
        <img
          onClick={() => toggleMenuHandler()}
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
      <div className="relative ">
        <div className='flex flex-row relative'>
          <input className='border rounded-l-full w-[572px] h-10 pl-5 outline-none' type='text' placeholder='Search' />
          <button className='border rounded-r-full w-16 h-10 bg-gray-100'><img alt='search-icon' className='h-5 mx-auto' src='https://cdn-icons-png.flaticon.com/512/482/482631.png' /></button>
          <div className='w-10 h-10 hover:rounded-full hover:bg-gray-100 ml-5 cursor-pointer'>
            <img className='mt-2 ml-2  w-6' alt='mick-icon ' src={mic_icon} />
          </div>

        </div>



      </div>
      <div className="flex  pl-16 justify-end ">
        <div className=" text-current mr-1  hover:rounded-full hover:bg-gray-100 cursor-pointer mt-0.5 h-10  py-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            className="pointer-events-none block w-full h-full"
          >
            <path
              d="M10 20h4c0 1.1-.9 2-2 2s-2-.9-2-2zm10-2.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87zm-1 .42-2-1.88v-5.47c0-2.47-1.19-4.36-3.13-5.1-1.26-.53-2.64-.5-3.84.03C8.15 6.11 7 7.99 7 10.42v-5.47l-2 1.88V18h14v-.23z"
            />
          </svg>
        </div>


        <div className="mr-4  hover:rounded-full hover:bg-gray-100 cursor-pointer">
          <img
            className="h-9 mx-4 w-8 py-1 mt-1"
            alt="user"
            src={ user_img}
          />
        </div>

      </div>
    </div>
  );
};

export default Head;
