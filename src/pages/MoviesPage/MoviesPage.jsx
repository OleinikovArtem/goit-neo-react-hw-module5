import { useState, useEffect, Suspense, lazy } from 'react'
import { useSearchParams } from 'react-router-dom'
import styles from './MoviesPage.module.css'

import MovieSearch from '../../components/MovieSearch/MovieSearch'
const MovieList = lazy(() => import('../../components/MovieList'))

import Api from '../../api'
import clsx from 'clsx'


function MoviesPage() {
  const [movies, setMovies] = useState([])
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query')

  const handleSubmit = (event) => {
    event.preventDefault()
    const searchValue = event.target[0].value
    setSearchParams({ query: searchValue })
    event.target.reset()
  }

  useEffect(() => {
    const getData = async () => {
      const data = await Api.searchMovies(query)
      console.log(data);
      
      setMovies(data.results || [])
    }

    getData()
  }, [query])

  return (
    <main className={clsx('container', styles.page)}>
      <MovieSearch handleSubmit={handleSubmit} />
      <Suspense fallback={<div>Loading...</div>} >
        <MovieList movies={movies} />
      </Suspense>
    </main>
  )
}

export default MoviesPage
