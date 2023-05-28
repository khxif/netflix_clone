import RowPosters from '@/components/RowPosters'

export default function page() {
  return (
    <div className='container py-10 flex flex-col space-y-10 '>
        <RowPosters genre={'Action'} genreID={28} />
        <RowPosters genre={'Adventure'} genreID={12} />
        <RowPosters genre={'Animation'} genreID={16} />
        <RowPosters genre={'Crime'} genreID={80} />
        <RowPosters genre={'Documentary'} genreID={99} />
        <RowPosters genre={'Drama'} genreID={18} />
        <RowPosters genre={'Family'} genreID={10751} />
        <RowPosters genre={'Fantasy'} genreID={14} />
        <RowPosters genre={'History'} genreID={36} />
        <RowPosters genre={'Horror'} genreID={27} />
        <RowPosters genre={'Music'} genreID={10402} />
        <RowPosters genre={'Mystery'} genreID={9648} />
        <RowPosters genre={'Romance'} genreID={10749} />
    </div>
  )
}
