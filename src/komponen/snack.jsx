import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import kue1 from '../asset/kue.jpg'
import kue2 from '../asset/kue2.jpg'
import kue3 from '../asset/kue.jpg'
import kue4 from '../asset/kue2.jpg'

export const Snack = () => {
  return (
    <div>
        <Container>
        <div className='container-fluid m-auto mt-5 bg-dark p-4'>
        <div className="row text-center">
            <div className="col-12">
              <h1>Kategori - Cake</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={kue1} />
                  <Card.Body>
                    <Card.Title>Cake 1 </Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={kue2} />
                  <Card.Body>
                    <Card.Title>Cake 2</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={kue3} />
                  <Card.Body>
                    <Card.Title>Cake 3</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={kue4} />
                  <Card.Body>
                    <Card.Title>Cake 4</Card.Title>
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