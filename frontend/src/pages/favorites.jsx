import { useMovieContext } from"../contexts/movieContext";
import MovieCard from "../components/movieCard";
import "../css/favorites.css"
function Favorite(){
  const {favorites} = useMovieContext();
    return(
        <>
          {
            favorites.length === 0 ? (<div className="empty">
              <h2>There's no favorites yet ! </h2>
            </div>)
            :(<div className="favorites-grid">
               {favorites.map((movie)=>(
                <MovieCard movie={movie}></MovieCard>
               ))}
            </div>)
          }
        </>
    )
}

export default Favorite;