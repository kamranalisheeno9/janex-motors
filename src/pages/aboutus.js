import React, { useState } from 'react';
import './aboutus.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Container, Col, Row, Tabs, Tab, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const About = (props) => {


    return (
        <>

            <div className="header-div">

                <Header />
            </div>
            <div className="page-name-container">
                <Row className="justify-content-between page-name-header">
                    <Col md={6}>
                        <h2>About Us</h2>
                    </Col>
                    <Col md={6}>
                        <div className="nav-page-links">
                            <ul>
                                <li><Link to="">Janes Autos Sales</Link></li>
                                <li>|</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container fluid className="page-content-container">
                <Row className="justify-content-center">
                    <Col lg={9} xs={12} className="text-content-container">
                        <h5 className="used-cars-text" >Best Used Cars in Ottawa</h5>
                        <br />
                        <h5 className="looking-text" >Looking for the best used cars in Ottawa?</h5>
                        <br />
                        <h5>Janex Auto Covid 19 updated policies</h5>
                        <br />
                        <p className="top-text">
                            Despite all of our attempts to socially distance ourselves, Janex is attempting to adapt in this environment by reacting in a positive manner. We are still open in person and online and will strive to provide you with a pleasant, clean, and responsible experience. Janex will drive cars to your home, and we will disinfect in your driveway prior to the test drive. Our online tools will allow you to purchase as well as finance from the safety of your home.
                            <br />
                            <br />

                            Need service? We will attempt to pick up your vehicle and bring it home to you as well.
                            <br />
                            <br />

                            We will all get through this, business will go on!
                            <br />
                            <br />

                            Janex Auto was recently featured in a nationwide article highlighting Janex Auto as a leader in innovation and putting the customer first with their Certified Pre-Owned (CPO) Program. The CPO Program is a guarantee that the customer gets the best value for a great vehicle. Our NO HAGGLE, NO HASSLE, JUST THE BEST PRICE UP FRONT approach takes the stress out of negotiating and allows you to pick a vehicle you love. All this while giving you the same peace of mind as buying a new vehicle at a fraction of the price but with the necessary protection on your new investment when you need it most – after the factory warranty has expired.
                            Janex Auto have recently expanded their inventory to include all brands in order to serve all customers in all situations. Janex Auto has more than 100 of the best used cars in Ottawa in stock at all times.  If the vehicle you are looking for is on on the lot.  we have access to thousands of vehicles off their lot. This gives them the ability to locate the specific vehicle you may want. Janex Auto can also ship your vehicle to you nationwide!
                            <br />
                            <br />

                            If we do not have the vehicle you are looking for in stock, we will use our many resources to find it for you! Fill out the form and we will get you started TODAY!
                            <br />
                            <br />

                            Also, we are always looking to buy new inventory. If you have a vehicle you would like to sell, fill out the Trade-In form and one of our experts will be in touch with you shortly.
                            <br />
                            <br />

                            We are ready to help you get the best deal on your next vehicle purchase, so contact us at any time to book an appointment and get a great deal!
                        </p>
                        <br />
                        <h5 className="whether-text">Whether you have good or bad credit, we can help you get financed in minutes! Just give us a call today or fill out our secure online application form.</h5>
                    </Col>
                    <Col lg={3} xs={10} className="contact-us-container" >
                        <div className="contact-us-btn">
                            <Link to="/contact" >
                                Contact Us
                            </Link>
                        </div>
                        <div className="contact-number-container">
                            <h6>Contact Us</h6>
                            <a className="contact-us-address" target="_blank" href="https://www.google.com/maps/place/Janex+Auto+Sales+%26+Service/@45.356825,-75.6382,15z/data=!4m5!3m4!1s0x0:0x535e8c99918483d6!8m2!3d45.3568462!4d-75.638218">
                                1470 Hunt Club Rd,<br />
                                Ottawa, ON K1T 1M6

                            </a>
                            <br />
                            <br />
                            <p className="sales-toll">Sales: <a href="" className="contact-us-address">(613) 260-0373</a></p>
                            <p className="sales-toll">Toll Free: <a href="" className="contact-us-address">(888) 324-7307</a></p>
                        </div>
                        <div className="contact-number-container">
                            <h6>Hours of Operation</h6>

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
                        </div>
                    </Col>

                </Row>
            </Container>

            <Footer />

        </>
    );
}

export default About;