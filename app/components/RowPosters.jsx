import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default async function RowPosters({genre,genreID}) {

    const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&with_genres=${genreID}`,{ next:{revalidate:300} })
    const data = await res.json()
    const movies = data.results
    //console.log(movies);

  return (
    <div className='flex flex-col gap-4 px-4 sm:px-0 '>
        <h1 className='text-2xl font-bold'>{genre}</h1>
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {
            movies.map(movie => {
               return( 
                <Image  
                src={`https://image.tmdb.org/t/p/w300${ movie.backdrop_path }`}
                alt={movie.title}
                placeholder='blur'
                blurDataURL='/Rolling.svg'
                width={250}
                height={250}
                />
               )
            })
        }
        </div>
    </div>
  )
}
