import { useState, useEffect, Suspense, lazy } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './MoviesPage.module.css'

import MovieSearch from '../../components/MovieSearch/MovieSearch'
const MovieList = lazy(() => import('../../components/MovieList'))

import Api from '../../api'
import clsx from 'clsx'


function MoviesPage() {
  const [movies, setMovies] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target[0].value
    if (searchValue) {
      setSearchParams({ query: searchValue })
    }
    event.target.reset()
  }

  useEffect(() => {
    if (!query) return

    const getData = async () => {
      setIsLoading(true)
      try {
        const data = await Api.searchMovies(query)
        setMovies(data.results || [])
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [query])

  return (
    <main className={clsx('container', styles.page)}>
      <MovieSearch handleSubmit={handleSubmit} />
      { error && <div>Ooops. Something want wrong</div> }
      { isLoading && <div>Loading...</div> }
      <Suspense fallback={<div>Loading...</div>} >
        <MovieList movies={movies} />
      </Suspense>
    </main>
  )
}

export default MoviesPage
