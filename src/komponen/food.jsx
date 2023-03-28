import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import mie1 from '../asset/ayam.jpg'
import mie2 from '../asset/mie.jpeg'
import mie3 from '../asset/miee.jpg'
import mie4 from '../asset/ayam.jpg'
export const Food = () => {
  return (
    <div>
      <Container>
        <div className='container-fluid m-auto mt-5 bg-dark p-4'>
        <div className="row text-center">
            <div className="col-12">
              <h1>Kategori - Makanan</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={mie1} />
                  <Card.Body>
                    <Card.Title>Ayam Geprek</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={mie3} />
                  <Card.Body>
                    <Card.Title>Mie ayam biasa</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={mie2} />
                  <Card.Body>
                    <Card.Title>Mie ayam luar biasa</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={mie4} />
                  <Card.Body>
                    <Card.Title>Bebek Geprek</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
