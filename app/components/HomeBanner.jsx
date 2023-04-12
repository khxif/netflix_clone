import Image from "next/image";
import Link from "next/link";
import { AiOutlineInfoCircle } from 'react-icons/ai'

export default async function HomeBanner() {

    const res = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.API_KEY}`)
    const data = await res.json();
    const movies = data.results
    const randomIndex = Math.floor(Math.random()*movies.length)
    const movie = movies[randomIndex]
    //console.log(movie);

  return (
    <div className="relative h-max">
      <Image 
      src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
      width={1000}
      height={100}
      quality={100}
      className="w-full h-auto object-contain absolute"
      alt={movie.title} 
      />
      <div className="absolute container py-10 sm:py-24 space-y-3 ml-4 md:ml-0 w-full">
      <h1 className="  text-white text-2xl sm:text-3xl md:text-5xl font-bold">{ movie?.title || movie?.name || movie?.original_name }</h1>
      <p className=" text-white w-2/3 md:w-5/12 text-md font-normal line-clamp-3 md:line-clamp-none">{movie.overview}</p>
      <p className="font-medium">Released on { movie.first_air_date || movie.release_date }</p>
      <div className="">
      <Link href={`/movie/${movie.id}`}>
      <button className="text-red-600 font-bold bg-white flex items-center rounded-2xl py-2 px-4 hover:shadow-red-600
      hover:shadow-md  hover:brightness-110 transition-all duration-150 mt-2">
        <AiOutlineInfoCircle className="text-3xl" />
        <p>More info</p>
      </button>
      </Link>
      </div> 
      </div>
    </div>
  )
}
