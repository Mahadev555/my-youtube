import React from 'react'
import { useSelector } from 'react-redux'
import store from '../utils/store'

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
// early return pattern 

    if(!isMenuOpen) return null;
    return (
        <div className='p-5 shadow-lg  col-span-0'>
            
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <h1 className='font-bold py-5 pb-2'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className='font-bold py-5 pb-2'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    ) 
}

export default SideBar
