import axios from 'axios'

const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjcxYWMzZjA4OTZlODE1ZjBhZjg0ZjVmMDZlNzYyMCIsIm5iZiI6MTU5MTcwODE0MC42MjMwMDAxLCJzdWIiOiI1ZWRmODllYzljMjRmYzAwMjE2YTk1OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OYnKk8TAqHNUguOXyO7cIt8AHyq9p8UzRDN6x8AKk-E'
const BASE_URL = 'https://api.themoviedb.org/3/'

class Api {
  static getTrendingMovies() {
    return this.get(`trending/movie/day?language=en-US`)
  }

  static searchMovies(query, page = 1) {
    return this.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`)
  }

  static getMovieDetails(movie_id) {
    return this.get(`/movie/${movie_id}?language=en-US`)
  }

  static getMovieCredits(movie_id) {
    return this.get(`/movie/${movie_id}/credits`)
  }

  static getMovieReviews(movie_id) {
    return this.get(`/movie/${movie_id}/reviews`)
  }

  static async get(url) {
    try {
      const response = await axios.request({
        url: `${BASE_URL}${url}`,
        headers: { 
          Authorization: `Bearer ${TOKEN}`,
          accept: 'application/json',
        }
      })
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default Api
