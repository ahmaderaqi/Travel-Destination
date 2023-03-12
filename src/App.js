import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import TourDetails from './components/TourDetails/TourDetails';
import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const data=require('./data/db.json')


function App() {
  return (
    <>
    <Header/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/city/:{data.id}' element={<TourDetails/>}></Route>
      </Routes>


    </>


  );
}

export default App;
