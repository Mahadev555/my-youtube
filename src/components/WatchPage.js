import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';  
import { useLocation } from 'react-router-dom'; 

const WatchPage = () => {
// to get video id from the link present in browser after clicking on thumbnail
const location = useLocation();
const searchParams = new URLSearchParams(location.search);
const videoId = searchParams.get('v');

console.log(videoId); 

// to hide or dispatch sidebar after clicking on any video w-full col-span-12
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(closeMenu())
  })

  return (
    <div className='w-full col-span-12' >
      <iframe 
      className='rounded-xl mx-36 my-4'
      width="850" 
      height="505" 
      src={"https://www.youtube.com/embed/"+videoId+"?si=Dt2rDpJCSrEgQDBf&autoplay=1" }
      title="YouTube video player" 
       
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowFullscreen></iframe>
    </div>
  )
}

export default WatchPage
