import React, { useEffect, useState } from 'react';
import './vehicle.css'
import Header from '../components/header'
import Footer from '../components/footer'
import FinanceForm from '../components/applyfinanceform'
import InformationForm from '../components/informationform'
import CarData from './carData.json'
import { Container, Col, Row, InputGroup, Button, FormControl, Carousel, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { ImCheckmark } from 'react-icons/im';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
const Vehicle = (props) => {

    const [activeImg, setActiveImg] = useState(0)
    const [optionData1, setOptionData1] = useState([
        {
            header: "Body Exterior",




            data: ["Heated door mirrors	", "Power door mirrors	", "Spoiler	", "Turn signal indicator mirrors",],

        },
        {

            header: "Lighting, Visibility and Instrumentation",
            data: [" Clock - In-dash", "Delay-off headlights", "Exterior parking camera rear	", "External temp - External temperature display", "Forward Collision - Audi pre sense front mitigation", "Front reading lights", "Fully automatic headlights", "Rear window defroster", "Rear View Camera ", "Rear reading lights"],
        }
    ])

    const [optionData2, setOptionData2] = useState([
        {
            header: "Powertrain",
            data: ["Manual-shift auto", "Mode select transmission", "Variable valve control"],

        },
        {
            header: "Seats and Trim",
            data: ["Front centre armrest", "Heated front seats", "Leather upholstery", "Power 4-way driver lumbar support", "Split folding rear seat"],

        },
        {
            header: "Suspension/Handling",
            data: ["Alloy wheels", "Front anti-roll bar", "Four wheel independent suspension", "Power steering", "Speed-sensing steering"],

        },
    ])
    const [TSData1, setTSData1] = useState([
        {
            header: "ABS Brakes",




            data: ["ABS",],

        },
        {





            header: "Air Conditioning",
            data: ["Air filtration	Interior air filtration", "Front air conditioning Automatic", "Front air conditioning zones	Dual"],
        },
        {





            header: "Doors",
            data: ["left rear passenger door type	Conventional", "Rear door type	Liftgate", "right rear passenger door type	Conventional"],
        }
    ])

    const [TSData2, setTSData2] = useState([
        {


            header: "Passenger Seat",
            data: ["Heated	Multi-level heating  ", "Manual Adjustments	4"],

        },
        {




            header: "Rear Seats",
            data: ["Center armrest	Yes", "Folding	Fold forward seatback", "Reclining	Manual"],

        },
        {
            header: "Seatbelts",
            data: ["Rear center seatbelt	3-point belt", "Seatbelt pretensioners	Front and rear"],

        },
    ])



    useEffect(() => {
        console.log(props.data)
    })

    return (

        <>

            <div className="header-div">

                <Header />
            </div>
            <Container className="vehicle-all-container">
                <Container className="page-content-container mt-2 mb-2">
                    <Container className="vehicle-main-img">
                        <img src="https://static.edealer.ca/promotions/dealer6731609/user6743580/JanexAutoSales-VLPBanner-D1-V2-1612192437.jpg" />
                    </Container>
                    <Container className="vehicle-price-container">
                        <Row>
                            <Col md={8}>
                                <h5 >{props.data.year} {props.data.company} {props.data.name} {props.data.transmission}</h5>
                                <p className="car-trade-text">{props.data.trade}</p>
                                <p className="vehicle-call">Call us: <span>613-260-0373</span></p>
                            </Col>
                            <Col md={4}>
                                <h4 className="vehicle-price">Price : <span>$ 48,912</span></h4>
                                <div className="views-container">
                                    <img src="https://static.edealer.ca/images/red-flame.png" />
                                    <div className="views-text">
                                        <p>37 views <span className="views-days">in the last 7 days</span></p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row className="justify-content-between">
                            <Col md={6}>

                                <Carousel controls={false} indicators={false} activeIndex={activeImg} >
                                    <Carousel.Item interval={1000}>
                                        <img
                                            className="d-block w-100"
                                            src={ props.data.image1}
                                            alt="First slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item interval={500}>
                                        <img
                                            className="d-block w-100"
                                            src={props.data.image2}

                                            alt="Second slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={props.data.image3}
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src={props.data.image4}
                                            alt="Third slide"
                                        />

                                    </Carousel.Item>
                                </Carousel>
                                <Row className="mb-3">
                                    <Col xs={3} >
                                        <img
                                        className="d-block w-100"
                                        onClick={()=>setActiveImg(0)}
                                        src={props.data.image1} />
                                    </Col>
                                    <Col xs={3} >
                                        
                                        <img
                                        className="d-block w-100"
                                        onClick={()=>setActiveImg(1)}
                                        src={props.data.image2} />

                                    </Col>
                                    <Col xs={3}>
                                        <img
                                        onClick={()=>setActiveImg(2)}
                                        className="d-block w-100"
                                        src={props.data.image3} />
                                        
                                    </Col>
                                    <Col xs={3}>
                                        <img
                                        className="d-block w-100"
                                        onClick={()=>setActiveImg(3)}
                                        src={props.data.image4} />

                                    </Col>
                                </Row>
                                <div className="inventory-carousel-view" >
                                    Stock #: {props.data.stock}
                                </div>
                            </Col>
                            <Col md={5}>
                                <Row>
                                    <Col className="vehicle-mileage">
                                        <p> Mileage: 123</p>
                                    </Col>
                                </Row>
                                <Row className=" vehicle-janex-number">
                                    <Col md={5} >
                                        <p> <FaMapMarkerAlt /> Janex Auto Sales </p>
                                    </Col>
                                    <Col md={2}  >
                                        <p className="middle-line" >|</p>
                                    </Col>
                                    <Col md={5} >
                                        <p > <BsFillTelephoneFill />  613-260-0373 </p>

                                    </Col>

                                </Row>
                                <Link to="/finance" className="car-financing "><div className="vehicle-finance" >Apply For Financing</div></Link>
                                <Row className="vehicle-details">
                                    <Col>
                                        <ul className="car-ul-details">
                                            <li className="even">Body Style: <span>{props.data.body}</span> </li>
                                            <li className="odd">Engine: <span>{props.data.engine}</span> </li>
                                            <li className="even">Exterior Color: <span>{props.data.exterior}</span> </li>
                                            <li className="odd">Condition: <span>{props.data.condition}</span> </li>
                                            <li className="even">Transmission: <span>{props.data.transmission}</span> </li>
                                            <li className="odd">Drivetrain: <span>{props.data.drivetrain}</span> </li>
                                            <li className="even">Stock #: <span>{props.data.stock}</span> </li>
                                            <li className="odd">City: <span>{props.data.city}</span> </li>

                                        </ul>
                                    </Col>

                                </Row>
                                <div>
                                    <h6>Description</h6>
                                    <p className="car-lower-text">{props.data.detail}</p>

                                </div>
                                <div className="vehicle-small-img">
                                    <img src="https://carfaxcanadabadgingcdn.azureedge.net/content/images/v3/en/Logo_NoBadges.svg" />

                                </div>
                                <Row className="justify-content-center vehicle-credit ">
                                    <Col xs={8} ><h5>Qualify for financing now get your FREE credit score</h5></Col>
                                    <Col xs={7} >
                                        <img src='https://assets.askava.ai/v1/assets/svg/check-your-rate-shimmer-2230f76e02f6dc58516dca4dc903462e.svg' />
                                    </Col >
                                    <Col xs={7} className="equifax" >

                                        <img src='https://assets.askava.ai/v1/assets/img/Data-Provided-by-Equifax-w-128-d380e28e390535d4956619fe173624ac.png' />
                                    </Col>
                                </Row>

                            </Col>
                        </Row>
                    </Container>


                </Container>
                <Container className="sell-car vehicle-sell-car">

                    <Row className="justify-content-center">
                        <Col md={3} className="sell-car-text">
                            <h3>Sell us your car! </h3>
                            <p>Get an offer for your vehicle<br />from our dealership today.</p>
                        </Col>
                        <Col md={6}>
                            <InputGroup className="mb-3 input-sell-car">
                                <FormControl
                                    aria-label="Example text with button addon"
                                    aria-describedby="basic-addon1"
                                    className="input-container"
                                    placeholder="Enter The Year, Make, Model and Trim"
                                />
                                <Button variant="outline-secondary" className="sell-btn" id="button-addon1">
                                    Go!
                                </Button>
                            </InputGroup>
                        </Col>
                        <Col md={2}>
                            <img src="https://widget.askava.ai/_next/static/images/kbb_logo-e505b2977f066ee8a2dae7ecfc3877b7.png" />
                        </Col>
                    </Row>

                </Container>
                <Container>
                    <Row>
                        <Col md={4}>
                            <FinanceForm />
                        </Col>
                        <Col md={4} className="vehicle-location-container">
                            <h6 className="vehicle-location">Location
                                <span><a href="https://www.google.com/maps?daddr=1470+Hunt+Club+Road,+Ottawa,+Ontario,+K1T+1M6" target="_blank">Get Directions</a></span>
                            </h6>
                            <div className="location-text-vehicle">
                                <h5>Janex Auto Sales</h5>
                                <p>1470 Hunt Club Road, Ottawa, Ontario, K1T 1M6</p>
                            </div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d89715.36809736837!2d-75.70826876848332!3d45.35678019707127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x4cce08e7edf4e809%3A0xe8344e4e09fbbad!2s1470%20Hunt%20Club%20Rd%2C%20Ottawa%2C%20ON%20K1T%201M6%2C%20Canada!3m2!1d45.3568016!2d-75.638229!5e0!3m2!1sen!2s!4v1638111124520!5m2!1sen!2s" width="100%" height="100" allowfullscreen="" loading="lazy"></iframe>
                            <h6 className="location-number">Call us: 613-260-0373</h6>
                        </Col>
                        <Col md={4}>
                        <InformationForm />

                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Accordion className="vehicle-data-accordion" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Convenience Package - Included In Package</Accordion.Header>
                            <Accordion.Body>
                                <Row>
                                    <Col md={5}>
                                        <div className="vehicle-details-container">
                                            <p className="vehicle-details-item">Advanced Key	 <span><ImCheckmark /></span></p>
                                        </div>
                                    </Col>
                                    <Col md={5}>
                                        <div className="vehicle-details-container">
                                            <p className="vehicle-details-item">Front & Rear Parking Sensors<span><ImCheckmark /></span></p>
                                        </div>
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Accordion className="vehicle-data-accordion" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Options</Accordion.Header>
                            <Accordion.Body>
                                <Row className="vehicle-details-row">
                                    <Col md={5}>
                                        {optionData1.map((data1, index) => {
                                            return (
                                                <div className="vehicle-details-container" key={index}>
                                                    <h6 className="vehicle-details-header">{data1.header} <span>Standard</span></h6>
                                                    {data1.data.map((details, i) => {
                                                        return (
                                                            <p key={i} className="vehicle-details-item">{details} <span><ImCheckmark /></span></p>

                                                        )
                                                    })}
                                                </div>

                                            )
                                        })}
                                    </Col>
                                    <Col md={5}>
                                        {optionData2.map((data2, index) => {
                                            return (
                                                <div className="vehicle-details-container" key={index}>
                                                    <h6 className="vehicle-details-header">{data2.header} <span>Standard</span></h6>
                                                    {data2.data.map((details, i) => {
                                                        return (
                                                            <p key={i} className="vehicle-details-item">{details} <span><ImCheckmark /></span></p>

                                                        )
                                                    })}
                                                </div>

                                            )
                                        })}
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Accordion className="vehicle-data-accordion" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Technical Specifications</Accordion.Header>
                            <Accordion.Body>
                                <Row className="vehicle-details-row">
                                    <Col md={5}>
                                        {TSData1.map((data1, index) => {
                                            return (
                                                <div className="vehicle-details-container" key={index}>
                                                    <h6 className="vehicle-details-header">{data1.header} <span>Standard</span></h6>
                                                    {data1.data.map((details, i) => {
                                                        return (
                                                            <p key={i} className="vehicle-details-item">{details} <span><ImCheckmark /></span></p>

                                                        )
                                                    })}
                                                </div>

                                            )
                                        })}
                                    </Col>
                                    <Col md={5}>
                                        {TSData2.map((data2, index) => {
                                            return (
                                                <div className="vehicle-details-container" key={index}>
                                                    <h6 className="vehicle-details-header">{data2.header} <span>Standard</span></h6>
                                                    {data2.data.map((details, i) => {
                                                        return (
                                                            <p key={i} className="vehicle-details-item">{details} <span><ImCheckmark /></span></p>

                                                        )
                                                    })}
                                                </div>

                                            )
                                        })}
                                    </Col>
                                </Row>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                </Container>
            </Container>
            <Footer />

        </>

    );
}

export default Vehicle;