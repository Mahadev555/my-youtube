import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice'; 
import { useParams } from 'react-router-dom';

const WatchPage = () => {
// to get video id 
 const searchParams = useParams()
 const search = searchParams
 console.log(search)


// to hide or dispatch sidebar after clicking on any video
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu())
  })

  return (
    <div className='w-full col-span-12'>
      <iframe 
      className='rounded-xl mx-4 my-4'
      width="900" 
      height="505" 
      src={"https://www.youtube.com/embed/"+search+"?si=Dt2rDpJCSrEgQDBf&autoplay=1" }
      title="YouTube video player" 
       
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullscreen></iframe>
    </div>
  )
}

export default WatchPage
