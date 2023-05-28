import Trailer from '@/components/Trailer'

export default async function page({params}) {

    const movieId = params.movieID
    //console.log(movieId);

    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${process.env.API_KEY}&language=en-US`,{cache:'no-store'})
    const data = await res.json()
    const movie = data.results
    const movieKey = data.results[0].key

    const getRes = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}&language=en-US`,{cache:'no-store'})
    const getData = await getRes.json()
    const movieData = getData
    //console.log(movieData);

  return (

    <div className='py-8 flex flex-col sm:flex-row px-4 md:px-0'>
      <Trailer id={movieKey} />
      <div className="flex flex-col container py-10 ">
        <h1 className='text-3xl font-bold text-red-700 '>{movieData.original_title}</h1>
        <p className='opacity-70 my-3'>{movieData.overview}</p>
        <span className='flex gap-1'>
          <p className='font-bold'>{ movieData?.status === 'Released'?'Released on : ' : 'Releases on : '}</p>
          {movieData.release_date}
        </span>
        <span className='flex gap-1'> 
          <p className='font-bold'>Rating :</p> {movieData.vote_average}
        </span>
      </div>
    </div>

  )
}
