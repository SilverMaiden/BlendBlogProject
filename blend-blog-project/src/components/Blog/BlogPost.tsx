import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormikNewPostForm from "../CreateBlogPost/FormikNewPostForm";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { getSingleBlogPost } from '../../redux/actions/blogpostActions';
import { getUser } from '../../redux/actions/userActions';

interface SingleBlogPost {
  blogpost_title: string,
  blogpost_content: string,
  user_id: number,
};

interface Author {
  id: number,
  name: string,
  email: string
}

const BlogPost = () => {
  const userPost: SingleBlogPost = useSelector((state: any) => state.blogpostReducer.singleBlogPost) ;

  const url: string = window.location.pathname;
  const postId = parseInt(url.substring(url.lastIndexOf('/') + 1));

  console.log(postId)


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleBlogPost(postId));
    //dispatch(getUser(userPost.user_id));

  },[])
  const post = {
    title: userPost.blogpost_title,
    description: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
    linkText: "Continue reading…",
  };

  //Single blog needs to get data not from props and instead from the redux store
  // on page load for data persistence.


  /* Potential steps to take:
  Use the useSelector hook from react-redux to get all user blogs from the store
  Filter through and find the blogpost with the blogpost id in the url?
  Probably fine while number of blogposts are small, but this approach wouldn't scale.
  --UPDATE: I specifically made an action and value called "singleBlogPost" in the store for 
  this exact purpose.

  Dispatch an action specifically for getting single post? Use loader while data isn't present? 
  ^^ For this approach, need to think about accessing values while data isn't present
  and how to update local state.

  1. Blogpost page loads
  2. On page load, dispatch action to redux store for single blogpost
  3. While dispatch is taking place, show some sort of loading signal
  4. When data is present, render the blogpost component.  
  */


  return (
    <React.Fragment>
      <CssBaseline />
      <main>
          <MainFeaturedPost post={post} />
          <br />
          <Container>
            <h1>{post.title}</h1>
            <br />

            <p>{userPost.blogpost_content}</p>            
            </Container>

        </main>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
};

export default BlogPost;
