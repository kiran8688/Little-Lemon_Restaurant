
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <Fragment className="App">
      <Header />
        <Main />
      <Footer />

    </Fragment>
  );
}

export default App;
