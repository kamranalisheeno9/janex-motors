import React, { useEffect, useState } from 'react';
import './inventory.css'
import Header from '../components/header'
import Footer from '../components/footer'
import CarData from './carData.json'
import { Formik } from 'formik';
import * as yup from 'yup';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { Container, Col, Row, InputGroup, Button, FormControl, Carousel, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Inventory = (props) => {

    const [data, setData] = useState(CarData.cars)
    const [filter, setFilter] = useState("data")
    const [search, setSearch] = useState('');


    const [year, setYear] = useState(["2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010",])
    const [makedata, setMakeData] = useState(["Acura", "Audi", "BMW", "Buick", "Cadillac", "Dodge", "Ford", "Ferrari", "Honda", "Hyundai", "Jaguar", "Range Rover"])
    const [modeldata, setModelData] = useState(["4Runner", "A4", "A5", "Accent", "Accord", "C-Class", "C-HR", "CR-V", "CX-7"])
    const [bodydata, setBodyData] = useState(["Coupe", "Hatchback", "Other", "Pickup", "SUV", "Sedan", "Vans"])
    const [pricedata, setPriceData] = useState(["0", "10000", "20000", "30000", "50000", "50000", "60000", "70000",])
    const filterData = data.filter(car => {
        return car.year.toLowerCase().includes(search.toLowerCase())
    })

    const filterDataMake = data.filter(car => {
        return car.make.toLowerCase().includes(search.toLowerCase())
    })
    const YearFilter = (e, year) => {
        setSearch(year)

    }
    const MakeFilter = (make) => {
        setSearch(make)


    }
    const ModelFilter = (model) => {
        setSearch(model)

    }
    const BodyFilter = (body) => {
        setSearch(body)

    }
    const PriceFilter = (price) => {
        setSearch(price)

    }



    return (
       
                <>

                    <div className="header-div">

                        <Header />
                    </div>

                    <Container fluid className="page-content-container mt-2 mb-2">
                        <Container className="sell-car">
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
                            <Row className="justify-content-around qualify-line-inventory ">
                                <Col md={6} xs={6} ><h5>Qualify for financing now and get your FREE credit score</h5></Col>
                                <Col md={3} xs={6}>
                                    <img src='https://assets.askava.ai/v1/assets/svg/check-your-rate-shimmer-2230f76e02f6dc58516dca4dc903462e.svg' />
                                </Col>
                                <Col md={2} sm={3}>

                                    <img src='https://assets.askava.ai/v1/assets/img/Data-Provided-by-Equifax-w-128-d380e28e390535d4956619fe173624ac.png' />
                                </Col>
                            </Row>
                        </Container>
                        <Container>
                            <Row className="search-dropdown-container">
                                <Col sm={8} className=" dropdown-searches mt-2 mb-2">
                                    <Dropdown className="search-dropdown-container">
                                        <Dropdown.Toggle variant="" className="search-dropdown" id="dropdown-button-drop-down">
                                            Year
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {year.map((year, index) => {
                                                return (

                                                    <Dropdown.Item key={index} onClick={(e) => YearFilter(e, year)} >{year}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="search-dropdown-container">
                                        <Dropdown.Toggle variant="" className="search-dropdown" id="dropdown-button-drop-down">
                                            Make
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {makedata.map((make, index) => {
                                                return (

                                                    <Dropdown.Item key={index} onClick={(e) => MakeFilter(make)} >{make}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="search-dropdown-container">
                                        <Dropdown.Toggle variant="" className="search-dropdown" id="dropdown-button-drop-down">
                                            Model
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {modeldata.map((model, index) => {
                                                return (

                                                    <Dropdown.Item key={index} onClick={(e) => ModelFilter(model)} >{model}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="search-dropdown-container">
                                        <Dropdown.Toggle variant="" className="search-dropdown" id="dropdown-button-drop-down">
                                            Body Style
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {bodydata.map((body, index) => {
                                                return (

                                                    <Dropdown.Item key={index} onClick={(e) => BodyFilter(body)} >{body}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <Dropdown className="search-dropdown-container">
                                        <Dropdown.Toggle variant="" className="search-dropdown" id="dropdown-button-drop-down">
                                            Price
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>
                                            {pricedata.map((price, index) => {
                                                return (

                                                    <Dropdown.Item key={index} onClick={(e) => PriceFilter(price)} >{price}</Dropdown.Item>
                                                )
                                            })}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Col>
                                <Col md={4}>
                                    <InputGroup className=" search-bar mb-3">
                                        <FormControl
                                            aria-label="Example text with button addon"
                                            aria-describedby="basic-addon1"
                                            placeholder="Search Inventory"
                                        />
                                        <Button variant="" className="search-icon" id="button-addon1">
                                            <BiSearch />
                                        </Button>
                                    </InputGroup>

                                </Col>
                            </Row>
                        </Container>

                        {data.map((car, index) => {
                            return (
                                <Container key={index} className="car-container">
                                    <Row className="justify-content-between">
                                        <Col md={5}>

                                            <Carousel indicators={false}>
                                                <Carousel.Item interval={1000}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={car.image1}
                                                        alt="First slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item interval={500}>
                                                    <img
                                                        className="d-block w-100"
                                                        src={car.image2}

                                                        alt="Second slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={car.image3}
                                                        alt="Third slide"
                                                    />

                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img
                                                        className="d-block w-100"
                                                        src={car.image4}
                                                        alt="Third slide"
                                                    />

                                                </Carousel.Item>
                                            </Carousel>
                                           <Link to="/vehicle" className="car-link">  <div className="inventory-carousel-view" onClick={()=>props.currentData(car)}>
                                                View More Photos
                                            </div>
                                            </Link>
                                        </Col>
                                        <Col md={7} className="main-car-card-name">
                                            <h5 >{car.year} {car.company} {car.name} {car.transmission}</h5>
                                            <p className="car-trade-text">{car.trade}</p>
                                            <p className="car-price-text">Price : <span> $ {car.price} </span></p>
                                            <p className="car-mileage-text">Mileage : {car.mileage} km</p>
                                            <Row>
                                                <Col md={6}>
                                                    <ul className="car-ul-details">
                                                        <li className="even">Body Style: <span>{car.body}</span> </li>
                                                        <li className="odd">Engine: <span>{car.engine}</span> </li>
                                                        <li className="even">Exterior Color: <span>{car.exterior}</span> </li>
                                                        <li className="odd">Condition: <span>{car.condition}</span> </li>
                                                    </ul>
                                                </Col>
                                                <Col md={6}>
                                                    <ul className="car-ul-details">
                                                        <li className="even">Transmission: <span>{car.transmission}</span> </li>
                                                        <li className="odd">Drivetrain: <span>{car.drivetrain}</span> </li>
                                                        <li className="even">Stock #: <span>{car.stock}</span> </li>
                                                        <li className="odd">City: <span>{car.city}</span> </li>
                                                    </ul>
                                                </Col>
                                            </Row>

                                            <Row className="justify-content-between">
                                                <Col md={4} className="mt-2 mb-2">
                                                    <Link to="/vehicle" className="car-view-details"><div onClick={()=>props.currentData(car)} >View Details</div></Link>
                                                </Col>
                                                <Col md={4} className="mt-2 mb-2">
                                                    <Link to="fiance" className="car-financing"><div >Apply For Financing</div></Link>
                                                </Col>
                                                <Col md={4} className="car-view-details-img ">
                                                    <img src="https://static.edealer.ca/carproof/images/carfax-canada-lrg.png" />
                                                </Col>
                                            </Row>
                                            <Row className="justify-content-between janex-number">
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
                                            <p className="car-lower-text">{car.detail}</p>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        })}


                    </Container>

                    <Footer />

                </>
           
    );
}

export default Inventory;