import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import Container from "@material-ui/core/Container";
import { getSingleBlogPost } from "../../redux/actions/blogpostActions";
import { getUser } from '../../redux/actions/userActions';
import FormikEditPostForm from '../EditBlogPost/FormikEditPostForm';
import EditIcon from "@material-ui/icons/Edit";
import { deleteBlogPost } from "../../redux/actions/blogpostActions";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css


interface SingleBlogPost {
  blogpost_title: string;
  blogpost_content: string;
  user_id: number;
  id: number;
}

interface Author {
  id: number;
  name: string;
}

const BlogPost = (props: any) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [editMode, setEditMode] = useState(false);

  const url: string = window.location.pathname;
  const postId: number = parseInt(url.substring(url.lastIndexOf("/") + 1));
  console.log(postId)
  const userPost: SingleBlogPost = useSelector((state: any) => state.blogpostReducer.singleBlogPost);
  //const user: Author = useSelector((state))
  useEffect(() => {
    console.log(postId)
    dispatch(getSingleBlogPost(postId));
    //dispatch(getUser(userPost.user_id));
  }, []);

  const post = {
    title: userPost.blogpost_title,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
    linkText: "Continue reading…",
  };

  //Function for edit mode - if it's in edit mode, render a form. If not, render the viewing
  //component.
  const handleDelete = () => {
    //Going to use react-confirm-alert
    confirmAlert({
      title: "Confirm to delete",
      message: `Are you sure you want to delete this post? There's no getting it back.`,
      buttons: [
        {
          label: "Yes",
          onClick: () => dispatch(deleteBlogPost(postId, history)),
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

  const toggleEditMode = () => {
    if (editMode) {
      setEditMode(false)
    } else {
      setEditMode(true)
    }
  }

  const selectActiveComponent = () => {
    if (editMode) {
      return (
        <Container>
        <FormikEditPostForm />
        </Container>

        
      )
    } else {
      return (
        <Container>
        <h1>{userPost.blogpost_title}</h1>
        <br />
        {console.log(userPost)}
        <p>{userPost.blogpost_content}</p>
      </Container>
      )
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Header />
        <MainFeaturedPost post={post} />
        <br />
        <EditIcon onClick={toggleEditMode}/>
        <DeleteOutlineIcon onClick={handleDelete} />
        {selectActiveComponent()}

      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
};

export default BlogPost;
