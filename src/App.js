import logo from './logo.svg';
import './App.css';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import React from 'react';


function App() {
  return (
    <div className="border-box">
      <div className="container">
        <Info />
        <About />
        <Footer />
      </div>
    </div>    
  );
}

export default App;
