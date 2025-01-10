import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Api from '../../api'

function MovieReviews() {
  const { movieId } = useParams()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getMovieReviews(movieId)
      setReviews(data.results)
    }

    getData()
  }, [movieId])

  if (reviews.length === 0) return <p>We don&apos;t have any reviews for this moment</p>

  return <ul>
    {reviews.map(review => (
      <li key={review.id}>
        <h3>Author: {review.author}</h3>
        <p>{review.content}</p>
      </li>
    ))}
  </ul>
}

export default MovieReviews
