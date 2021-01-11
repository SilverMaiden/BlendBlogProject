import EditPostForm from "./EditPostForm";
import { editBlogPost } from "../../redux/actions/blogpostActions";
import { withFormik } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
//Implement loader if time allows
//import Loader from 'react-loader-spinner';
import { useHistory } from "react-router-dom";
// PropTypes vs Typescript?
import PropTypes from "prop-types";

// The type of props FormikUserForm receives
interface FormikUserFormProps {
  blogpost_title?: string;
  blogpost_content?: string;
  blogpost?: any;

}
// Shape of form values
interface NewPostFormValues {
  title: string;
  content: string;
}

const mapDispatchToProps = {
  editBlogPost,
  useHistory,
};

const FormikEditPostForm = withFormik<FormikUserFormProps, NewPostFormValues>({
  mapPropsToValues: (props) => ({
    title: props.blogpost_title || "",
    content: props.blogpost_content || "",
  }),
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content Required"),
  }),
  handleSubmit(values: NewPostFormValues, { props }: any) {
    console.log(props)
    let userId = window.localStorage.getItem("id");
    let postData: object = {
      blogpost_title: values.title,
      blogpost_content: values.content,
      user_id: userId,
    };
    console.log(props);
    props.editBlogPost(postData, props.history);
  },
})(EditPostForm);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedEditPostForm = connect(
  null,
  mapDispatchToProps
)(FormikEditPostForm);

export default ConnectedEditPostForm;
