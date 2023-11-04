import React, { useEffect, useState } from 'react'
import { Youtube_videos_api } from '../utils/constants';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';





const VideoContainer = () => {
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_videos_api)
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items)
  }
  return (
    <div className=' flex flex-wrap'>
  {videos.map(video => (
    <Link className='w-1/5' to={"/watch?v=" + video.id}>
      <Videocard  key={video.id} info={video} />
    </Link>
  ))}
</div>
  )
}

export default VideoContainer
