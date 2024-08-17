import { useEffect, useRef, useState } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

// components
import MovieCard from "./MovieCard";

const API_URL = "https://www.omdbapi.com/?apikey=bdfab4f8"

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const focusRef = useRef();

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  const handleKeyDown = (e) => {
    if (e.code === "Enter") {
      searchMovies(searchTerm);
      if (focusRef.current) {
        focusRef.current.blur();
      }
    }
  };

  useEffect(() => {
    searchMovies("action");
  }, []);

  return (
    <div className="app">
      <h1>Movie Fusion</h1>
      <div className="search">
        <input
          ref={focusRef}
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <img
          src={SearchIcon}
          alt="search icon"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {
                movies.slice(0, 9).map((movie) => (
                  <MovieCard movie={movie} />
                ))
              }
            </div>
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
      }
    </div>
  );
}

export default App;
