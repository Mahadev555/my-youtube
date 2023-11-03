import React from 'react'
import Button from './Button'
 

const btnList = ["All","Live","Cricket","Music","5G","Drama","Gaming","News","Politics","Cooking","Battel grounds Mobile India"]
const ButtonList = () => {
  return (
    <div className="   flex mx-2">
    {btnList?.map((btnName, index) => {
      return <Button key={index} name={btnName} />;
    })}
     
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="mt-3   hover:rounded-full hover:bg-gray-100   cursor-pointer  ml-1 w-5 h-5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </div>
  )
}

export default ButtonList


 
