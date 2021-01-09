

const MovieCard = ({movie}) =>{
    return(
                <div className="card mb-4 shadow-sm col-3 ml-1">
                    <img className="card-img-top" src={movie.imageURL} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-text overflow-hidden text-truncate"> {movie.overview}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                            <h2><span className="badge badge-info">{movie.rating}</span></h2>
                        </div>
                    </div>
                </div>
    )
}

export default MovieCard;