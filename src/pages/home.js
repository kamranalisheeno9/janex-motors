import React, { useEffect, useState } from 'react';
import './home.css'
import Header from '../components/header'
import Footer from '../components/footer'
import CarCard from '../components/carcard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CarData from './carData.json'
import { Container, Col, Row, InputGroup, FormControl,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const Home = (props) => {

    // useEffect(()=>{
    //     console.log(CarData)
       
    // },)
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 
        }
      };

      const reviewData=[
          {
              name:"Marvin O",
              description:" I was searching for a car but I did not know what i was searching for and Sal Alyche, the salesman  helped me find the perfect car for me. He was very helpful and he responded to all my questions.  I am a french speaking client from Québec and he was even able to talk to me in french. Loved my experience at Janex.   "
          },
          {
              name:"Oliver L",
              description:" I was searching for a car but I did not know what i was searching for and Sal Alyche, the salesman  helped me find the perfect car for me. He was very helpful and he responded to all my questions.  I am a french speaking client from Québec and he was even able to talk to me in french. Loved my experience at Janex.   "
          },
          {
              name:"Sthephanie O",
              description:" I was searching for a car but I did not know what i was searching for and Sal Alyche, the salesman  helped me find the perfect car for me. He was very helpful and he responded to all my questions.  I am a french speaking client from Québec and he was even able to talk to me in french. Loved my experience at Janex.   "
          },
          {
              name:"Fradin S",
              description:" I was searching for a car but I did not know what i was searching for and Sal Alyche, the salesman  helped me find the perfect car for me. He was very helpful and he responded to all my questions.  I am a french speaking client from Québec and he was even able to talk to me in french. Loved my experience at Janex.   "
          },
      ]

    return (
        <>

            <Container fluid className="background-image">
                <div className="background-img-shadow">

           <Header />
            <div className="home-btns-container">
                <div className="text-container">
                    <h1>Welcome To <br />Janex Automotive</h1>
                    <h4>WHERE WOULD YOU LIKE TO GO? </h4>
           
                </div>
                <Container className="home-btn-container">
                <Link to="/inventory"> <div className="home-btn">Inventory </div></Link>
                    <Link to="/salesdepartment"> <div className="home-btn">Sales Department</div></Link>
                    <Link to="/finance">  <div className="home-btn">Apply For Finacing</div></Link>
                    <Link to="/service">   <div className="home-btn">Service Department</div></Link>
                    <Link to="/about">  <div className="home-btn">About Us</div></Link>
                    <Link to="/selltrade">   <div className="home-btn">Sell Or Trade Your Car</div></Link>
                </Container>
            </div>
           </div>
           
            </Container>
            <Container fluid className="home-finance-container">
               <Container>
                   <Row className="justify-content-around home-finincing-line ">
                       <Col md={6} xs={6} ><h5>Qualify for financing now and get your FREE credit score</h5></Col>
                       <Col md={3} xs={6}>
                           <img src='https://assets.askava.ai/v1/assets/svg/check-your-rate-shimmer-2230f76e02f6dc58516dca4dc903462e.svg' />
                       </Col>
                       <Col md={2} sm={3}>

                           <img src='https://assets.askava.ai/v1/assets/img/Data-Provided-by-Equifax-w-128-d380e28e390535d4956619fe173624ac.png' />
                       </Col>
                   </Row>
               </Container>

           </Container>
           <Container fluid className="featured-specials">
               <h1>Featured Specials</h1>
                <p>New and popular items at competitive prices.</p>
           </Container>
           <Container className="card-container-home">
           <button className="card-search-btn">
               View All
               </button>
           </Container>
               <div className="car-car-home-container">

               <CarCard />
               </div>

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
        <Container fluid className="main-home-container">
            <Container fluid className="welcome-text">
                <Container className="home-text-inner-container">
                <h1>Welcome to Janex Auto Sales</h1>
                    <p>Despite all of our attempts to socially distance ourselves, Janex is attempting to adapt in this environment by reacting in a positive manner. We are still open in person and online and will strive to provide you with a pleasant, clean, and responsible experience. Janex will drive cars to your home, and we will disinfect in your driveway prior to the test drive. Our online tools will allow you to purchase as well as finance from the safety of your home.
                        <br />
                        <br />
                        <br />
                        Need service? We will attempt to pick up your vehicle and bring it home to you as well.
                        <br />
                        <br />
                        <br />
                        We will all get through this, business will go on!
                    </p>
                    <Link to="contact">
                    <button className="learn-more-search-btn">
               Learn More
               </button>
               </Link>

                </Container>
                 </Container>
</Container>
<Container fluid className="located-text">
    <p>We are convenietly located at <a target="_blank" href="https://www.google.com/maps/place/Janex+Auto+Sales+%26+Service/@45.356825,-75.6382,15z/data=!4m5!3m4!1s0x0:0x535e8c99918483d6!8m2!3d45.3568462!4d-75.638218">We are conveniently located at</a></p>
</Container>
<div className="map-container" >
<iframe className="map-location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11214.412133057087!2d-75.6382!3d45.356825!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x535e8c99918483d6!2sJanex%20Auto%20Sales%20%26%20Service!5e0!3m2!1sen!2s!4v1637640271132!5m2!1sen!2s" loading="lazy"></iframe>
</div>
<div className="google-review-container">
    <h1>Google Reviews</h1>        
        <p>We are committed to making you a long-lasting customer and friend.</p>
</div>
<Container className="review-carousel">
<Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
    {reviewData.map((data,index)=>{
        return(

            <div key={index} className="review-card-container" >
                <div className="review-line">
                    <h2>G</h2>
                    <h4>{data.name}</h4>
                </div>
                <p>
                {data.description}
                    </p>
                    <h6 className="read-more">Read more</h6>
            </div>
            
        )
    })}
</Carousel>
</Container>
           <Footer />
      
        </>
    );
}

export default Home;