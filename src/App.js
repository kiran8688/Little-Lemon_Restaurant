
import { Fragment } from 'react';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import ReserveTable from './Components/Reservations'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Fragment className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/reservations' element={<ReserveTable/>}/>
          <Route path='/login' />
        </Routes>
      <Footer />

    </Fragment>
  );
}

export default App;
