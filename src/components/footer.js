import React, { useState } from 'react';
import './footer.css'
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Footer = (props) => {

    const [menuDisplay, setMenuDisplay] = useState(false)

    return (
        <>
            <Container fluid className="footer-container scroll-bottom " >
                <Row className="justify-content-between ">
                    <Col md={4} sm={6}>
                        <h5>Hours of Operation</h5>
                        <div className="footer-hours hour-location-contact">
                            <Tabs defaultActiveKey="sales" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="sales" title="Sales">
                                    <ul className="sales">
                                        <li>Monday - Thursday <span>	9:00am - 7:00pm </span></li>
                                        <li>Friday <span>	9:00am - 6:00pm </span></li>
                                        <li>Saturday <span>	9:00am - 5:00pm </span> </li>
                                        <li>Sunday <span>	Closed </span> </li>




                                    </ul>
                                </Tab>
                                <Tab eventKey="services" title="Services">
                                    <ul className="services">
                                        <li>Monday - Thursday <span>	8:30am - 5:30pm </span></li>
                                        <li>Saturday - Sunday <span>	Closed </span> </li>
                                    </ul>
                                </Tab>

                            </Tabs>
                        </div>
                    </Col>
                    <Col md={3} sm={4}>
                        <h5>Location</h5>
                        <p className="hour-location-contact" >1470 Hunt Club Rd,<br />
                            Ottawa, ON K1T 1M6</p>
                    </Col>
                    <Col md={3} sm={5} >
                        <h5>Contact Us</h5>
                        <ul className="sales hour-location-contact">
                            <li>Sales <span>(613) 260-0373</span></li>
                            <li>Toll Free <span>	(888) 324-7307 </span> </li>
                        </ul>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                        <Link to="">Home</Link>
                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                    <Link to="">Inventory</Link>

                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                    <Link to="">Sales Department</Link>

                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                    <Link to="">Finance Department</Link>

                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                    <Link to="">Service Department</Link>

                    </Col>
                    <Col lg={2} md={3} sm={4} xs={6} className="footer-links">
                    <Link to="">Contact Us</Link>

                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-center social-links">
                <Col lg={1} sm={2} xs={6} className="footer-links">
                    <Link to="">Twitter</Link>

                    </Col>
                    <Col lg={1} sm={2} xs={6}  className="footer-links">
                    <Link to="">Facebook</Link>

                    </Col>
                    <Col lg={1} sm={2} xs={6}  className="footer-links">
                    <Link to="">Youtube</Link>

                    </Col>
                    <Col lg={1} sm={2} xs={6}  className="footer-links">
                    <Link to="">Instagram</Link>

                    </Col>
                    <Col lg={1} sm={2} xs={6}  className="footer-links">
                    <Link to="">LinkedIn</Link>

                    </Col>
                </Row>
                <hr />
                <Row className="justify-content-center">
                    <Col lg={5} md={6}  >
                    <p className="rights">&copy; 2021 Janex Autos Sales. All Rights Reserved. | <Link>Sitemap</Link> | <Link> Privacy Policy </Link> </p>
                    </Col>
                    <Col md={5}>
                        <h5 className="powered-by">Powered and Designed By Edealer</h5>
                    </Col>
                </Row>
            
            </Container>

        </>
    );
}

export default Footer;