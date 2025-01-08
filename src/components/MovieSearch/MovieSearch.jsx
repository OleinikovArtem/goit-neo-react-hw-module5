import PropTypes from 'prop-types'

function MovieSearch({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Search</button>
    </form>
  )
}

MovieSearch.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
}

export default MovieSearch
