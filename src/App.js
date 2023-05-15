
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HighlightsSection from './Components/HighlightsSection';


function App() {
  return (
    <Fragment className="App">
      <Header/>
      <main>
        <HeroSection/>
        <HighlightsSection/>
      </main>

    </Fragment>
  );
}

export default App;
