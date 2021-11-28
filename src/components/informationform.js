import React, { useState } from 'react';
import './informationform.css'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '../components/textField'
import { Container, Col, Row, Form, Accordion, Button } from 'react-bootstrap';
const InformationForm = (props) => {

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
                <Container className="finance-apply-form-vehicle-information">
                <div className="vehicle-all-form-text-information">
                    <h5>Apply For Finance</h5>
                </div>
                 <Form className="vehicle-form-container" noValidate onSubmit={handleSubmit}
                                        onReset={handleReset}
                                    >
                                        <div className="information-f-l">
                                        <Form.Group className="mb-1 mt-2  " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class-information" labelclass="vehicle-label-class-information" classValue="vehicle-input-informtion" label="First Name" type="text" name="firstname" placeholder="First Name" />

                                        </Form.Group>
                                        <Form.Group className="mb-1 mt-2 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class-information" labelclass="vehicle-label-class-information" classValue="vehicle-input-informtion" label="Last Name" type="text" name="lastname" placeholder="Last Name" />
                            
                                        </Form.Group>
                                        </div>
                                        <Form.Group className="mb-2 mt-2 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class-information" labelclass="vehicle-label-class-information" classValue="vehicle-input-informtion" label="Email" type="email" name="email" placeholder="Email" />

                                        </Form.Group>

                                        <Form.Group className="mb-2 mt-2 " controlId="formBasicEmail">
                                            <TextField errorClass="vehicle-error-class-information" labelclass="vehicle-label-class-information" classValue="vehicle-input-informtion" label="Phone"
                                                functionPhone={
                                                    (event) => {
                                                        if (!/[0-9]/.test(event.key)) {
                                                            event.preventDefault();
                                                        }
                                                    }

                                                }
                                                type="tel" name="phone" placeholder="Phone" />

                                        </Form.Group>
                                        <Form.Group className="mb-2 mt-2 " controlId="formBasicEmail">
                                            <Form.Control as="textarea" rows={3} className="vehicle-input-informtion" placeholder="Comments" />
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
                                            className="vehicle-form-btn-information"
                                          
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

export default InformationForm;