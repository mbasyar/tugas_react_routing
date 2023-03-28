import React from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import drink1 from '../asset/kopi.jpg'
import drink2 from '../asset/kopikita.jpg'
import drink3 from '../asset/kopiku.jpg'
import drink4 from '../asset/kopi.jpg'
export const Drink = () => {
  return (
    <div>
      <Container>
        <div className='container-fluid m-auto mt-5 bg-dark p-4'>
        <div className="row text-center">
            <div className="col-12">
              <h1>Kategori - Minuman</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={drink1} />
                  <Card.Body>
                    <Card.Title>kopi 1 </Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={drink2} />
                  <Card.Body>
                    <Card.Title>kopi 2</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={drink3} />
                  <Card.Body>
                    <Card.Title>kopi 3</Card.Title>
                    <Card.Text>
                      <p>Rp. 10.000</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
            </div>
            <div className="col-3">
              <Card>
                <Card.Img variant="top" src={drink4} />
                  <Card.Body>
                    <Card.Title>kopi 4</Card.Title>
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
