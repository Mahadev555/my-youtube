import React from 'react'

const Videocard = ({info}) => {

    if (!info) {
        return <div>Loading or error message...</div>;
      }
    console.log(info)
// extracting information from api call
    const {snippet, statistics} = info;
    const {channelTitle, title,thumbnails} = snippet;

  return (
    <div className='p-2 m-2 w-72'>
      <img className='rounded-lg' alt='Thumbnail' src={thumbnails.medium.url}/>
      <ul className='p-2'>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views </li>
      </ul>
    </div>
  )
}

export default Videocard
