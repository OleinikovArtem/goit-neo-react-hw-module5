import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Api from '../../api'

function MovieReviews() {
  const location = useLocation()
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getData = async () => {
      const data = await Api.getMovieReviews(location.state)
      setReviews(data.results)
    }

    getData()
  }, [location.state])

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
