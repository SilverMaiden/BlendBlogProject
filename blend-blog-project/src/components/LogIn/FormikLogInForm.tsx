import LogIn from "./LogIn";
import { loginUser } from "../../redux/actions/userActions";
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
  email: string;
  password: string;
}

const mapDispatchToProps = {
  loginUser,
  useHistory,
};

const FormikLogInForm = withFormik<FormikUserFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string().required("Password Required"),
  }),
  handleSubmit(values: FormValues, { props }: any) {
    let postData: object = { email: values.email, password: values.password };
    console.log(props.history);
    props.loginUser(postData, props.history);
  },
})(LogIn);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedLogInForm = connect(null, mapDispatchToProps)(FormikLogInForm);

export default ConnectedLogInForm;
