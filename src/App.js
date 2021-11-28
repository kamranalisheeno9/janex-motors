import './App.css';
import Home from './pages/home'
import SalesDept from './pages/saledept'
import ServiceDept from './pages/servicedept'
import AboutUs from './pages/aboutus'
import Contact from './pages/contact'
import Finance from './pages/finance'
import SellTrade from './pages/selltrade'
import Vehicle from './pages/vehicle'
import Inventory from './pages/inventory'
import FinanceDepartment from './pages/financedept'
import ScrollToTop from './components/scrolltotop'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
function App() {
  const [currentCarData,setCurrentCarData]=useState({})

  
  return (
    <Router>
      <ScrollToTop />
      <Switch>
          
          <Route path="/vehicle">
      <Vehicle data={currentCarData} />
          </Route>
          <Route path="/inventory">
      <Inventory currentData={setCurrentCarData} />
          </Route>
          <Route path="/selltrade">
      <SellTrade />
          </Route>
          <Route path="/financedepartment">
      <FinanceDepartment />
          </Route>
          <Route path="/finance">
      <Finance />
          </Route>
          <Route path="/contact">
      <Contact />
          </Route>
          <Route path="/about">
      <AboutUs />
          </Route>
          <Route path="/service">
      <ServiceDept />
          </Route>
          <Route path="/salesdepartment">
      <SalesDept />
          </Route>
          <Route path="/">
      <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
