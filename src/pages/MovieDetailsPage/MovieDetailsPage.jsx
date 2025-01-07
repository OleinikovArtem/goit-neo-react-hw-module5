import { Link, Outlet } from 'react-router-dom'

function MovieDetailsPage() {
  return (
    <main>
      Movie Details Page
      <ul>
        <li>
          <Link to="cast" state='Cast_id'>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state='Reviews_id'>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  )
}

export default MovieDetailsPage
