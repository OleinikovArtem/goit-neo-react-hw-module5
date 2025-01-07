const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YjcxYWMzZjA4OTZlODE1ZjBhZjg0ZjVmMDZlNzYyMCIsIm5iZiI6MTU5MTcwODE0MC42MjMwMDAxLCJzdWIiOiI1ZWRmODllYzljMjRmYzAwMjE2YTk1OWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.OYnKk8TAqHNUguOXyO7cIt8AHyq9p8UzRDN6x8AKk-E'
const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

const options = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
  