import {useState} from "react"
import axios from "axios"
import {useHistory, useParams} from "react-router-dom"

const MovieCard = ({movie}) =>{
    const history = useHistory()
    const {current} = useParams()
    const [show, setShow] = useState(true)
    const setVisible = () => setShow(s => !s)
    const getDetail = () =>{
        history.push(`/detail/${current ? current : 1}/${movie.id}`)
    }
    return(
                <>
                    { show &&
                        <div className="card mb-4 shadow-sm col-lg-3 col-md-4 ml-1" style={{cursor:"pointer"}}>
                        <img className="card-img-top" onClick={getDetail} src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "/logo512.png"} alt="" />
                        <div className="card-body">
                            <h5 className="card-title" onClick={getDetail}>{movie?.title}</h5>
                            <p className="card-text overflow-hidden" onClick={getDetail}> {movie?.overview.slice(0, 150)}...</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger" onClick={setVisible}>Hide</button>
                                <h2><span className="badge badge-info">{movie?.vote_average}</span></h2>
                            </div>
                        </div>
                    </div>
                    }
                </>
    )
}

export default MovieCard;