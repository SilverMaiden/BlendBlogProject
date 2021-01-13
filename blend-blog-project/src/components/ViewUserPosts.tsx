import React, { useState, useEffect, useRef } from "react";
import Header from "./Blog/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Blog/Footer";
import MainFeaturedPost from "./Blog/MainFeaturedPost";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import FeaturedPost from "./Blog/FeaturedPost";
import Grid from "@material-ui/core/Grid";

const ViewUserPosts = (props: any) => {
  const mainFeaturedPost = {
    title: "View Your Blog Posts",
    description: "Here you can view all the blog posts you have created.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
  };

  // May need to possible dispatch an action to get all user blogs...?
  //Or just filter through all blogs in state, makes more sense.

 /* useEffect(() => {
    dispatch()
  })*/
  //let id = window.localStorage.getItem("id");
  let userPosts = useSelector((state: any) => state.blogpostReducer.blogposts);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {console.log(userPosts)}

          {userPosts.map((post: any) => (
            <FeaturedPost key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
};

export default ViewUserPosts;
