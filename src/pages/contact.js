import React, { useState } from 'react';
import './contact.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../components/textField'
import { Container, Col, Row, Tabs, Tab, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const About = (props) => {

    const Validate = yup.object({

        firstname: yup.string()
            .required('Required'),
        lastname: yup.string()
            .required('Required'),
        email: yup.string()
            .email('Email is Invalid')
            .required('Required'),

    })

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
            }}
            onSubmit={values => {



            }}

            validationSchema={Validate}

        >
            {formik => (

                <>

                    <div className="header-div">

                        <Header />
                    </div>
                    <div className="page-name-container">
                        <Row className="justify-content-between page-name-header">
                            <Col md={6}>
                                <h2>Contact Us</h2>
                            </Col>
                            <Col md={6}>
                                <div className="nav-page-links">
                                    <ul>
                                        <li><Link to="">Janes Autos Sales</Link></li>
                                        <li>|</li>
                                        <li>Contact Us</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Container fluid className="page-content-container">
                        <Row className="justify-content-center">
                            <Col lg={6} xs={12} className="text-content-container">
                                <h5>How can we help you?</h5>
                                <p>Our contact information is listed below for your convenience. For further queries, please use the form on this page.</p>
                                <Row>
                                    <Col md={6}>
                                        <h5>You can reach us at:    </h5>
                                    </Col>
                                    <Col md={6} className="contact-hours">
                                        <h5>Hours of Operation</h5>

                                        <Tabs defaultActiveKey="sales" id="uncontrolled-tab-example" className="mb-3">
                                            <Tab eventKey="sales" title="Sales" className="contact-sales">
                                                <ul >
                                                    <li>Monday - Thursday <span>	9:00am - 7:00pm </span></li>
                                                    <li>Friday <span>	9:00am - 6:00pm </span></li>
                                                    <li>Saturday <span>	9:00am - 5:00pm </span> </li>
                                                    <li>Sunday <span>	Closed </span> </li>




                                                </ul>
                                            </Tab>
                                            <Tab eventKey="services" title="Services" className="contact-sales">
                                                <ul >
                                                    <li>Monday - Thursday <span>	8:30am - 5:30pm </span></li>
                                                    <li>Saturday - Sunday <span>	Closed </span> </li>
                                                </ul>
                                            </Tab>

                                        </Tabs>

                                    </Col>
                                </Row>
                                <iframe className="contact-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44859.92914985941!2d-75.638632!3d45.353948!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x535e8c99918483d6!2sJanex%20Auto%20Sales%20%26%20Service!5e0!3m2!1sen!2sca!4v1637774774294!5m2!1sen!2sca" allowfullscreen="" loading="lazy"></iframe>
                            </Col>
                            <Col lg={6} xs={10}  >
                                <div className="contact-form" >

                                    <Form onSubmit={formik.handleSubmit}>
                                        <Row>
                                            <Col md={6}>
                                                <Form.Group className="mb-1 mt-3 " controlId="formBasicEmail">
                                                    <TextField classValue="textfield-input" type="text" name="firstname" placeholder=" Your First Name" />

                                                </Form.Group>
                                            </Col>
                                            <Col md={6}>

                                                <Form.Group className="mb-1 mt-3 " controlId="formBasicEmail">
                                                    <TextField classValue="textfield-input" type="text" name="lastname" placeholder=" Your Last Name" />

                                                </Form.Group>
                                            </Col>
                                        </Row>
                                        <Form.Group className="mb-4 mt-4" controlId="formBasicEmail">
                                            <TextField classValue="textfield-input" type="email" name="email" placeholder="Your Email" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField classValue="textfield-input" type="tel" name="phone" placeholder=" Your Phone" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <Form.Control as="textarea" rows={6} className="textfield-input" placeholder="Message" />
                                        </Form.Group>
                                        <Row className="justify-content-between" >
                                            <Col  sm={2}  >
                                            <button type="submit" className="form-btn">Submit</button>
                                            </Col>
                                            <Col sm={10} >
                                                <Form.Group className="mb-3 contact-form-checkbox" controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" label="Send me exclusive Dealer specific offers and promotions." />
                                                </Form.Group>
                                                </Col>
                                        </Row>
                                    </Form>





                                </div>
                            </Col>


                        </Row>
                    </Container>

                    <Footer />

                </>
            )}

        </Formik>
    );
}

export default About;