import React, { useRef, useEffect } from 'react'
import { Books } from '../constants/data'
import { FaPlay } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TbPlayerTrackNext } from "react-icons/tb";


function BooksBar({ count }) {


    const limit = count;

    const handleNowPlaying = (id) => {
        localStorage.setItem("nowPlaying", id)
    }

    return (

        <>
            {Books.slice(0, limit).map((book) => (

                <div key={book.id} className=' group flex flex-col flex-1 min-h-[100%] rounded-xl transition duration-100 hover:bg-stone-200 hover:bg-opacity-65 dark:hover:bg-dark-hover max-md:hover:bg-inherit dark:max-md:hover:bg-inherit p-2'>
                    <div className='group relative h-fit w-[100%] aspect-square rounded-md  overflow-clip mb-2 select-none'>
                        <Link to={`/book/${book.id}`}>
                            <img className="w-full h-full object-cover " src={book.URL} title={`${book.title}`} />
                        </Link>
                        <Link to={`/player/${book.id}`} id={book.id} onClick={() => handleNowPlaying(book.id)} className=' transition absolute bottom-2 right-2 aspect-square size-14  flex items-center justify-center pl-[2px]  bg-main-color rounded-full duration-100 translate-y-3 opacity-0 -z-10 group-hover:z-10 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-105 shadow-lg active:scale-90' title={`Play: ${book.title}`}>
                            <FaPlay className='text-white text-xl ' />
                        </Link>

                    </div>
                    <Link to={`/book/${book.id}`} className=' break-words  whitespace-normal leading-5 my-1 text-sm font-normal text-black dark:text-white max-w-[180px] w-fit hover:underline  '>{book.title}</Link>
                    <Link to={`/author/${book.author}`} className=' text-sm font-medium  text-stone-600 dark:text-stone-500 hover:underline'>{book.author}</Link>
                </div>
            ))}
        </>
    )
}

export default BooksBar