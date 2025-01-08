import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './MovieCast.module.css'
import Api from '../../api'

function MovieCast() {
  const location = useLocation()
  const [cast, setCast] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getMovieCredits(location.state)
      setCast(data.cast)
    }

    getData()
  }, [location.state])

  return (
    <ul className={styles.cast}>
      {cast.map(actor => (
        <li key={actor.id}>
          <img src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`} alt={actor.name} />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  )
}

export default MovieCast
