import React from 'react'
import { Card } from 'react-bootstrap'

const CardProduct = () => {
    return (
        <div>
            <Card style={{ width: '12.5rem' }} className="border-0 card-product m-4">
                <Card.Body>
                    <Card.Title className="float-end">
                        <div className="d-flex align-items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.7364 6.89625L12.7774 6.17554L10.5606 1.6814C10.5001 1.55836 10.4005 1.45875 10.2774 1.3982C9.96882 1.24586 9.59382 1.37281 9.43952 1.6814L7.22272 6.17554L2.26374 6.89625C2.12702 6.91578 2.00202 6.98023 1.90632 7.07789C1.79062 7.19681 1.72686 7.3568 1.72906 7.5227C1.73126 7.6886 1.79923 7.84684 1.91804 7.96265L5.50593 11.4607L4.65827 16.4002C4.63839 16.5151 4.65111 16.6332 4.69497 16.7413C4.73884 16.8493 4.8121 16.9429 4.90645 17.0114C5.0008 17.08 5.11246 17.1207 5.22878 17.129C5.34509 17.1373 5.4614 17.1128 5.56452 17.0584L10.0001 14.7263L14.4356 17.0584C14.5567 17.1228 14.6973 17.1443 14.8321 17.1209C15.1719 17.0623 15.4005 16.74 15.3419 16.4002L14.4942 11.4607L18.0821 7.96265C18.1798 7.86695 18.2442 7.74195 18.2637 7.60523C18.3165 7.26343 18.0782 6.94703 17.7364 6.89625Z" fill="#FFEA00" />
                            </svg>
                            <span style={{ color: '#BEBEBE' }} className="ms-1">5</span>
                        </div>
                    </Card.Title>
                    <Card.Img variant="top" src={require('../assets/image/product.png')} className="mb-1 p-4" />
                    <Card.Subtitle className="mb-1" style={{ color: '#002060'}}>Suntik Steril</Card.Subtitle>
                    <Card.Text className="d-flex justify-content-between align-items-center">
                       <span style={{ color: '#FF7200', fontWeight: '600', fontSize:'10px'}}>Rp. 10.000</span>
                       <span className="ready-stock p-1" style={{ fontSize:'10px' }}>Ready Stok</span>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardProduct