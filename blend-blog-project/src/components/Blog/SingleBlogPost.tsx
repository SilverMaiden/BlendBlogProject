import { useEffect, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

// Material UI imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import EditIcon from "@material-ui/icons/Edit";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

// Component Imports
import Header from "./Header";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import ConnectedEditPostForm from "../EditBlogPost/FormikEditPostForm";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//Action Imports
import {
  deleteBlogPost,
  getSingleBlogPost,
} from "../../redux/actions/blogpostActions";
import {
  getUser
} from "../../redux/actions/userActions";

// Typescript interface definition for a single blog post.
interface SingleBlogPost {
  blogpost_title: string;
  blogpost_content: string;
  user_id: number;
  id: number;
}

// Currently unused interface for type Author
/*interface Author {
  id: number;
  name: string;
}*/

const SingleBlogPost = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [editMode, setEditMode] = useState<boolean | null>(false);

  const id = window.localStorage.getItem("id");
  const url: string = window.location.pathname;
  const postId: number = parseInt(url.substring(url.lastIndexOf("/") + 1));
  console.log(postId);
  const userPost: SingleBlogPost = useSelector(
    (state: any) => state.blogpostReducer.singleBlogPost
  );
  //const user: Author = useSelector((state))
  useEffect(() => {
    console.log(postId);
    if (id === "") {
      dispatch(getUser(userPost.user_id))
    }
      dispatch(getSingleBlogPost(postId));
  }, []);

  const post = {
    title: userPost.blogpost_title,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
    linkText: "Continue reading…",
  };

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

  //Function for edit mode - if it's in edit mode, render a form. If not, render the viewing
  //component.
  const toggleEditMode = () => {
    if (editMode) {
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  // selectActiveComponent renders either the edit form for the blog, or the post page.
  const selectActiveComponent = () => {
    if (editMode) {
      return (
        <Container>
          <ConnectedEditPostForm />
        </Container>
      );
    } else {
      return (
        <Container>
          <h1>{userPost.blogpost_title}</h1>
          <br />
          {console.log(userPost)}
          <p>{userPost.blogpost_content}</p>
        </Container>
      );
    }
  };

  return (
    <Fragment>
      <CssBaseline />
      <main>
        <Header />
        <HeroBanner post={post} />
        <br />
        <EditIcon onClick={toggleEditMode} />
        <DeleteOutlineIcon onClick={handleDelete} />
        {selectActiveComponent()}
      </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Fragment>
  );
};

export default SingleBlogPost;
