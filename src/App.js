import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home'
import Offers from './Pages/Offers';
import Mens from './Pages/Mens';
import Womens from './Pages/Womens';
import Kids from './Pages/Kids';
import Accessories from './Pages/Accessories';
import Basket from './Pages/Basket';
import Contact from './Pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      '<div>
        <Routes>
            <Route path="/Home"element={<Home/>}/>
            <Route path="/Offers"element={<Offers/>}/>
            <Route path="/Mens"element={<Mens/>}/>
            <Route path="/Womens"element={<Womens/>}/>
            <Route path="/Kids"element={<Kids/>}/>
            <Route path="/Accessories"element={<Accessories/>}/>
            <Route path="/Contact"element={<Contact/>}/>
            <Route path="/Basket"element={<Basket/>}/>




        </Routes >
        
        
        
        
        
        </div>'
   
    </div>
  );
}

export default App;
