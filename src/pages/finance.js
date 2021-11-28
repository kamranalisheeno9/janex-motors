import React, { useState } from 'react';
import './finance.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../components/textField'
import { Container, Col, Row, Form, Accordion, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const FinanceApply = (props) => {

    const [page1, setPage1] = useState(true)
    const [page2, setPage2] = useState(false)
    const [page3, setPage3] = useState(false)
    const [page4, setPage4] = useState(false)
    const [page5, setPage5] = useState(false)
    const [page6, setPage6] = useState(false)
    const [page7, setPage7] = useState(false)
    const [selectBtn, SetSelectBtn] = useState("Rent")

    const [financeData, setFinanceData] = useState({})

    const Validate = yup.object({

        firstname: yup.string()
            .required('You must include a valid first name'),

        lastname: yup.string()
            .required('You must include a valid last name'),
        terms: yup.bool().required().oneOf([true], 'You must give consent to obtain your "Free Credit Snapshot" and "Credit Tier Rating"'),

        email: yup.string()
            .required('You must include a valid email address'),
        phone: yup.string()
            .required('You must include a valid phone'),
        gross: yup.string()
            .required('Required'),
        selectBtn: yup.string()
            .required('Required'),

        employname: yup.string()
            .required('Required'),

        jobtitle: yup.string()
            .required('Required'),

        monthlyrent: yup.string()
            .required('Required'),

        jobtime: yup.string()
            .required('Required'),
        timeresidence: yup.string()
            .required('Required'),

        day: yup.string()
            .min(1)
            .max(2)
            .required('You must include a valid Day'),

        month: yup.string()
            .min(1)
            .max(2)
            .required('You must include a valid Month'),



        year: yup.string()
            .min(4)
            .max(4)
            .required('You must include a valid Year'),

        address: yup.string()
            .required('You must include a valid Address'),


        postcode: yup.string()
            .required('You must include a valid Post Code'),

        city: yup.string()
            .required('You must include a valid City'),

        province: yup.string()
            .required('You must include a valid Province'),

    })


    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
                terms: false,
                submitBttn: '',
                phone: '',
                day: '',
                month: '',
                year: '',
                address: '',
                selectBtn: 'rent',
                unit: '',
                postcode: '',
                city: '',
                jobtime: '',
                gross: '',
                monthlyrent: '',
                jobtitle: '',
                employname: '',
                province: '',
                timeresidence: '',
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
                                <h2>Apply For Financing</h2>
                            </Col>
                            <Col md={6}>
                                <div className="nav-page-links">
                                    <ul>
                                        <li><Link to="">Janes Autos Sales</Link></li>
                                        <li>|</li>
                                        <li><Link to="/salesdepartment">Sales Department</Link></li>
                                        <li>|</li>
                                        <li><Link to="/financedepartment">Finance Department</Link></li>
                                        <li>|</li>
                                        <li>Apply For Financing</li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Container fluid className="page-content-container">
                        <h5 className="apply-now">APPLY NOW! GET APPROVED TODAY !</h5>
                        <Row className={page1 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://i.pinimg.com/originals/b8/33/69/b833697b7c5f1222e576ddba8f50c497.jpg" />
                                    <div className="finance-text">
                                        <h5>No Impact</h5>
                                        <p>This free tool lets you get important information about your credit without the credit impact of a regular inquiry</p>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container">
                                    <p className="finance-page-no">1 of 3</p>
                                    <h3 className="finance-qualify">Qualify for financing now and get your FREE credit score</h3>
                                    <p>Start the process of unlocking your Free Equifax Credit Snapshot now</p>
                                    <ul className="finance-list">
                                        <li><img src="https://widget.askava.ai/_next/static/images/logo-scotia-c1358e773a33e33fedfd9dc38301ac72.png" /></li>
                                        <li><img src="https://widget.askava.ai/_next/static/images/logo-tdaf-97fda03b281972aa93cbd9cb8c589024.png" /></li>
                                        <li><img src="https://widget.askava.ai/_next/static/images/logo-rbc-4ec13079a82fec4fee3e72d0ea77068c.png" /></li>
                                        <li><img src="https://widget.askava.ai/_next/static/images/logo-bmo-bafc492eeeb7659064429493247db226.png" /></li>
                                        <li>and More</li>
                                    </ul>
                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="First Name" type="text" name="firstname" placeholder="First Name" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Last Name" type="text" name="lastname" placeholder="Last Name" />

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

                                        <button
                                            className="finance-form-btn"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type1')
                                                {
                                                    values.firstname === "" || values.lastname === "" || values.terms === false ? <></> :
                                                        setPage1(false) ||
                                                        setPage2(true)

                                                }
                                            }}
                                            type="submit"
                                        >
                                            <img src="https://widget.askava.ai/_next/static/images/credit-lets-go-cd0eda490f7aea34ac1ce679b94c3814.png" />
                                        </button>

                                        <div>
                                            <img src="https://widget.askava.ai/_next/static/images/powered-by-equifax-0aa381509969ae3e8b2d23b270fe00d0.png" />
                                        </div>
                                        <div className="accordion-form">
                                            <Accordion >
                                                <Accordion.Item eventKey="0">
                                                    <Accordion.Header>Learn More</Accordion.Header>
                                                    <Accordion.Body>
                                                        The Free Credit Process is powered by Equifax Canada Co. (“Equifax”). The Equifax Credit Score (www.equifax.ca) is based on Equifax’s proprietary model and may not be the same score used by third parties to assess your creditworthiness. The provision of this score to you is intended for your own educational use. Third parties will take into consideration other information in addition to a credit score when evaluating your creditworthiness.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1">
                                                    <Accordion.Header>Terms of Service</Accordion.Header>
                                                    <Accordion.Body>
                                                        By checking this box, I consent to askAVA Inc. obtaining my Equifax "Free Credit Snapshot" and "Credit Tier Rating" (Excellent/Very Good/Fair/Bad) after I verify my identity, and accessing the credit snapshot for the purposes of identity verification. I agree to receive offers from the dealer. Consent can be withdrawn at any time.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </Form>
                                </div>

                            </Col>

                        </Row>
                        <Row className={page2 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://cdn6.aptoide.com/imgs/d/c/b/dcb07e43e2c90d6d1a311c00dd3710b5_screen.jpg" />
                                    <div className="finance-text">
                                        <h5>No Impact</h5>
                                        <p>This free tool lets you get important information about your credit without the credit impact of a regular inquiry</p>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container">
                                    <p className="back-btn"
                                        onClick={() => {
                                            setPage2(false) ||
                                                setPage1(true)
                                        }}
                                    >    Back</p>
                                    <p className="finance-page-no">2 of 3</p>
                                    <h3 className="finance-qualify">Just a few more details needed</h3>
                                    <p>Equifax matches this information with your unique credit profile</p>

                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
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
                                        <div className="label-class">Date of Birth</div>
                                        <div className="finance-form-date">

                                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                                <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Day" type="tel"
                                                    functionPhone={
                                                        (event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }

                                                    }
                                                    name="day" placeholder="Day" />

                                            </Form.Group>
                                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                                <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input"
                                                    functionPhone={
                                                        (event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }

                                                    }
                                                    label="Month" type="tel" name="month" placeholder="Month" />

                                            </Form.Group>
                                            <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                                <TextField errorClass="error-class" labelclass="label-class"
                                                    functionPhone={
                                                        (event) => {
                                                            if (!/[0-9]/.test(event.key)) {
                                                                event.preventDefault();
                                                            }
                                                        }

                                                    }
                                                    classValue="finance-input" label="Year" type="tel" name="year" placeholder="Year" />

                                            </Form.Group>
                                        </div>

                                        <button className="continue-btn"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type2')
                                                {
                                                        values.email === "" || values.phone === "" || values.day === "" || values.month === "" || values.year === "" ? <></> :
                                                            setPage2(false) ||
                                                            setPage3(true)
                                                }
                                            }}
                                            type="submit"
                                        >
                                            Continue
                                        </button>

                                        <div>
                                            <img src="https://widget.askava.ai/_next/static/images/powered-by-equifax-0aa381509969ae3e8b2d23b270fe00d0.png" />
                                        </div>

                                    </Form>
                                </div>

                            </Col>

                        </Row>
                        <Row className={page3 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">

                                    <img className="finance-img mt-5" src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80" />
                                    <div className="finance-text">
                                        <h5>No Impact</h5>
                                        <p>This free tool lets you get important information about your credit without the credit impact of a regular inquiry</p>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={5} lg={6} className="finance-form"   >
                                <div className="finance-form-container">
                                    <p className="back-btn"
                                        onClick={() => {
                                            setPage3(false) ||
                                                setPage2(true)
                                        }}
                                    >    Back</p>
                                    <p className="finance-page-no">3 of 3</p>
                                    <h3 className="finance-qualify">What is your address?</h3>
                                    <p>Please make sure you enter it as it appears on your driver's license</p>

                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Address" type="text" name="address" placeholder="Address" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Unit#" type="text" name="unit" placeholder="Unit" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Post Code" type="text" name="postcode" placeholder="Post Code" />

                                        </Form.Group>

                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="City" type="text" name="city" placeholder="City" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input" label="Province" type="text" name="province" placeholder="Province" />

                                        </Form.Group>



                                        <button className="continue-btn"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type3')
                                                {
                                                            values.address === "" || values.postcode === "" || values.city === "" || values.province === "" ? <></> :
                                                            setPage3(false) ||
                                                            setPage4(true)
                                                }
                                            }}
                                            type="submit"
                                        >
                                            Continue
                                        </button>

                                        <div>
                                            <img src="https://widget.askava.ai/_next/static/images/powered-by-equifax-0aa381509969ae3e8b2d23b270fe00d0.png" />
                                        </div>

                                    </Form>
                                </div>

                            </Col>

                        </Row>
                        <Row className={page4 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://images.pexels.com/photos/804130/pexels-photo-804130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                                    <div className="finance-text">
                                        <h5>No Impact</h5>
                                        <p>This free tool lets you get important information about your credit without the credit impact of a regular inquiry</p>

                                    </div>
                                </div>
                            </Col>
                            <Col xl={6} className="finance-form"   >
                                <div className="finance-form-container">
                                    <h3 className="finance-qualify">Review and Confirm</h3>
                                    <p>Review the imformation provided and confirm that is correct.</p>

                                    <Row className="">
                                        <Col md={5}>
                                            <p className="label-class">Name</p>
                                            <p className="finance-input input-value">{values.firstname} {values.lastname}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class ">Email</p>
                                            <p className="finance-input input-value email-value">{values.email}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Phone Number</p>
                                            <p className="finance-input input-value">{values.firstname}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Date of Birth</p>
                                            <p className="finance-input input-value">{values.day}/{values.month}/{values.year}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Address</p>
                                            <p className="finance-input input-value">{values.address}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Unit</p>
                                            <p className="finance-input input-value">{values.unit}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Postal Code</p>
                                            <p className="finance-input input-value">{values.postcode}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">City</p>
                                            <p className="finance-input input-value">{values.city}</p>
                                        </Col>
                                        <Col md={5}>
                                            <p className="label-class">Province</p>
                                            <p className="finance-input input-value">{values.province}</p>
                                        </Col>
                                    </Row>


                                    <button className="continue-btn mt-5"
                                        onClick={() => {
                                            setFieldValue('submitBttn', 'type4')
                                            {
                                                setPage4(false) ||
                                                    setPage5(true)
                                                console.log(financeData)
                                            }
                                        }}
                                        type="submit"
                                    >
                                        Continue
                                    </button>

                                    <div>
                                        <img src="https://widget.askava.ai/_next/static/images/powered-by-equifax-0aa381509969ae3e8b2d23b270fe00d0.png" />
                                    </div>

                                </div>

                            </Col>

                        </Row>
                        <Row className={page5 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img" src="https://i.pinimg.com/originals/d1/a1/72/d1a17224609ac70c105f89d1cdc1936f.jpg" />

                                </div>
                            </Col>
                            <Col xl={5} className="finance-form"   >
                                <div className="finance-form-container page-5-container">
                                    <img className="emoji-img" src="https://i.pinimg.com/originals/b2/3d/f6/b23df649311586e74a8455c92eb3d76b.png" />
                                    <h3 className="finance-qualify">Review and Confirm</h3>

                                    <p className="emoji-p-larger">It seems like some of the answers you provided to our Electronic ID Verification System did not match the information on your Equifax Credit Profile.<br /> Please try again!</p>

                                    <p>Make sure you are using the address on your driver's license (no PO boxes or work address please).</p>
                                    <p>Don't forget to double-check your postal code too!</p>

                                    <button className="continue-btn final-continue mt-5"
                                        onClick={() => {
                                            setFieldValue('submitBttn', 'type4')
                                            {
                                                setPage5(false) ||
                                                    setPage6(true)

                                            }
                                        }}

                                        type="submit"
                                    >
                                        Continue To Application
                                    </button>
                                    <button className="credit-btn "
                                        onClick={() => {
                                            setPage5(false)
                                            setPage4(true)
                                        }}
                                        type="button"
                                    >
                                        RETRY CREDIT SCORE
                                    </button>

                                    <div>
                                        <img src="https://widget.askava.ai/_next/static/images/powered-by-equifax-0aa381509969ae3e8b2d23b270fe00d0.png" />
                                    </div>

                                </div>

                            </Col>

                        </Row>
                        <Row className={page6 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={5} className="text-content-container img-finance">
                                <div className="finance-img-container">
                                    <img className="finance-img page-6-img" src="https://img1.wallspic.com/previews/8/9/5/6/2/126598/126598-green_lamborghini_aventador_on_road_during_daytime-x750.jpg" />

                                </div>
                            </Col>
                            <Col xl={5} lg={7} className="finance-form"   >
                                <div className="finance-form-container ">
                                    <div className="small-data-container">

                                        <h3>{values.firstname} {values.lastname}</h3>
                                        <p>{values.email}</p>
                                        <p>{values.phone}</p>
                                        <p>{values.address}</p>
                                        <p>{values.city}, {values.province}. {values.postcode} </p>
                                    </div>
                                    <h5>Employment Information</h5>

                                    <Form noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input smaller-input-values" label="Gross Monthly Income" type="text" name="gross" placeholder="Gross Monthly Income" />
                                            <label className="label-class">
                                                Time at Job
                                            </label>
                                            <select
                                                name="jobtime"
                                                value={values.jobtime}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                className={values.jobtime != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                            >
                                                <option className="drop-options" value="" label="Time at Job" />
                                                <option className="drop-options" value="Less Then 3 Months" label="Less Then 3 Months" />
                                                <option className="drop-options" value="3 Months - 1 Year" label="3 Months - 1 Year" />
                                                <option className="drop-options" value="1 Year - 3 Years" label="1 Year - 3 Years" />
                                                <option className="drop-options" value="Over 3 Years" label="Over 3 Years" />
                                            </select>
                                            {errors.jobtime &&
                                                touched.jobtime &&
                                                <div className="error-class">
                                                    {errors.jobtime}
                                                </div>}
                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input smaller-input-values" label="Name of Employer" type="text" name="employname" placeholder="Name of Employer" />

                                        </Form.Group>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input smaller-input-values" label="Job Title" type="text" name="jobtitle" placeholder="Job Title" />

                                        </Form.Group>


                                        <h5 className="label-class">Residence Information</h5>
                                        <h6 className="label-class">Do You rent or own ?</h6>
                                        <div className="final-btns">
                                            <button type="button" className={selectBtn == "Rent" ? "selected-btn" : "not-selected-btn"} onClick={() => SetSelectBtn("Rent")

                                            } >Rent</button>
                                            <button type="button" className={selectBtn == "Own" ? "selected-btn" : "not-selected-btn"} onClick={() => SetSelectBtn("Own")

                                            } >Own</button>
                                        </div>
                                        <Form.Group className="mb-4 mt-4 " controlId="formBasicEmail">
                                            <TextField errorClass="error-class" labelclass="label-class" classValue="finance-input smaller-input-values" label="Monthly Rent/Mortgage Payment" type="text" name="monthlyrent" placeholder="Monthly Rent/Mortgage Payment" />

                                        </Form.Group>
                                        <label className="label-class">
                                            Time at Residence
                                        </label>
                                        <select
                                            name="timeresidence"
                                            value={values.timeresidence}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className={values.timeresidence != "" ? " selected finance-input smaller-input-values dropdown-input" : "finance-input smaller-input-values dropdown-input"}
                                        >
                                            <option value="" className="drop-options" label="Time at Residence" />
                                            <option className="drop-options" value="Less Then 2 Year" label="Less Then 2 Year" />
                                            <option className="drop-options" value="Over 2 Years" label="Over 2 Years" />
                                        </select>
                                        {errors.timeresidence &&
                                            touched.timeresidence &&
                                            <div className="error-class">
                                                {errors.timeresidence}
                                            </div>}

                                        <button className="continue-btn mt-5"
                                            onClick={() => {
                                                setFieldValue('submitBttn', 'type6')
                                                {
                                                    values.gross === "" || values.jobtime === "" || values.employname === "" || values.jobtitle === "" || values.monthlyrent === "" || values.timeresidence === "" ? <></> :
                                                        setPage6(false) ||
                                                        setPage7(true)

                                                }
                                            }}

                                            type="submit"
                                        >
                                            Submit
                                        </button>


                                        <div className="end-text">
                                            By clicking Submit, I consent to the collection of the above noted personal information in accordance with the Terms of Service and Privacy Policy. I acknowledge that this information may be used to obtain my credit range and related personal information about me from Equifax.
                                        </div>

                                    </Form>


                                </div>

                            </Col>

                        </Row>
                        <Row className={page7 ? "justify-content-center form-show" : " form-hide"}>
                            <Col xl={4} className="finance-form"   >
                                <div className="finance-form-container thank-you-img ">
                                    <img src="http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/folded-hands.png" />

                                    <h3>Thank You For Your Submission!</h3>

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