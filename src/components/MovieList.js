import MovieCard from "./MovieCard"


const MovieList = ({movieList}) =>{
    return(
        <div className="d-flex flex-wrap justify-content-around">
           {
           movieList?.map((movie)=>{
               return(
                   <MovieCard movie={movie} key={movie?.id} />
               )
            })
            }
        </div>
        
        
    )
}

export default MovieList;