import React from 'react'
import Button from './Button'


const btnList = ["All","Live","Cricket","Gaming","News","Politics","Cooking"]
const ButtonList = () => {
  return (
    <div className="   flex mx-2">
    {btnList?.map((btnName, index) => {
      return <Button key={index} name={btnName} />;
    })}
  </div>
  )
}

export default ButtonList
