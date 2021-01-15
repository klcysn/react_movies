import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, useHistory} from "react-router-dom"

const Detail = () => {
const history = useHistory()
const {id, current} = useParams()
const [detail, setDetail] = useState()
const [similar, setSimilar] = useState()
const fetchDetail = async () =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=en-US`)
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_API_TMDB_KEY}&language=en-US&page=1`)
    setSimilar(response.data.results)
    setDetail(data)
}
useEffect(()=>{fetchDetail()}, [id])

const getList = () =>{
    history.push(`/current/${current}`)
}

const SimilarMovies = () =>{
    return(
        similar.map((item)=>{
            return(
            <div className="col-2 mb-2" onClick={()=>history.push(`/detail/${current ? current : 1}/${item.id}`)} style={{cursor:"pointer"}}>
                <div className="card h-100">
                    <img src={item?.poster_path ? `https://image.tmdb.org/t/p/w500${item?.poster_path}` : "/logo512.png"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                    </div>
                </div>
            </div>

            )
        })
    )
}
    return(
           
            detail
            ?
            <div className="card mb-3 w-100 overflow-hidden">
                <div className="row justify-content-between">
                    <div className="col-4">
                        <img className="w-100 h-100" src={detail?.poster_path ? `https://image.tmdb.org/t/p/w500${detail?.poster_path}` : "/logo512.png"} alt="..."/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title mb-4">{detail?.title}</h5>
                            <a href={detail?.homepage} className="link-secondary">Visit Official website</a>
                            <p className="card-text mb-4 mt-4"><strong>Company:</strong> {detail?.production_companies[0]?.name}</p>
                            <p className="card-text mb-4"><strong>Country:</strong> {detail?.production_countries[0]?.name}</p>
                            <p className="card-text mb-4"><strong>Language:</strong> {detail?.spoken_languages[0]?.name}</p>
                            <p className="card-text mb-4"><strong>Date:</strong> {detail?.release_date}</p>
                            <p className="card-text mb-4"><strong>Rating:</strong> <span className="badge bg-info fs-3">{detail?.vote_average}</span></p>
                            <p className="card-text"><strong>{detail?.tagline}</strong></p>
                            <p className="card-text">{detail?.overview}</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 mt-4 mb-4">
                    <button className="btn btn-primary col-12 m-0" type="button" onClick={getList}>Go Back to Movie List</button>
                </div>
                {similar.length ? <h5 className="card-title text-center">Similar Movies</h5> : null}
                <div class="row cols-3 row-cols-md-6 g-4 w-100">
                    <SimilarMovies />
                </div>
            </div>
            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info m-5" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
    )
}

export default Detail;