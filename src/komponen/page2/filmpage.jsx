import React, { useState, useEffect } from 'react';
import { Card, Button, Container, Row, Col, Navbar, Form} from 'react-bootstrap'
import img from "../../assets/bioskop.jpg"
import "./filmPage.css"

function FilmPage() {

    const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
    const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  }

  function handleSearch(e) {
    e.preventDefault();

    if (searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm);
      setSearchTerm('');
    } else {
      window.location.reload();
    }
  }

//   function getClassByRate(vote) {
//     if (vote >= 8) {
//       return 'green';
//     } else if (vote >= 5) {
//       return 'orange';
//     } else {
//       return 'red';
//     }
//   }


        return (
            //navbar
            <div className='body'>
                <div className="headers">
                    <Navbar variant='dark' className='nav'>
                        <Container>
                        <Navbar.Brand href="./">
                            <img src={img} width="30" height="30" className="d-inline-block align-top" alt="React Bootstrap logo"/>
                            <strong>Rulz</strong><span>Movies</span>
                        </Navbar.Brand>
                        <Form className="d-flex" onSubmit={handleSearch}>
                        <Form.Control
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            type="search"
                            placeholder="Cari Film Apa Bro"
                            className="me-2"
                            aria-label="Search" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        </Container>
                    </Navbar>
                </div>
                <div id="main">
                <Container>
                    <Row className='row'>
                        {movies.map((movie) => (
                        <Col md={3} key={movie.id}>
                            <Card className='card-film'> 
                            <Card.Title className='card-judul'>{movie.title}</Card.Title>
                            <Card.Img variant="top" src={IMG_PATH + movie.poster_path} alt={movie.title} />
                            <Card.Body className='card-body'> 
                                <Card.Title className='card-release'> Release : {movie.release_date}  
                                <span className='rate'>{movie.vote_average}</span>
                                </Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        ))}
                    </Row>
                </Container>
                </div>
            </div>
        )
}

export default FilmPage;