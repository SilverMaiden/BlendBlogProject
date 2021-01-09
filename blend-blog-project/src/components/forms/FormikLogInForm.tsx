import LogIn from '../LogIn';
import { RouteComponentProps} from "react-router-dom";
import {
  withFormik
} from "formik";
import * as Yup from "yup";
import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
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
const FormikLogInForm = withFormik<
  FormikUserFormProps,
  FormValues,
  RouteComponentProps
>({
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

    axios
      .request<void, string>({
        method: "post",
        url: "http://localhost:8000/api/login/",
        data: postData,
      })
      .then((res: any) => {
        {
          console.log(res);
        }
        window.localStorage.setItem("token", res.data.token);
        window.history.pushState({}, "welcome", "/home");
        window.location.reload();
        resetForm();
      })
      .catch((err: any) => {
        console.log(err.response);
        let errorAlert: string = "Invalid Login."      
      });
  },
})(LogIn);

export default FormikLogInForm;