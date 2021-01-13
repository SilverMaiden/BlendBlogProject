import React, { useState, useEffect, useRef } from "react";
import Header from "./Blog/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import Footer from "./Blog/Footer";
import MainFeaturedPost from "./Blog/MainFeaturedPost";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import FeaturedPost from "./Blog/FeaturedPost";
import Grid from "@material-ui/core/Grid";
import {useDispatch} from 'react-redux';
import {getFavorites} from '../redux/actions/blogpostActions';

const Favorites = (props: any) => {
  let dispatch = useDispatch();
  const mainFeaturedPost = {
    title: "View Your Favorites",
    description: "Here you can view all your favorite blog posts.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
  };

  useEffect(() => {
    //dispatch(getFavorites(userId));

  }, [])

  let id = window.localStorage.getItem("id");
  let userId = useSelector((state: any) => state.userReducer.id);
  let userFavorites = useSelector((state: any) => state.blogpostReducer.favorites);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Grid container spacing={4}>
          {console.log(userFavorites)}
          {userFavorites.map((post: any) => (
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

export default Favorites;
