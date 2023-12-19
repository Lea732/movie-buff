import { useEffect } from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import HomePresentation from './components/HomePresentation'
import Card from './components/FilmSerieCard';

import './App.css'
import filmAndSerie from './data/filmAndSeries';

function App() {
  useEffect(() => {
    alert("Hello movies and series lover ! :)");
  }, []);

  return (
    <>  
      <Header/>
<main className='main'>
      <HomePresentation/>

      <div className="presentation_film_serie">
        {filmAndSerie.map((film, index) => (
        <Card key={index} infos={film}/> 
        ))}
        
      </div>
      </main>
      <div className='bottom'>
      <Footer/></div>
    </>
  )
}

export default App
