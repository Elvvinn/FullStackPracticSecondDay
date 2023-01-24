import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Navbar from '../../Layout/Navbar/navbar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
function AddPage() {

    return (
        <>
            <Helmet>
                <title> Add Page </title>
            </Helmet>
            <>

                <Navbar />

                <Formik
                    initialValues={{ name: '', title: '', description: '', }}
                    validationSchema={Yup.object({
                        name: Yup.string()
                            .max(15, 'Must be 15 characters or less')
                            .required('Required'),
                        title: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        description: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                    })}
                    onSubmit={(values) => {

                        axios.post("http://localhost:5000/users", values)
                    }}
                >
                    <Form>
                        <label htmlFor="name">Name</label>
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />

                        <label htmlFor="title">Title</label>
                        <Field name="title" type="text" />
                        <ErrorMessage name="title" />

                        <label htmlFor="description">Title</label>
                        <Field name="description" type="text" />
                        <ErrorMessage name="description" />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>

                <Link to={"/"}> <button> Go To Home </button> </Link>

            </>
        </>
    )
}

export default AddPage