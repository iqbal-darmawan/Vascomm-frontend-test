import React from 'react'
import Carousel from '../../components/Carousel'
import NavigationBar from '../../components/NavigationBar'
import CardProduct from '../../components/CardProduct'
import Footer from '../../components/Footer'
import { Card, Button } from 'react-bootstrap'

import '../../style/home.css'

const Home = () => {
    return (
        <div>
            <NavigationBar />
            <div className="body">
                <Carousel />
                <div className="container">
                    <div className="my-3">
                        <Card className="text-dark p-3 border-0">
                            <div className="row align-items-center">
                                <div className="col-md-12 d-flex align-items-center">
                                    <div className="me-4">
                                        <img src={require('../../assets/image/intro-pic-2.png')} alt="" className="intro-pic" />
                                    </div>
                                    <div>
                                        <Card.Title>Solusi, <b>Kesehatan Anda</b></Card.Title>
                                        <Card.Text>
                                            Update informasi seputar kesehatan semua bisa disini ! 1
                                        </Card.Text>
                                        <Button className="py-2 custom-button" style={{ width: '160px', background: '#002060' }}>Selengkapnya</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="mt-5 d-flex align-items-center justify-content-between">
                        <div className="d-flex">
                            <Button className="button-category border-0 active me-4">All Product</Button>
                            <Button className="button-category border-0 me-4">Layanan Kesehatan</Button>
                            <Button className="button-category border-0 me-4">Alat Kesehatan</Button>
                        </div>
                        <div className="d-flex">
                            <a href="" className="btn icon-filter border-0 me-5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_220_24582)">
                                        <path d="M0 13.1719L0 14.1094H11.3125V15.0469H14.125V14.1094L16 14.1094V13.1719H14.125V12.2344H11.3125V13.1719H0Z" fill="#002060" />
                                        <path d="M11.3125 1.89063L0 1.89062L0 2.82812L11.3125 2.82813V3.76563H14.125V2.82813H16V1.89063H14.125V0.953125H11.3125V1.89063Z" fill="#002060" />
                                        <path d="M0 5.64062L0 6.57812H6.9375V7.51562L9.75 7.51563V6.57813H16V5.64063H9.75V4.70312H6.9375V5.64062H0Z" fill="#002060" />
                                        <path d="M0 9.42188L0 10.3594H1.67663V11.2969H4.48912V10.3594L16 10.3594V9.42188H4.48912V8.48438H1.67663V9.42188H0Z" fill="#002060" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_220_24582">
                                            <rect width="16" height="16" fill="white" transform="translate(0 16) rotate(-90)" />
                                        </clipPath>
                                    </defs>
                                </svg>

                            </a>
                            <input type="text" className="form-control search-input" placeholder="Search" />
                        </div>
                    </div>
                </div>
                <div className="mt-5 container">
                    <div className="d-flex flex-wrap justify-content-between">
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                    <div className="d-flex justify-content-center my-5">
                        <Button className="py-2 text-center w-25 custom-botton" style={{ background: '#002060' }}>Lihat lainnya</Button>
                    </div>

                    <h1 style={{ color: '#002060' }} className="mt-4">Pilih Tipe Layanan Kesehatan Anda</h1>
                </div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home