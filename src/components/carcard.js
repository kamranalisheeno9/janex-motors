import React, { useState } from 'react';
import './carcard.css'
import { Container, Col, Row, Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
const CarCard = (props) => {

    const carCardData=[
        {
            year:"2021",
            company:"Audi",
            name:"Q3 45 Komfort",
            mileage:"18,728",
            price:"47,578",
            img:"https://images.edealer.ca/15/98858546.jpeg"
        },
        {
            year:"2021",
            company:"Toyota",
            name:"Sienna XSE 7- Passenger",
            mileage:"10,573",
            price:"69,578",
            img:"https://images.edealer.ca/15/99560251.jpeg"
        },
        {
            year:"2021",
            company:"Honda",
            name:"Accord LX 1.5T",
            mileage:"20,530",
            price:"30,988",
            img:"https://images.edealer.ca/15/100394117.jpeg"

        },
        {
            year:"2020",
            company:"Honda",
            name:"Civic LX ",
            mileage:"5,088",
            price:"27,578",
            img:"https://images.edealer.ca/15/98763895.jpeg"
            
        },
        {
            year:"2021",
            company:"Honda",
            name:"Civic LX ",
            mileage:"61,276",
            price:"26,788",
            img:"https://images.edealer.ca/15/99560229.jpeg"

        },
    ]

    const responsive = {
        large: {
          breakpoint: { max: 3000, min: 1300 },
          items: 5,
          slidesToSlide: 1 
        },
        desktop: {
          breakpoint: { max: 1300, min: 1130 },
          items: 4,
          slidesToSlide: 1 
        },
        tablet: {
          breakpoint: { max: 1130, min: 464 },
          items: 3,
          slidesToSlide: 1 
        },
        tabs: {
          breakpoint: { max: 790, min: 554 },
          items: 2,
          slidesToSlide: 1 
        },
        mobile: {
          breakpoint: { max: 554, min: 0 },
          items: 1,
          slidesToSlide: 1,
          dots:true 
        }
      };


    return (
        <>
            <div className="" >
            <Carousel
  swipeable={true}
  draggable={true}
  showDots={true}
  responsive={responsive}
  infinite={true}
  keyBoardControl={true}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["mobile"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
        {carCardData.map((data,index)=>{
            return(
            <div key={index}  className="car-card" >
                <div className="card-inner-container">
                <img className="car-card-img" src={data.img} />
                        <div className="car-card-text">
              <p className="car-year-name">{data.year} {data.company}</p>
                <p className="car-name">{data.name}</p>

                </div>
                    <div className="car-card-milage">
                        <p>Mileage<br />{data.mileage}km</p>
                        <h5>${data.price} <br /> <span>+Sales Taxes</span></h5>
                    </div>
                    </div>
                    <button className="card-car-btn">View Featured Special</button>
            </div>

            )
        })}
            
</Carousel>
            </div>

        </>
    );
}

export default CarCard;