import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Menu from './pages/Menu';
import Deal from './pages/Deal';
function App() {
  return (
    <div className="App">
   
      
     
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="menu" element={<Menu/>} />
          <Route path="deal" element={<Deal/>} />

        </Routes>
      <Footer/>
    </BrowserRouter>
  
      

    </div>

  );
}

export default App;
