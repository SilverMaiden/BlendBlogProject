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
const regexStrongPassword = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
);

const FormikRegisterForm = withFormik<FormikUserFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().required("Email is required").email("Invalid Email"),
    password: Yup.string()
      .required("Password Required")
      .matches(regexStrongPassword)
      .typeError(
        "Must be a min of 8 character and contain at least 1 uppercase character, 1 numeric character, 1 special character, "
      ),
    confirmPassword: Yup.string()
      .required("Please confirm your password")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  }),
  handleSubmit(values: FormValues, { props }: any) {
    let postData: object = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    //console.log(props.history);
    props.registerUser(postData, props.history);
  },
})(Register);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedRegisterForm = connect(
  null,
  mapDispatchToProps
)(FormikRegisterForm);

export default ConnectedRegisterForm;
