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
  title?: string;
  content?: string;
  blogpost?: any;
}
// Shape of form values
interface NewPostFormValues {
  title: string;
  content: string;
  id: number;
}

const mapDispatchToProps = {
  editBlogPost,
  useHistory,
};

const mapStateToProps = (state: any) => ({
  currentPost: state.blogpostReducer.singleBlogPost,
});

const FormikEditPostForm = withFormik({
  mapPropsToValues: (props: any) => ({
    title: props.currentPost.blogpost_title,
    content: props.currentPost.blogpost_content,
    id: props.currentPost.id,
  }),
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    content: Yup.string().required("Content Required"),
  }),
  handleSubmit(values: NewPostFormValues, { props }: any) {
    console.log(props);
    let userId = window.localStorage.getItem("id");
    console.log(props);
    let postData: object = {
      blogpost_title: values.title,
      blogpost_content: values.content,
      id: values.id,
    };
    console.log(props.editBlogPost);
    console.log(props);

    props.editBlogPost(postData, props.history);
  },
})(EditPostForm);

// Connecting will allow FormikLogInForm to access loginUser dispatch function
const ConnectedEditPostForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(FormikEditPostForm);

export default ConnectedEditPostForm;
