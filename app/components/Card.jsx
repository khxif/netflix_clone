import Image from 'next/image'
import { AiOutlineLike } from 'react-icons/ai'
import React from 'react'
import Link from 'next/link';

export default function Card({movie}) {
  //console.log(movie);
  return (
    <div className='space-y-2 border border-red-900 py-4 px-2  md:p-4 rounded-lg hover:shadow-md
     hover:shadow-red-600 duration-200 hover:scale-105 transition-all'>
      <Link href={`/movie/${movie.id}`}>
        <Image  src={`https://image.tmdb.org/t/p/w300${ movie.backdrop_path }`}
         width={300}
        height={200}
        quality={100}
        placeholder='blur'
        blurDataURL='/Rolling.svg'
        alt={ movie.title || movie.original_title }
        className='rounded-t-lg '
        />
        <h1 className='text-lg font-bold line-clamp-1'>{ movie.title || movie.original_title }</h1>
        <p className='line-clamp-2'>{ movie.overview }</p>
        <span className='flex items-center justify-between'>
          <p>{ movie.first_air_date || movie.release_date }</p>
          <p className='flex items-center font-bold gap-1'>
          <AiOutlineLike className='text-xl' />
          { movie.vote_count }
          </p>
        </span>
        </Link>
    </div>
  )
}
