import React, { useState } from 'react';
import './selltrade.css'
import Header from '../components/header'
import Footer from '../components/footer'
import TradeImg from '../assets/images/trade.JPG'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../components/textField'
import { Container, Col, Row, Form, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const FinanceApply = (props) => {
    let history = useHistory();
    const [page1, setPage1] = useState(true)
    const [page2, setPage2] = useState(false)
    const [page3, setPage3] = useState(false)
    const [modelYear, setModelYear] = useState([2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2016, 2017, 2018, 2019, 2020, 20021])
    const [make, setMake] = useState(["Acura", "Audi", "BMW", "Buick", "Cadillac", "Dodge", "Ford", "Ferrari", "Honda", "Hyundai", "Jaguar", "Range Rover"])
    const [modelname, setModelName] = useState(["EL", "Integra", "TL",])
    const [trim, setTrim] = useState(["3dr Sports Cpe GS Auto", "3dr Sports Cpe GS Manual", "3dr Sports Cpe SE Auto", "3dr Sports Cpe SE Manual", "3dr Sports Cpe Type-R Manual"])

    const [financeData, setFinanceData] = useState({})

    const Validate = yup.object({

        firstname: yup.string()
            .required('You must include a valid first name'),

        lastname: yup.string()
            .required('You must include a valid last name'),
        terms: yup.bool().required().oneOf([true], 'You must give consent to obtain your "Free Trade-In Appraisal "'),

        email: yup.string()
            .required('You must include a valid email address'),
        phone: yup.string()
            .required('You must include a valid phone'),
        modelyear: yup.string()
            .required('You must select modal year'),
        modelname: yup.string()
            .required('You must select modal name'),

        trim: yup.string()
            .required('You must select trim'),

        vehiclemileage: yup.string()
            .max(350000)
            .required('Vehicle Mileage Should not exceed 350000 km'),

        vehiclecondition: yup.string()
            .required('You must select vehicle condition'),

        make: yup.string()
            .required('You must select make'),

        postcode: yup.string()
            .required('You must include a valid Post Code'),

        province: yup.string()
            .required('You must include a valid Province'),

    })


    return (
        <Formik
            initialValues={{
                modelyear: '',
                make: '',
                modelname: '',
                trim: '',
                vehiclecondition: '',
                vehiclemileage: '',
                firstname: '',
                lastname: '',
                email: '',
                terms: false,
                submitBttn: '',
                phone: '',
                postcode: '',
                province: '',
            }}
            onSubmit={values => {

                setFinanceData(values)
                console.log(financeData);

            }}

            validationSchema={Validate}

        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                handleReset,
                values,
                setFieldValue,
                touched,
                isValid,
                errors,
            }) => (
                <>

                    <div className="header-div">

                        <Header />
                    </div>
                    <div className="page-name-container">
                        <Row className="justify-content-between page-name-header">
                            <Col md={6}>
                                <h2>Value Your Trade</h2>
                            </Col>
                            <Col md={6}>
                                <div className="nav-page-links">
                                    <ul>
                                        <li><Link to="">Janes Autos Sales</Link></li>
                                        <li>|</li>
                                        <li>Value Your Trade</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Container fluid className="page-content-container">
                        <Row className={page1 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container mt-5">
                                    <img className="finance-img" src="https://www.wallpapertip.com/wmimgs/187-1879026_the-new-bmw-sports-car-iphone-wallpaper.jpg" />

                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container">
                                    <img src="https://widget.askava.ai/_next/static/images/kbb_logo-e505b2977f066ee8a2dae7ecfc3877b7.png" />
                                    <h3 className="finance-qualify">Confirm your vehicle</h3>
                                    <p>Please, check if the year, make, model and trim is correct, also enter mileage and condition for correct data analysis</p>

                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >

                                        <label className="label-class mt-3">
                                            Model Year
                                        </label>
                                        <select
                                            name="modelyear"
                                            value={values.modelyear}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.modelyear != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Model Year" />
                                            {modelYear.map((modal, index) => {
                                                return (
                                                    <option className="drop-options" key={index} value={modal} label={modal} />

                                                )
                                            })}
                                        </select>
                                        {errors.modelyear &&
                                            touched.modelyear &&
                                            <div className="error-class">
                                                {errors.modelyear}
                                            </div>}

                                        <label className="label-class mt-3">
                                            Make
                                        </label>
                                        <select
                                            name="make"
                                            value={values.make}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.make != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Make" />
                                            {make.map((make, index) => {
                                                return (
                                                    <option className="drop-options" key={index} value={make} label={make} />

                                                )
                                            })}
                                        </select>
                                        {errors.make &&
                                            touched.make &&
                                            <div className="error-class">
                                                {errors.make}
                                            </div>}
                                        <label className="label-class mt-3">
                                            Model
                                        </label>
                                        <select
                                            name="modelname"
                                            value={values.modelname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.modelname != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Modal" />
                                            {modelname.map((model, index) => {
                                                return (
                                                    <option className="drop-options" key={index} value={model} label={model} />

                                                )
                                            })}
                                        </select>
                                        {errors.modelname &&
                                            touched.modelname &&
                                            <div className="error-class">
                                                {errors.modelname}
                                            </div>}
                                        <label className="label-class mt-3">
                                            Trim
                                        </label>
                                        <select
                                            name="trim"
                                            value={values.trim}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.trim != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Trim" />
                                            {trim.map((trim, index) => {
                                                return (
                                                    <option className="drop-options" key={index} value={trim} label={trim} />

                                                )
                                            })}
                                        </select>
                                        {errors.trim &&
                                            touched.trim &&
                                            <div className="error-class">
                                                {errors.trim}
                                            </div>}






                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Vehicle Mileage" type="text" name="vehiclemileage" placeholder="Vehicle Mileage (in km ) " />

                                        </Form.Group>

                                        <label className="label-class">
                                            Vehicle Condition
                                        </label>
                                        <select
                                            name="vehiclecondition"
                                            value={values.vehiclecondition}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.vehiclecondition != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Vehicle Condition" />
                                            <option className="drop-options" value="Excellent" label="Excellent" />
                                            <option className="drop-options" value="Very Good" label="Very Good" />
                                            <option className="drop-options" value="Good" label="Good" />
                                            <option className="drop-options" value="Fair" label="Fair" />

                                        </select>
                                        {errors.vehiclecondition &&
                                            touched.vehiclecondition &&
                                            <div className="error-class">
                                                {errors.vehiclecondition}
                                            </div>}



                                        <button className="continue-btn mt-5"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type2')
                                                {
                                                    values.modelname === "" || values.modelyear === "" || values.make === "" || values.trim === "" || values.vehiclemileage === "" || values.vehiclecondition === "" ? <></> :
                                                        setPage1(false) ||
                                                        setPage2(true)
                                                }
                                            }}
                                            type="submit"
                                        >
                                            Continue
                                        </button>

                                    </Form>
                                </div>

                            </Col>

                        </Row>
                        <Row className={page2 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://wallpapercave.com/wp/wp6139698.jpg" />


                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container">

                                    <h3 className="finance-qualify">Free trade-in value estimate for your <span className="trade-values"> {values.modelyear} {values.make} {values.modelname} {values.trim}</span></h3>
                                    <p>Get instant free trade-in value estimate based on trusted Canadian data and value of similar vehicle nearby</p>

                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >


                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="First Name" type="text" name="firstname" placeholder="First Name" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Last Name" type="text" name="lastname" placeholder="Last Name" />

                                        </Form.Group>


                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class"



                                                classValue="finance-input" label="Mail" type="email" name="email" placeholder="Email" />

                                        </Form.Group>

                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Phone"
                                                functionPhone={
                                                    (event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }

                                                }
                                                type="tel" name="phone" placeholder="Phone" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Post Code" type="text" name="postcode" placeholder="Post Code" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Province" type="text" name="province" placeholder="Province" />

                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Check
                                                className="agree-checkbox"
                                                required
                                                name="terms"
                                                label="Agree our Terms of Services"
                                                onChange={handleChange}
                                                isInvalid={!!errors.terms}
                                                feedback={errors.terms}
                                                feedbackType="invalid"
                                                id="validationFormik0"
                                            />
                                        </Form.Group>

                                        <button className="continue-btn"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type2')
                                                {
                                                    values.firstname === "" ? <></> :
                                                        values.email === "" || values.phone === "" || values.day === "" || values.month === "" || values.year === "" ? <></> :
                                                            setPage2(false) ||
                                                            setPage3(true)
                                                }
                                            }}
                                            type="submit"
                                        >
                                            Continue
                                        </button>

                                        <div className="accordion-form">
                                            <Accordion >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header> Terms of Service</Accordion.Header>
                                                    <Accordion.Body>

                                                        By checking this box, I consent to Autocorp Technologies obtaining my "free trade-in appraisal" powered by Kelley Blue Book. I also acknowledge that this information will be shared with the car dealer in order to present me with my options.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                            </Accordion>
                                        </div>
                                    </Form>
                                </div>

                            </Col>

                        </Row>
                        <Row className={page3 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://w0.peakpx.com/wallpaper/289/466/HD-wallpaper-lb-aventador-blue-car-cars-lamborghini-liberty-walk-thumbnail.jpg" />

                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container ">

                                    <h3 className="finance-qualify">Free trade-in value estimate for your <span className="trade-values"> {values.modelyear} {values.make} {values.modelname} {values.trim}</span></h3>
                                    <p>Get instant free trade-in value estimate based on trusted Canadian data and value of similar vehicle nearby</p>

                                    <div className="trade-final-page">
                                        <p>Your Estimated Trade-in Value <img src="https://widget.askava.ai/_next/static/images/info-20px-57c4e41c80437d2fa14188c704850eec.png" /> </p>
                                        <p className="price-trade">$1,682</p>
                                        <div className="green-white-container">
                                            <div className="green-container">
                                                <p>Trade-In Range</p>
                                                <p className="trade-in-price">$1,484 - $1,881</p>
                                            </div>
                                            <p>Trade-In Value</p>
                                            <p className="trade-in-price">$1,682</p>
                                        </div>
                                        <div className="trade-img">
                                            <img src={TradeImg} />
                                        </div>
                                        <p className="trade-condition-1">Condition: {values.vehiclecondition}</p>
                                        <p className="trade-condition">Condition: {values.vehiclecondition}</p>
                                        <div className="trade-ul-list">
                                            <ul>
                                                <li><span>$1,917</span>Total trade-in benefit (incl tax savings)</li>
                                                <li className="trade-ul-middle"><span>$1,682</span> Kelley Blue Book® trade-in value</li>
                                                <li className="trade-ul-last"><span>$238</span> Average tax savings</li>
                                            </ul>
                                        </div>
                                        <h4 className="finance-qualify">Next step: <span className="trade-values can-i">  Can I get financing?</span></h4>
                                        <p>Now that you know your trade-in value, let's help you look into some financing options</p>

                                        <div fluid className="trade-final-btn"
                                            onClick={() => {
                                                history.push("/finance");
                                            }}
                                            type="submit"
                                        >
                                            <img src="https://widget.askava.ai/_next/static/images/credit-apply-now-e8413d6877e6d8259d5181d54ba8adf6.png" />
                                        </div>
                                    </div>

                                </div>

                            </Col>

                        </Row>

                    </Container>

                    <Footer />

                </>
            )}

        </Formik>

    );
}

export default FinanceApply;