import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='bg-gray-200 rounded-lg h-8 px-5   m-2 font-roboto font-sans text-base leading-7 font-medium'>{name}</button>
    </div>
  )
}

export default Button

