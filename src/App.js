import './App.css';
import { Link, Outlet } from 'react-router-dom';
import React from 'react';
// import { Cemilan } from './pages/cemilan';
// import { Makanan } from './pages/makanan';
// import { Minuman } from './pages/minuman';


function App() {
  return (
    <div>
      <div className='container'>
        <h1>BELAJAR REACT ROUTER</h1>
        <nav className='navbar'>
          <Link to={"Makanan"} className="me"> MAKANAN </Link>
          <Link to={"Minuman"} className="me"> MINUMAN</Link>
          <Link to={"Cemilan"} className="me"> CEMILAN</Link>
        </nav>
          <Outlet /> 

         
      </div>
    </div>
  
  );
}

export default App;
