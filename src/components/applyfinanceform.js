import React, { useState } from 'react';
import './applyfinanceform.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../components/textField'
import { Container, Col, Row, Form, Accordion, Button } from 'react-bootstrap';
const FinanceForm = (props) => {

    const Validate = yup.object({

        firstname: yup.string()
            .required('Required'),
        lastname: yup.string()
            .required('Required'),
        email: yup.string()
            .email('Email is Invalid')
            .required('Required'),

    })

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                email: '',
             
            }}
            onSubmit={values => {
                    console.log("apply form values",values)

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
                <Container className="finance-apply-form-vehicle">
                <div className="vehicle-ally-form-text">
                    <h5>Apply For Finance</h5>
                </div>
                 <Form className="vehicle-form-container" noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
                                        <Form.Group className="mb-1 mt-1 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class" labelclass="vehicle-label-class" classValue="vehicle-input" label="First Name" type="text" name="firstname" placeholder="First Name" />

                                        </Form.Group>
                                        <Form.Group className="mb-1 mt-1 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class" labelclass="vehicle-label-class" classValue="vehicle-input" label="Last Name" type="text" name="lastname" placeholder="Last Name" />

                                        </Form.Group>
                                        <Form.Group className="mb-1 mt-1 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class" labelclass="vehicle-label-class" classValue="vehicle-input" label="Email" type="email" name="email" placeholder="Email" />

                                        </Form.Group>

                                        <Form.Group className="mb-1 mt-1 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class" labelclass="vehicle-label-class" classValue="vehicle-input" label="Phone"
                                                functionPhone={
                                                    (event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }

                                                }
                                                type="tel" name="phone" placeholder="Phone" />

                                        </Form.Group>
                                        <div className="vehicle-checkbox-btn">
                                        <Form.Group className="mb-3 checkbox-vehicle">
                                            <Form.Check
                                                className="agree-checkbox"
                                                required
                                                label="SEND ME EXCLUSIVE OFFERS AND PROMOTIONS. View disclaimer. "
                                            
                                            />
                                        </Form.Group>


                                        <button
                                            className="vehicle-form-btn"
                                          
                                            type="submit"
                                        >
                                            Submit
                                                </button>
                                                </div>
                                    
                                    </Form>

                                    </Container>

</>
            )}

        </Formik>
    );
}

export default FinanceForm;