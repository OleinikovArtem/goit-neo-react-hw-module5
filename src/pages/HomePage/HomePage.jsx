import { useEffect, useState } from 'react'
import MovieList from '../../components/MovieList'
import Api from '../../api'

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getTrendingMovies()
      setTrendingMovies(data.results || [])
    }
    getData()
  }, [])

  return (
    <main className='container'>
      <h1>Trending today</h1>
      <MovieList movies={trendingMovies} />
    </main>
  )
}

export default HomePage
