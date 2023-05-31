import React, {Component} from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './home'
import FilmPage from './page2/filmpage';
import Sportspage from './page3/sportspage';
import HealthPage from './page4/health';
import RootPage from './root/rootPage';


class Index extends Component {
render(){
     return (
          <div>
          
          <BrowserRouter>
            <Routes >
               <Route path={"/"} element={<RootPage />} />
               <Route path={"/home"} element={<Home />} />
               <Route path={"/film"} element={<FilmPage />} />
               <Route path={"/sports"} element={<Sportspage />} />
               <Route path={"/health"} element={<HealthPage />} />
           </Routes>
          </BrowserRouter>
          </div>
      
     
     )
     }
} 
  


export default Index;