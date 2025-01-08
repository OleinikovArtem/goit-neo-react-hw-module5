import { useEffect, useState } from 'react'
import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import Api from '../../api'

import styles from './MovieDetailsPage.module.css'
import clsx from 'clsx'

function MovieDetailsPage() {
  const navigate = useNavigate()
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  const handleGoBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    if (!movieId) return

    const getData = async () => {
      const data = await Api.getMovieDetails(movieId)
      setMovie(data)
    }

    getData()
  }, [movieId])

  if (!movie) return <p>Loading...</p>

  const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const title = `${movie.title} ${new Date(movie.release_date).getFullYear()}`
  const genres = movie.genres.map(genre => genre.name).join(' ')

  return (
    <main className='container'>
      <button onClick={handleGoBack} className={styles.back}>Go back</button>
      <div className={clsx(styles.border, styles.movie)}>
        <div className={styles.img}><img className='img' src={poster} alt={movie.title} /></div>
        <div>
          <h1>{title}</h1>
          <p>User Score: {movie.vote_average * 10}%</p>

          <h2>Overview</h2>
          <p>{movie.overview}</p>

          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <div className={styles.border}>
        Additional information
        <ul>
          <li>
            <Link to="cast" state={movie.id} replace>Cast</Link>
          </li>
          <li>
            <Link to="reviews" state={movie.id} replace>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </main>
  )
}

export default MovieDetailsPage
