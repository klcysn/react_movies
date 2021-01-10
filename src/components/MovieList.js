import MovieCard from "./MovieCard"


const MovieList = ({movieList}) =>{
    return(
        <div className="d-flex flex-wrap justify-content-around">
          {
          movieList
          ? 
           movieList?.map((movie)=>{
               return(
                   <MovieCard movie={movie} key={movie?.id} />
               )
            })
            :
            <div className="d-flex justify-content-center">
                <div className="spinner-border text-info m-5" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>
            }
        </div>
        
        
    )
}

export default MovieList;