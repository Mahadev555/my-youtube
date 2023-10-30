import React from 'react'
import Button from './Button'


const btnList = ["All","Live","Cricket","Gaming","News","Politics","Cooking"]
const ButtonList = () => {
  return (
    <div className="max-w-[86%] overflow-x-hidden flex mx-12">
    {btnList?.map((btnName, index) => {
      return <Button key={index} name={btnName} />;
    })}
  </div>
  )
}

export default ButtonList
