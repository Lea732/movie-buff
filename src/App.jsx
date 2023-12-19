
import { useState, useEffect } from "react";
import Header from "./components/Header";
import HomePresentation from "./components/HomePresentation";
import FilmSerieCard from "./components/FilmSerieCard";
import filmAndSerie from "./data/filmAndSeries";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({ favorite: "All" });
  const [favoriteFilms, setFavoriteFilms] = useState([]);

   useEffect(() => {
   alert("Hello movies and series lover! :)");
   }, []);

  const handleSetFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleFavoriteChange = (id, isFavorite) => {
    const updatedFavoriteFilms = isFavorite
      ? [...favoriteFilms, id]
      : favoriteFilms.filter((filmId) => filmId !== id);
    
  return (
    <>  
      <Header/>
<main className='main'>
      <HomePresentation/>


    setFavoriteFilms(updatedFavoriteFilms);
  };

  const getFilteredFilms = () => {
    if (filters.favorite === "All") {
      return filmAndSerie;
    } else if (filters.favorite === "True") {
      return filmAndSerie.filter((film) => favoriteFilms.includes(film.id));
    } else {
      return filmAndSerie.filter((film) => film.type === filters.favorite);
    }
  };

  return (
    <>
      <Header favorite={filters.favorite} setFavorite={handleSetFilters} />
      <HomePresentation />
      <div className="presentation_film_serie">
        {getFilteredFilms().map((film, index) => (
          <FilmSerieCard key={index} infos={film} onFavoriteChange={handleFavoriteChange} />
        ))}
      </div>
      </main>
      <div className='bottom'>
      <Footer/></div>
    </>
  );
}

export default App;

