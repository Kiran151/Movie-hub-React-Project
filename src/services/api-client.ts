import axios from "axios";

export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDA3M2ZhODdhZTY1ZTk1NzliOGI0YjEyMjY5MWZjOSIsInN1YiI6IjY1ZmE3YzUyNzcwNzAwMDE0OTA1Y2QwNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Gtp8WkUeOcDDz1PnJSbgQ6C5chuuGwBBMEmNcK1WuSM'
      },
      params: {
        api_key: '9d073fa87ae65e9579b8b4b122691fc9'
    }
})