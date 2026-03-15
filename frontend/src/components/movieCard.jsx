
import "../css/MovieCard.css"
import { useState } from "react";
function MovieCard({movie}){

    const [liked,setLiked] = useState(false);
    function onFavorite(){
        setLiked(!liked);
    }
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
        </div>
        <div className="movie-overlay">
            <button className="favorite-btn" onClick={onFavorite}>{liked ?"❤️":"🤍"}</button>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>release date : {movie.release_date?.split('-')[0]}</p>
        </div>
    </div>
}

export default MovieCard;