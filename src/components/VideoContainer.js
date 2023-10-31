import React, { useEffect, useState } from 'react'
import { Youtube_videos_api } from '../utils/constants';
import Videocard from './Videocard';
 
 

 

const VideoContainer = () => {
const [videos,setVideos] = useState([]);


   useEffect(() =>{
    getVideos();
   },[]);

  const getVideos = async () =>{
    const data = await fetch(  Youtube_videos_api)
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  }
  return (
    <div>
      <Videocard info ={videos[0]}/>
    </div>
  )
}

export default VideoContainer
