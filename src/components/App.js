import {useEffect, useState} from "react"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from "axios"

const App = () =>{
    const [movieList, setMovieList] = useState()
    const {REACT_APP_API_TMDB_KEY} = process.env
    const fetchMovie = async () =>{
      const {data:{results}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_TMDB_KEY}&language=en-US&page=1`)
      setMovieList(results)
    }

    useEffect(()=>{
      fetchMovie()
    }, [])

    const handleSearch = (text) =>{
      const newText = text.target.value.toUpperCase()
      const movies = [...movieList]
      const filteredMovie = movies.filter((movie)=>{
        const newMovie = movie.name.toUpperCase()
        if(newMovie.includes(newText)){
          return movie
        }
      })
      setMovieList(filteredMovie)
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SearchBar handleSearch = {handleSearch} />
                </div>
            </div>
            {
              !movieList
              ?
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-info m-5" role="status">
                  <span className="visually-hidden"></span>
                </div>
              </div>
              :
              <MovieList movieList={movieList} />
              }
        </div>
    )
}


export default App;