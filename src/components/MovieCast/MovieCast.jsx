import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './MovieCast.module.css'
import Api from '../../api'

function MovieCast() {
  const { movieId } = useParams()
  const [cast, setCast] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getMovieCredits(movieId)
      setCast(data.cast)
    }

    getData()
  }, [movieId])

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
