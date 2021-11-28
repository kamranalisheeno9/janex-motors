import React, { useState } from 'react';
import './servicedept.css'
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
                        <h2>Service Department</h2>
                    </Col>
                    <Col md={6}>
                        <div className="nav-page-links">
                            <ul>
                                <li><Link to="">Janes Autos Sales</Link></li>
                                <li>|</li>
                                <li>Service Department</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
            <Container fluid className="page-content-container">
                <Row className="justify-content-center">
                    <Col lg={9} xs={12} className="text-content-container">
                        <h5>Service Department at Janex Auto</h5>
                        <br />
                        <p className="top-text">
                        In the service department at Janex Auto, we focus on our customers satisfaction.  Our top priority is getting the job done right and back to our customers in a timely manner.  We understand how important it is to work around your schedule when maintaining your car.  We will provide you with an estimated cost and timeline before you car goes into one of our bays.
<br />
<br />
Our highly trained technicians are here to provide the best automotive service available in the Ottawa and surrounding area.  With years of experience, our technicians are capable of handling any repair job put in front of them no matter what the vehicle.  Big or small, they will get the job done for you.  Whether the car is new or pre-owned, you can be confident with the professionalism Janex Auto Sales is willing to offer.
<br />
<br />
If you are in need of an oil change, tire rotation, brake repair or anything in between.  We are are here to assist. We will take the appropriate amount of time to diagnose the issue right the first time.   Located conveniently in Ottawa we are here for all your vehicle maintenance and repair needs.   Understanding that your car is important to you, we will treat it with the care and respect we would treat our own cars.
<br />
<br />
Contact us today to book your next appointment.  you will not be disappointed.  Allow our staff to prove how committed we are to serving you right.
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