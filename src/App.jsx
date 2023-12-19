import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomePresentation from './components/HomePresentation';
import FilmSerieCard from './components/FilmSerieCard';
import filmAndSerie from './data/filmAndSeries';
import './App.css';

function App() {
  const [filters, setFilters] = useState({ favorite: 'All' });

  useEffect(() => {
    alert('Hello movies and series lover! :)');
  }, []);

  const handleSetFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredFilms = filmAndSerie.filter((film) => {
    if (filters.favorite === 'All') {
      return true;
    } else if (filters.favorite === 'True') {
      return film.favorite;
    } else {
      return film.type === filters.favorite;
    }
  });

  return (
    <>
      <Header favorite={filters.favorite} setFavorite={handleSetFilters} />
      <HomePresentation />
      <div className="presentation_film_serie">
        {filteredFilms.map((film, index) => (
          <FilmSerieCard key={index} infos={film} setFilters={handleSetFilters} />
        ))}
      </div>
    </>
  );
}

export default App;
