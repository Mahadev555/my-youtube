import React from 'react'

const Videocard = ({info}) => {

  // if info is not rendered then it will show error msg
    if (!info) {
        return <div>Loading or error message...</div>;
      }
    console.log(info)
     // extracting information from api call
    const {snippet, statistics} = info;
    const {channelTitle, title,thumbnails} = snippet;

  return (
    <div className='px-4 py-2 w-full'>
      <img className='rounded-lg' alt='Thumbnail' src={thumbnails.medium.url}/>
      <ul className='p-2'>
        <li className='text-yt-spec-text-primary font-roboto font-sans text-m leading-2.2 font-medium overflow-hidden block max-h-4.4 line-clamp-2 box-border box-orient-vertical truncate'>{title}</li>
        <li>{channelTitle}</li>
        <li>{
           (statistics.viewCount/1000000)<1 ? Math.ceil((statistics.viewCount/1000) * 10) / 10+' K' : Math.ceil((statistics.viewCount/1000000) * 10) / 10+' M'
        } views </li>
      </ul>
    </div>
  )
}

export default Videocard
