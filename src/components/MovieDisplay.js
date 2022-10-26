
const MovieDisplay = (props) => {
    const {movie} = props; // deconstructing to avoid repetition
    console.log(movie);
    return(
        <div>
             <h2>{movie.Title}</h2>
            <h2>{movie.Genre}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <h2>{movie.Year}</h2>
        
       
        </div>
    )
}

export default MovieDisplay;












