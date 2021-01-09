import LogIn from '../LogIn';
import {
  withFormik
} from "formik";
import * as Yup from "yup";
//import axios from "axios";

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//Implement loader if time allows
//import Loader from 'react-loader-spinner';
import { Link as DOMLink, useHistory } from 'react-router-dom';
// PropTypes vs Typescript?
import PropTypes from 'prop-types';

import { loginUser } from '../../redux/actions/userActions';

//axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*"; - switching to redux actions and dispatchers
// The type of props FormikUserForm receives
interface FormikUserFormProps {
  initialEmail?: string;
  message: string;
}
// Shape of form values
interface FormValues {
    email: string;
    password: string;
  }

// Defining dispatch methods


const FormikLogInForm = withFormik<
  FormikUserFormProps,
  FormValues>({
  
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string().required("Password Required"),
  }),
  handleSubmit(values: FormValues, { resetForm }) {
    let postData: object = { email: values.email, password: values.password };
    console.log(values)
    //dispatch(loginUser(postData, history));
  }
})(LogIn);

export default FormikLogInForm;