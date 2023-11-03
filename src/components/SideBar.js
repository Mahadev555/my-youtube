import React from 'react'
import { useSelector } from 'react-redux'


const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    // early return pattern 

    if (!isMenuOpen) return null;
    return (
        <div className='p-5 pr-10  shadow-lg col-span-1 '>

            <ul className='border-b border-gray-300'>
                <li class="flex items-center py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
                    </svg>
                    Home
                </li>

                <li class="flex items-center space-x-2 py-2">
                    <div class="w-5 h-5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="fill-current text-current">
                            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.50 1.20.50L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.20-3.72-1.14-.71-1.34-.20-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.70-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.20 3.72 1.14.71 1.34.20-3.01-1.14 3.72L15.5 9.26v-1.21l1.8.74c.99.41 1.65 1.35 1.70 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                        </svg>
                    </div>
                    <span class="text-current">Shorts</span>
                </li>

                <li className="flex  items-center space-x-2 text-current mb-3 py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        className="w-6 h-6 fill-current"
                    >
                        <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
                    </svg>
                    <span>Subscriptions</span>
                </li>

            </ul>

            <h1 className='font-bold py-4 pb-1'>You </h1>
            <ul className='border-b border-gray-300'>
                <li className="flex items-center py-2">
                    <div className="w-6 h-6 mr-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="fill-current"
                        >
                            <path d="M3,3v18h18V3H3z M4.99,20c0.39-2.62,2.38-5.1,7.01-5.1s6.62,2.48,7.01,5.1H4.99z M9,10c0-1.65,1.35-3,3-3s3,1.35,3,3 c0,1.65-1.35,3-3,3S9,11.65,9,10z M12.72,13.93C14.58,13.59,16,11.96,16,10c0-2.21-1.79-4-4-4c-2.21,0-4,1.79-4,4 c0,1.96,1.42,3.59,3.28,3.93c-4.42,0.25-6.84,2.8-7.28,6V4h16v15.93C19.56,16.73,17.14,14.18,12.72,13.93z"></path>
                        </svg>
                    </div>
                    Your Channel
                </li>
                <li className="flex items-center py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 fill-current mr-2"
                        viewBox="0 0 24 24"
                    >
                        <g>
                            <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7z" />
                            <path d="M22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z" />
                        </g>
                    </svg>
                    History
                </li>
                <li className="flex items-center space-x-2 py-2">
                    <div className="w-6 h-6 fill-current text-current">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            focusable="false"
                        >
                            <path d="M22 7H2v1h20V7zm-9 5H2v-1h11v1zm0 4H2v-1h11v1zm2 3v-8l7 4-7 4z"></path>
                        </svg>
                    </div>
                    <span>Your Videos</span>
                </li>

                <li className="flex mb-3 items-center py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        focusable="false"
                        className="w-6 h-6 fill-current"
                    >
                        <path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM12 3c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9m0-1c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"></path>
                    </svg>
                    <span className="ml-2 ">Watch Later</span>
                </li>
            </ul>

            <h1 className='font-bold py-4 pb-2'>Subscriptions</h1>
            <ul >
                <li className="flex items-center py-2 space-x-2">
                    <img
                        id="img"
                        draggable="false"
                        className="style-scope rounded-2xl"
                        height="24"
                        width="24"
                        alt=""
                        src="https://yt3.ggpht.com/w5pMaiSz8csvQy1-SYVtm-Ar3MomdF1As1t9MvGJ1Z_3icbu6_36Qgpe9AcoGdoWVUN-NRBJ4w=s88-c-k-c0x00ffffff-no-rj"
                    />
                    <span>Adda247</span>
                </li>


                <li className="flex items-center py-2">
                    <img
                        id="img"
                        draggable="false"
                        className="style-scope rounded-2xl yt-img-shadow h-6 w-6"
                        src="https://yt3.ggpht.com/nhDLqeIgXMJBDIrX2bXavvHoWX0tsslDEh7k2xZ1P0W8b_CMRVigp2kxJubYEVwBcBlogZDe=s88-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                    <span className="ml-2">Apna College</span>
                </li>

                <li className="flex items-center py-2">
                    <img
                        id="img"
                        draggable="false"
                        className="style-scope rounded-2xl yt-img-shadow h-6 w-6 mr-2"
                        src="https://yt3.ggpht.com/ytc/APkrFKZGyiFJtoR2Isio_S591bOWpCKBFaIzqSuAG56ubA=s88-c-k-c0x00ffffff-no-rj"
                        alt=""
                    />
                    <span>CodeWithHarry</span>
                </li>

                <li className="flex items-center py-2">
                    <img
                        id="img"
                        className="style-scope rounded-2xl yt-img-shadow"
                        draggable="false"
                        height="24"
                        width="24"
                        alt=""
                        src="https://yt3.ggpht.com/ytc/APkrFKZLzJDcXbpiTWfamG_I_nMzMVRQOTLm8wNTuInfUg=s88-c-k-c0x00ffffff-no-rj"
                    />
                    <span className="ml-2">RON GAMING</span>
                </li>
                <li className="flex items-center py-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                        className="pointer-events-none  block w-6 h-6 mr-2 text-current"
                    >
                        <path d="m18 9.28-6.35 6.35-6.37-6.35.72-.71 5.64 5.65 5.65-5.65z"></path>
                    </svg>
                    Show more
                </li>


            </ul>
        </div>
    )
}

export default SideBar
