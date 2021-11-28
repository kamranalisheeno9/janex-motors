import React, { useState } from 'react';
import './financedept.css'
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
const Services = (props) => {


    return (
        <>

            <div className="header-div">

                <Header />
            </div>
            <div className="page-name-container">
                <Row className="justify-content-between page-name-header">
                    <Col md={6}>
                        <h2>Finance Department</h2>
                    </Col>
                    <Col md={6}>
                        <div className="nav-page-links">
                            <ul>
                                <li><Link to="">Janes Autos Sales</Link></li>
                                <li>|</li>
                                <li>Finance Department</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container fluid className="page-content-container">
                <Row className="justify-content-center">
                    <Col lg={9} xs={12} className="text-content-container">
                        <h5>Auto Financing in Ottawa.</h5>
                        <br />
                        <h5 className="top-text">
                        Good Credit, Bad Credit, No Credit, Bankrupt, Hard-To-Prove Income, Slow Payments, Repossession, Pension OK! Get pre-approved today.    
<br />                        </h5>
<h5>
Looking for auto financing in Ottawa?

</h5>
<p>
Welcome to Janex Auto Sales – the easiest hassle-free-guaranteed auto financing in Ottawa! As you visit our website you will see how we make it fast and easy for you to get approved for your next vehicle. There is no credit situation too large for us to handle. Whether you have been turned down prior to arriving here or think you can get approved anywhere, just give us a chance and we will prove you wrong! We have many different sources of lenders as well as our own in-house financing program. We have many different options for you to choose from so that we can make this process as easy as possible for you!
</p>
<h5>
Fast and Friendly
</h5>
<p>
At Janex Auto Sales we have many friendly and competent staff looking forward to helping you. Once you apply online or call to apply over the phone, one of our friendly advisers will contact you within a few hours to go over your application and discuss the process with you on how we can get you driving TODAY.
</p>
<div className="finance-btn-container">
<Link to="/finance" className="finance-btn-link"> <button className="finance-btn">Apply Now</button></Link>
</div>
<p>
Thanks for choosing Janex Auto Sales – the very best in bad credit car loans and financing brokering in Ottawa.
</p>
<p>
* Some conditions apply for approval<br />
** Deposit may be required to obtain loan<br />
*** Interest rates between 3.99% – 29.99%<br />
</p>
<h5>Your privacy is important to us!</h5>
<p>
Janex Auto Sales takes your privacy seriously and does not rent or sell your personal information to third parties without your consent.
</p>
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

export default Services;