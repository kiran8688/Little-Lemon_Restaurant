
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import HighlightsSection from './Components/HighlightsSection';
import Testimonials from './Components/Testimonials';
import About from './Components/bout';
import Footer from './Components/Footer';

function App() {
  return (
    <Fragment className="App">
      <Header/>
      <main>
        <HeroSection/>
        <HighlightsSection/>
        <Testimonials/>
        <About/>
      </main>
      <Footer/>

    </Fragment>
  );
}

export default App;
