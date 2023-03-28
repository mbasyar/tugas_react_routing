import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from 'react-router-dom';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// import { Cemilan } from './pages/cemilan';
// import { Makanan } from './pages/makanan';
// import { Minuman } from './pages/minuman';


function App() {
  return (
    <div>
      <Container>
        <div className='container-fluid m-auto mt-5 bg-dark p-2'>
          <h1>BELAJAR REACT ROUTER</h1>
          <Navbar>
            <container>
              <nav className='navbar m-2'>
                <Link to={"Makanan"} className="mu"> MAKANAN </Link>
                <Link to={"Minuman"} className="mu"> MINUMAN</Link>
                <Link to={"Cemilan"} className="mu"> CAKE</Link>
              </nav>
            </container>
          </Navbar>
        </div>
      </Container>
    </div>
  );
}

export default App;
