import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import SearchBar from "material-ui-search-bar";
import Container from "@material-ui/core/Container";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";

import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: "", url: "/#" },
  { title: "", url: "/#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text what's most interesting in this post's contents.",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
  imgText: "main image description",
  linkText: "Continue reading…",
};

const Blog = (props: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  let blogposts = useSelector(
    (state: any) => state.blogpostReducer.allBlogPosts
  );

  const handleSearch = () => {
    dispatch
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Container maxWidth="sm">
            <SearchBar
            //value={this.state.value}
            //onChange={(newValue) => this.setState({ value: newValue })}
            //onRequestSearch={() => doSomethingWith(this.state.value)}
            />
          </Container>
          <br />

          <Grid container spacing={4}>
            {console.log(blogposts)}
            {blogposts.length > 0
              ? blogposts.map((post: any) => (
                  <FeaturedPost key={post.blogpost_title} post={post} />
                ))
              : null}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
};

export default Blog;
