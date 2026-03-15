
import MovieCard from "../components/movieCard"
import { useState,useEffect } from "react";
import { searchMovies,getPopularMovies } from "../services/api";
import "../css/home.css"
function Home(){
    const [searchQuery,setSearchQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const [loading,setLoading]=useState(true);
    const [err,setErr] = useState(null);


    useEffect(()=>{
        const loadPopularMovies = async()=>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }catch(err){
                console.log(err);
                setErr("failed to load movies ..")
            }finally{
                setLoading(false)
            }
        }

        loadPopularMovies();
    },[])
    const handleSearch = async(e)=>{
        e.preventDefault();
        if(!searchQuery.trim()==="")return
        if(loading)return
        setLoading(true);

        try {
                const searchedMovies =  await  searchMovies(searchQuery);
                setMovies(searchedMovies);
                setErr(null);
        } catch (error) {
            console.log(error);
            setErr("Something went wrong while searching...");
        }finally{
            setLoading(false)
        }
    }
    return (
        <div className="home">
           
            <form onSubmit={handleSearch} className="search-form"> 
                <input type="text" className="search-input" placeholder="Search for movies..."  value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)}/>

                <button type="submit" className="search-button">
                    search
                </button>
            </form>

            {err && <div className="err-message">{err}</div>}
            {loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
              {movies.map(movie=>(
                movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id}/>
                ))}
           </div>}
           
        </div>
    )
}

export default Home;