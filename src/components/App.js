import {useEffect, useState} from "react"
import SearchBar from "./SearchBar"
import MovieList from "./MovieList"
import axios from "axios"
import {useHistory, useParams} from "react-router-dom"

const App = () =>{
    const {current} = useParams()
    const [movieList, setMovieList] = useState()
    const [searchText, setSearchText] = useState()
    const [page, setPage] = useState(parseInt(current) || 1)
    const {REACT_APP_API_TMDB_KEY} = process.env
    const history = useHistory()
    const fetchMovie = async () =>{
      const {data:{results}} = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${REACT_APP_API_TMDB_KEY}&language=en-US&page=${current}`)
      setMovieList(results)
    }

    useEffect(()=>{
      if (searchText){
        handleSearch(searchText)
      } else{
        fetchMovie()
      }
    }, [searchText, page])

    const handleSearch = async (text) =>{
      const {data:{results}} = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${REACT_APP_API_TMDB_KEY}&query=${text}`)
      setMovieList(results)
    }

    const next = () =>{
      setPage(page + 1)
      history.push(`/current/${page + 1}`)
    }
    const previous = () =>{
      setPage(page - 1)
      history.push(`/current/${page - 1}`)
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <SearchBar handleSearch = {(text) => setSearchText(text.target.value)} />
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
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item">
                    <button className="page-link" tabindex="-1" disabled={page === 1 ? true : false} onClick={previous}>Previous</button>
                  </li>
                  {page !== 1 ? <li className="page-item"><button className="page-link" onClick={previous}>{page - 1}</button></li> : null}
                  <li className="page-item active" aria-current="page"><button className="page-link">{page}</button></li>
                  <li className="page-item"><button className="page-link" onClick={next}>{page + 1}</button></li>
                  <li className="page-item">
                    <button className="page-link" onClick={next}>Next</button>
                  </li>
                </ul>
              </nav>
        </div>
    )
}


export default App;