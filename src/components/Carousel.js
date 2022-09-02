import React, { Component } from "react";
import Slider from "react-slick";
import { Card, Button } from 'react-bootstrap';

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default class Carousel extends Component {
    render() {
        const settings = {
            centerMode: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
            infinite: true,
            cssEase: 'linear',

        };
        return (
            <div className="p-5">
                <Slider {...settings}>
                    <div className="pe-5 mb-5 intro-carousel">
                        <Card className="text-dark p-5 border-0">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <Card.Title>Solusi, <b>Kesehatan Anda</b></Card.Title>
                                    <Card.Text>
                                        Update informasi seputar kesehatan semua bisa disini ! 1
                                    </Card.Text>
                                    <Button className="py-2 custom-button" style={{ width: '160px', background: '#002060' }}>Selengkapnya</Button>
                                </div>
                                <div className="col-md-6">
                                    <img src={require('../assets/image/intro-pic.png')} alt="" className="intro-pic" />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="px-5 ">
                        <Card className="text-dark p-5 border-0">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <Card.Title>Solusi, <b>Kesehatan Anda</b></Card.Title>
                                    <Card.Text>
                                        Update informasi seputar kesehatan semua bisa disini ! 2
                                    </Card.Text>
                                    <Button className="py-2 custom-button" style={{ width: '160px', background: '#002060' }}>Selengkapnya</Button>
                                </div>
                                <div className="col-md-6">
                                    <img src={require('../assets/image/intro-pic.png')} alt="" className="intro-pic" />
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="pe-5">
                        <Card className="text-dark p-5 border-0">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <Card.Title>Solusi, <b>Kesehatan Anda</b></Card.Title>
                                    <Card.Text>
                                        Update informasi seputar kesehatan semua bisa disini !
                                    </Card.Text>
                                    <Button className="py-2 custom-button" style={{ width: '160px', background: '#002060' }}>Selengkapnya</Button>
                                </div>
                                <div className="col-md-6">
                                    <img src={require('../assets/image/intro-pic.png')} alt="" className="intro-pic" />
                                </div>
                            </div>
                        </Card>
                    </div>
                </Slider>
            </div>
        );
    }
}