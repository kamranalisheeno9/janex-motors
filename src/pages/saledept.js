import React, { useState } from 'react';
import './salesdept.css'
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
const Sales = (props) => {


    return (
        <>

            <div className="header-div">

                <Header />
            </div>
            <div className="page-name-container">
                <Row className="justify-content-between page-name-header">
                    <Col md={6}>
                        <h2>Sales Department</h2>
                    </Col>
                    <Col md={6}>
                        <div className="nav-page-links">
                            <ul>
                                <li><Link to="">Janes Autos Sales</Link></li>
                                <li>|</li>
                                <li>Sales Department</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container fluid className="page-content-container">
                <Row className="justify-content-center">
                    <Col lg={9} xs={12} className="text-content-container">
                        <p className="top-text">
                            At Janex Auto, we make the purchase of your next vehicle easy and hassle-free! Whether you are 18 or 88, we know that at some point you would like to purchase a vehicle and with that come 5 common perceptions which we would like to address. Here is how we overcome them and make it easy for you to purchase a vehicle today!
                        </p>
                        <Row className="justify-content-center mt-5">
                            <Col md={6}>
                                <h5>You think that it’s not the right time to get the best price!</h5>
                                <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/03024430/dollar.png" />
                                <p>
                                    At Janex…
                                    <br />
                                    <br />
                                    We price our vehicles according to the market in order to offer you the best deal first!
                                </p>
                            </Col>
                            <Col md={6}>
                                <h5>
                                    You think that the payment will not fit your budget!
                                </h5>
                                <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/03024945/Payment-1.png" />
                                <p>
                                    At Janex…
                                    <br />
                                    <br />
                                    We have adaptive programs to fit your desired budget!
                                </p>
                            </Col>
                            <Col md={6}>
                                <h5>
                                    You think that it will require too much cash to complete the transaction!
                                </h5>
                                <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/03030019/transaction.png" />
                                <p>
                                    At Janex…
                                    <br />
                                    <br />
                                    We have flexible programs offering you the possibility to put as little cash down as possible.
                                </p>
                            </Col>
                            <Col md={6}>
                                <h5>
                                    You think that you won’t get enough for your trade!
                                </h5>
                                <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/03025907/trade-1.png" />
                                <p>
                                    At Janex…
                                    <br />
                                    <br />
                                    We have tools to enable us to position your trade in its best market. This allows us to offer you the highest trade-in value possible!
                                </p>
                            </Col>
                            <Col md={6}>
                                <h5>You think that your current credit situation may be an issue.



                                </h5>
                                <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/03030447/credit-check-1.png" />
                                <p>
                                    At Janex…
                                    <br />
                                    <br />
                                    We have different programs to assist you with building your credit or to enhance your borrowing power!
                                </p>
                            <br />
                            </Col>
                            <p>Call (613) 260-0373 and let one of our friendly and professional sales associates take care of you!</p>

                        </Row>
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

                        <Tabs   defaultActiveKey="sales" id="uncontrolled-tab-example" className="mb-3">
  <Tab  eventKey="sales" title="Sales" className="contact-sales">
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

export default Sales;