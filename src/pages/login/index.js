import React from 'react'
import { Row, Col, Container, Button, Form } from 'react-bootstrap'

import "../../style/login.css"

const Login = () => {
    return (
        <div className="login-wrapper">
            <Row>
                <Col md={7}>
                    <Container>
                        <div className="form-wrapper">
                            <h1>Hai, <b>Selamat Datang</b> </h1>
                            <p style={{ color: '#597393' }} className="mt-3">Silahkan login untuk melanjutkan</p>
                            <Button variant="light" className="d-flex justify-content-center align-items-center w-100 mt-4">
                                <div className="icon me-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_123_284)">
                                            <path d="M5.31891 14.5034L4.4835 17.6221L1.43011 17.6867C0.517594 15.9942 0 14.0578 0 11.9999C0 10.0101 0.483938 8.13356 1.34175 6.48126H1.34241L4.06078 6.97964L5.25159 9.6817C5.00236 10.4083 4.86652 11.1883 4.86652 11.9999C4.86661 12.8808 5.02617 13.7248 5.31891 14.5034Z" fill="#FBBB00" />
                                            <path d="M23.7902 9.75845C23.928 10.4844 23.9999 11.234 23.9999 12.0002C23.9999 12.8593 23.9095 13.6974 23.7375 14.5057C23.1533 17.2565 21.6269 19.6585 19.5124 21.3582L19.5118 21.3576L16.0878 21.1829L15.6032 18.1578C17.0063 17.335 18.1028 16.0472 18.6804 14.5057H12.2637V9.75845H18.774H23.7902Z" fill="#518EF8" />
                                            <path d="M19.5119 21.3572L19.5126 21.3578C17.4561 23.0108 14.8438 23.9998 12.0001 23.9998C7.43018 23.9998 3.457 21.4455 1.43018 17.6866L5.31897 14.5034C6.33236 17.208 8.94138 19.1332 12.0001 19.1332C13.3148 19.1332 14.5465 18.7778 15.6033 18.1574L19.5119 21.3572Z" fill="#28B446" />
                                            <path d="M19.6596 2.76262L15.7721 5.94525C14.6783 5.26153 13.3853 4.86656 12 4.86656C8.87213 4.86656 6.21431 6.88017 5.25169 9.68175L1.34245 6.48131H1.3418C3.33895 2.63077 7.36223 0 12 0C14.9117 0 17.5814 1.03716 19.6596 2.76262Z" fill="#F14336" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_123_284">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>Sign in with Google </div>
                            </Button>
                            <div className="d-flex align-items-center w-100 my-5">
                                <div className="line-login"></div>
                                <div className="line-login-text">or sign in with email</div>
                                <div className="line-login"></div>
                            </div>
                            <Form className="w-100">
                                <div className="login-scrolling" id="style-1">
                                    <div className="me-5">
                                        <div className="d-flex justify-content-between">
                                            <Form.Group className="mb-4 w-100 me-5" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="font-input-login">Nama Depan</Form.Label>
                                                <Form.Control type="text" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan nama depan" />
                                            </Form.Group>
                                            <Form.Group className="mb-4 w-100" controlId="exampleForm.ControlInput1">
                                                <Form.Label className="font-input-login">Nama Belakang</Form.Label>
                                                <Form.Control type="text" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan nama belakang" />
                                            </Form.Group>
                                        </div>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="font-input-login">No. KTP</Form.Label>
                                            <Form.Control type="text" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan No. KTP anda" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="font-input-login">Email</Form.Label>
                                            <Form.Control type="email" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan email anda" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="font-input-login">No. Telepon</Form.Label>
                                            <Form.Control type="text" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan No. Telp. anda" />
                                        </Form.Group>
                                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                                            <Form.Label className="font-input-login">Password</Form.Label>
                                            <Form.Control type="password" className="form-input-login-2 border-0 px-3 py-3" placeholder="Masukkan password anda" />
                                        </Form.Group>
                                        <Form.Group controlId="exampleForm.ControlInput1">
                                            <Form.Label className="font-input-login">Konfirmasi Password</Form.Label>
                                            <Form.Control type="password" className="form-input-login-2 border-0 px-3 py-3" placeholder="Konfirmasi password anda" />
                                        </Form.Group>
                                    </div>
                                </div>

                                <Button className="button-login w-100 p-3">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="ms-auto">Register</div>
                                        <div className="ms-auto">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5 12H19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12 5L19 12L12 19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </Button>
                            </Form>
                            <div className="d-flex align-items-center mt-4">
                                <p className="m-0 me-4" style={{ color: '#BEBEBE' }}>Sudah punya akun ?</p>
                                <a href="" className="text-decoration-none" style={{ color: '#002060' }}>Login sekarang</a>
                            </div>
                            <div className="d-flex align-items-center mt-5">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.3335 4.66665H8.66683C9.02045 4.66665 9.35959 4.80712 9.60964 5.05717C9.85969 5.30722 10.0002 5.64636 10.0002 5.99998V6.66665H8.66683V5.99998H7.3335V9.99998H8.66683V9.33331H10.0002V9.99998C10.0002 10.3536 9.85969 10.6927 9.60964 10.9428C9.35959 11.1928 9.02045 11.3333 8.66683 11.3333H7.3335C6.97987 11.3333 6.64074 11.1928 6.39069 10.9428C6.14064 10.6927 6.00016 10.3536 6.00016 9.99998V5.99998C6.00016 5.64636 6.14064 5.30722 6.39069 5.05717C6.64074 4.80712 6.97987 4.66665 7.3335 4.66665ZM8.00016 1.33331C8.87564 1.33331 9.74255 1.50575 10.5514 1.84078C11.3602 2.17581 12.0952 2.66688 12.7142 3.28593C13.3333 3.90499 13.8243 4.63992 14.1594 5.44876C14.4944 6.25759 14.6668 7.1245 14.6668 7.99998C14.6668 9.76809 13.9645 11.4638 12.7142 12.714C11.464 13.9643 9.76827 14.6666 8.00016 14.6666C7.12468 14.6666 6.25778 14.4942 5.44894 14.1592C4.6401 13.8241 3.90517 13.3331 3.28612 12.714C2.03588 11.4638 1.3335 9.76809 1.3335 7.99998C1.3335 6.23187 2.03588 4.53618 3.28612 3.28593C4.53636 2.03569 6.23205 1.33331 8.00016 1.33331ZM8.00016 2.66665C6.58567 2.66665 5.22912 3.22855 4.22893 4.22874C3.22873 5.22894 2.66683 6.58549 2.66683 7.99998C2.66683 9.41447 3.22873 10.771 4.22893 11.7712C5.22912 12.7714 6.58567 13.3333 8.00016 13.3333C9.41465 13.3333 10.7712 12.7714 11.7714 11.7712C12.7716 10.771 13.3335 9.41447 13.3335 7.99998C13.3335 6.58549 12.7716 5.22894 11.7714 4.22874C10.7712 3.22855 9.41465 2.66665 8.00016 2.66665Z" fill="#BEBEBE" />
                                </svg>
                                <p className="m-0 ms-2" style={{ color: '#BEBEBE' }}>SILK. all right reserved.</p>
                            </div>
                        </div>
                    </Container>
                </Col>
                <Col md={5}>
                    <div className="image-login">

                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Login