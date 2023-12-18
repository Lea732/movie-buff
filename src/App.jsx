import Header from './components/Header'
import { useEffect } from 'react';

import './App.css'
import HomePresentation from './components/HomePresentation'


function App() {
  useEffect(() => {
    alert("Hello movies and series lover ! :)");
  }, []);

  return (
    <>  
      <Header/>
   

    <HomePresentation/>
    </>
  )
}

export default App
