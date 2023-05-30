
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';
import ReserveTable from './Components/Reservations'
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import PersonalInfo from './Components/PersonalInfo';
import ConfirmationPage from './Components/ConfirmationPage';

function App() {
  return (
    <section className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Main />}/>
          <Route path='/reservations' element={<ReserveTable/>}></Route>
          <Route path='/reservations/personal-information' element={<PersonalInfo/>}/>
          <Route path='/reservations/personal-information/confirmation' element={<ConfirmationPage/>}/>
          <Route path='/login' element={<Login/>} />
        </Routes>
      <Footer />

    </section>
  );
}

export default App;
