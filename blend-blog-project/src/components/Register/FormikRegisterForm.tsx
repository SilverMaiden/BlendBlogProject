import Register from "./Register";
import { registerUser } from "../../redux/actions/userActions";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
//Implement loader if time allows
//import Loader from 'react-loader-spinner';
import { Link as DOMLink, useHistory } from "react-router-dom";
// PropTypes vs Typescript?
import PropTypes from "prop-types";

// The type of props FormikUserForm receives
interface FormikUserFormProps {
  initialEmail?: string;
  message: string;
}
// Shape of form values
interface FormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const mapDispatchToProps = {
  registerUser,
  useHistory,
};

const FormikLogInForm = withFormik<FormikUserFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    name: "",
    email: props.initialEmail || "",
    password: "",
    confirmPassword: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Seems a little short..."),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string().required("Password Required"),
  }),
  handleSubmit(values: FormValues, { props }: any) {
    let postData: object = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    console.log(props.history);
    props.registerUser(postData, props.history);
  },
})(Register);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedLogInForm = connect(null, mapDispatchToProps)(FormikLogInForm);

export default ConnectedLogInForm;
