import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Api from '../../api'

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getTrendingMovies()
      console.log(data)
      setTrendingMovies(data.results)
    }
    getData()
  }, [])

  return (
    <main>
      <h1>Trending today</h1>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>
            <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default HomePage
