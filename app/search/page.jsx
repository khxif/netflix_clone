import Card from '@/components/Card'

export default async function page({searchParams}) {

    const searchedMovie = searchParams.query
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchedMovie}`,{
      cache:"no-store"
    })
    const data = await res.json()
    //console.log(data);
    //console.log(data.total_results);
    const movies = data.results

  return (
    <div className=''>

      {movies && data.total_results === 0 && (
      <div className="flex justify-center items-center text-center min-h-[75vh]">
        <h1 className=''>No movies found!</h1>
      </div>
      )}

        {
          movies && data.total_results > 0 && (
            <div className='container px-2 md:px-0 py-2 mb-6 flex flex-col space-y-6'>
              <h1 className='font-bold text-lg md:text-2xl'>
                Showing movies : 
                <span className='text-red-600'>
                  {' '}{searchedMovie}  
                </span>  
              </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6 items-center">
            {
              movies.map((movie) => {
                return <Card key={movie.id} movie={movie} />
              })
            }
            </div>
            </div>
          )
          
        }

    </div>
  )
}
