import MovieCard from "./MovieCard"


const MovieList = ({movieList}) =>{
    return(
        <div className="row d-grid gap-3 justify-content-between">
           {
           movieList.map((movie)=>{
               return(
                   <MovieCard movie={movie} key={movie.id} />
               )
            })
            }
        </div>
        
        
    )
}

export default MovieList;