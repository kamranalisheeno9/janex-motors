import React, { useState } from 'react';
import './header.css'
import { Container,Col,Row,Tabs,Tab } from 'react-bootstrap';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header=(props)=> {

    const [menuDisplay,setMenuDisplay]=useState(false)

    return (
        <>
        <Container fluid className="header-container" >
            <Row className="justify-content-between header-row">
                <Col lg={3} md={5} className="header-info-col">
                    <ul className="header-list">
                    
                        <li>1470 Hunt Club Rd,<br />
                        Ottawa, ON K1T 1M6</li>
                        <li>(613) 260-0373</li>
                        <li>(888) 324-7307</li>
                        <li className="view-hours" >View Hours 
                        <div  className="view-tabs ">
                        <Tabs   defaultActiveKey="sales" id="uncontrolled-tab-example" className="mb-3">
  <Tab  eventKey="sales" title="Sales">
      <ul className="sales-list">
          <li>Monday - Thursday <span>	9:00am - 7:00pm </span></li>
          <li>Friday <span>	9:00am - 6:00pm </span></li>
          <li>Saturday <span>	9:00am - 5:00pm </span> </li>
          <li>Sunday <span>	Closed </span> </li>
      



      </ul>
  </Tab>
  <Tab eventKey="services" title="Services">
  <ul className="sales-list">
          <li>Monday - Thursday <span>	8:30am - 5:30pm </span></li>
          <li>Saturday - Sunday <span>	Closed </span> </li>
      </ul>
  </Tab>
 
</Tabs>
</div>
                        </li>
                    </ul>
                </Col>
                <Col lg={2} md={3} sm={3} xs={4}>
                 <Link to="/">   <img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/02155108/janex_auto_sales.png" alt="logo" /></Link>

                </Col>
                <Col md={2} sm={3} xs={4}>
                <h5 className="menu-icon" onClick={()=>setMenuDisplay(true)}>Menu <GiHamburgerMenu className="icon" /> </h5>
                <ul className={menuDisplay ? "menu-content-show" : "menu-content"}>
                      <li>
                
                <h5 className="icon-cross" onClick={()=>setMenuDisplay(false)} >Jane X <span> <IoClose  /></span> </h5>
                          
                          </li>  
                     <Link to="/"><li className="active">Home</li></Link>
                     <Link to="/inventory"> <li>All Inventory</li></Link>
                     <Link to="/salesdepartment"><li>Sales Department</li></Link>
                     <Link to="/finance"><li>Apply For Finacing</li></Link>
                     <Link to="/service"> <li>Service Department</li></Link>
                     <Link to="/selltrade"> <li>Sell or Trade Your Car</li></Link>
                    <Link to="/about"> <li>About Us</li></Link>
                    <Link to="/">  <div className="logo-icon"><img src="https://ddztmb1ahc6o7.cloudfront.net/janexauto/wp-content/uploads/2021/06/08120655/logo-janex-black.png" /></div></Link>
                </ul>
            
                </Col>
            </Row>
            
        </Container>
        
        </>
    );
}

export default Header;