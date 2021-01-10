import NewPostForm from './NewPostForm';
import { addBlogPost } from '../../redux/actions/blogpostActions';
import {
  withFormik
} from "formik";
import * as Yup from "yup";
import {  connect } from 'react-redux';
//Implement loader if time allows
//import Loader from 'react-loader-spinner';
import { Link as DOMLink, useHistory } from 'react-router-dom';
// PropTypes vs Typescript?
import PropTypes from 'prop-types';;

// The type of props FormikUserForm receives
interface FormikUserFormProps {
  initialTitle?: string;
}
// Shape of form values
interface NewPostFormValues {
    title: string;
    content: string;
  }

  const mapDispatchToProps = {
    addBlogPost,
    useHistory
  };
  
const FormikNewPostForm = withFormik<
  FormikUserFormProps,
  NewPostFormValues>({
  
  mapPropsToValues: (props) => ({
    title: props.initialTitle || "",
    content: "",
  }),
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content Required"),
  }),
  handleSubmit(values: NewPostFormValues, { props }: any) {
    let userId = window.localStorage.getItem("id");
    let postData: object = { blogpost_title: values.title, blogpost_content: values.content, user_id: userId};
    console.log(postData)
    props.addBlogPost(postData, props.history)

  }
})(NewPostForm);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedLogInForm = connect(
  null,
  mapDispatchToProps
)(FormikNewPostForm);

export default ConnectedLogInForm;