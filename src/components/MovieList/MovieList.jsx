import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

function MovieList({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <NavLink to={`/movies/${movie.id}`}>{movie.title}</NavLink>
        </li>
      ))}
    </ul>
  )
}

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
}

export default MovieList
