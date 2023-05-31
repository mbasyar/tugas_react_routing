import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import './homepage.css'
import tech from "../../assets/cor.png"
import web from "../../assets/cor2.jpg"
import img1 from "../../assets/css-3.svg"
import img2 from "../../assets/git-bash.svg"
import img3 from "../../assets/git-icon.svg"
import img4 from "../../assets/github-icon-1.svg"
import img5 from "../../assets/html-1.svg"
import img6 from "../../assets/javascript-1.svg"
import img7 from "../../assets/nodejs-icon.svg"
import img8 from "../../assets/react-2.svg"

const HomePage = () => {
  return (
        <div className='body'>
        {/*font awesome*/}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
        {/*jumbotron*/}
        <Container className='containerr'>
            <Carousel className='carousell'>
                <Carousel.Item>
                <img
                className="d-block w-100 images"
                src={tech}
                alt="Third slide"
                height={"300px"}
                />
                <Carousel.Caption className='caption'>
                    <h3>versioning control system</h3>
                    <p>berpartisipasi dalam proyek opensource github</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 images"
                    src={web}
                    alt="Third slide"
                    height={"300px"}
                    />
                    <Carousel.Caption className='caption'>
                    <h3>Library Reactjs </h3>
                    <p>membangun UI dengan bantuan library ReactJS</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </Container>
            {/*content*/}
        <div className="container container-about">
            <div className="row text-center row-about">
                <div className="col-12 text-center titlee">
                    <h2>ABOUT ME</h2>
                </div>
                <div className="col-md-4 col-sm-12 ">
                    <div className="card p-2">
                    <i className="fa-solid fa-user-graduate fa-5x mb-2" />
                    <h3>Student</h3>
                    <p>Saya adalah Mahasiswa Perguruan Tinggi Swasta DiJakarta, Prodi Teknik Informatika.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                    <i className="fa-solid fa-award fa-5x mb-2" />
                    <h3>DiCoding Academy</h3>
                    <p>Saya telah mengikuti DiCoding selama 4 bulan dan telah mendapatkan 4 sertifikat.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12">
                    <div className="card p-2">
                    <i className="fa-solid fa-laptop-code fa-5x mb-2" />
                    <h3>Eduwork Bootcamp</h3>
                    <p>Saya sedang belajar Kelas MERN (Fullstack javascript) di Eduwork Academy selama 3 bulan.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container container-skils">
            <div className="row text-center pt-5 row-skills">
                <div className="col-md-3 col-6">
                    <img src={img1}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">HTML5</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img2}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">CSS3</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img3}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">JAVASCRIPT</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img4}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">REACTJS</h4>
                </div>
            </div>
            <div className="row text-center pb-5 row-skills">
                <div className="col-md-3 col-6">
                    <img src={img5}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GIT BASH</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img6}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GIT</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img7}  alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">GITHUB</h4>
                </div>
                <div className="col-md-3 col-6">
                    <img src={img8} alt="gambar basyar"  style={{width: '75px'}} />
                    <h4 className="my-2">NODE JS</h4>
                </div>
            </div>
        </div>
        <footer>
        <div className="row">
                <div className="col text-center">
                    <p>CopyRight 2023 || Develop By:Rulzz</p>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default HomePage;