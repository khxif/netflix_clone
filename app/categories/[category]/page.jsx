import Card from '../../../components/Card'

export default async function page({params}) {

  const category = params.category
  //console.log(category);

  const res = await fetch(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const data = await res.json()
  const movies = data.results
  //console.log(movies);

  return (
    <div className="container px-2 md:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-8 gap-3 md:gap-6 items-center">
      {
        movies.map((movie) => {
          return (
          <div key={movie.title || movie.original_title}>
            <Card movie={movie} />
          </div>
          )
        })
      }
    </div>
  )
}
