import { NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

function MovieList({ movies }) {
  const location = useLocation()
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`} state={location} >{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieList
