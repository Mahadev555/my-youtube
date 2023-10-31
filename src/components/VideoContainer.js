import React, { useEffect } from 'react'
import { Youtube_videos_api } from '../utils/constants';
 
 

 

const VideoContainer = () => {
   useEffect(() =>{
    getVideos();
   },[]);

  const getVideos = async () =>{
    const data = await fetch(  Youtube_videos_api)
    const json = await data.json();
    console.log(json)
  }
  return (
    <div>
      <h1>Videocontainer</h1>
    </div>
  )
}

export default VideoContainer
