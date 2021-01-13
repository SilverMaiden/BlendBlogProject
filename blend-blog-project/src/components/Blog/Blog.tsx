import React, { useState, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

// Material UI Imports
import Grid from "@material-ui/core/Grid";
import SearchBar from "material-ui-search-bar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

// Component Imports
import Header from "./Header";
import HeroBanner from "./HeroBanner";
import BlogCard from "./BlogCard";
import Footer from "./Footer";

// Actions Import
import { getFilteredBlogPosts } from "../../redux/actions/blogpostActions";

const mainBlogHeroBanner: object = {
  title: "Welcome to TheBlogTm",
  description: "Enjoy reading our super interesting content!",
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
  imgText: "main image description",
};

const Blog = (props: any ) => {
  const dispatch = useDispatch();
  const history = useHistory();
  let blogposts = useSelector(
    (state: any) => state.blogpostReducer.filteredBlogPosts
  );

  const [searchFilter, setSearchFilter] = useState("");
  const handleSearch = () => {
    dispatch(getFilteredBlogPosts(searchFilter, history));
  };

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <main>
          <HeroBanner post={mainBlogHeroBanner} />
          <Container maxWidth="sm">
            <SearchBar
              value={searchFilter}
              onChange={(value: any) => {
                console.log(value);
                setSearchFilter(value);
                console.log(searchFilter);
                handleSearch();
              }}
            />
          </Container>
          <br />

          <h2> Blogs: </h2>
          <Grid container spacing={4}>
            {console.log(blogposts)}
            {blogposts.length === 0 ? (
              <Container>
                <h4>
                  {" "}
                  There are currently no blogs available for you to view.{" "}
                </h4>
              </Container>
            ) : (
              blogposts.map((post: any) => (
                <BlogCard key={post.id} post={post} />
              ))
            )}
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Fragment>
  );
};

export default Blog;
