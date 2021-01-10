import React from "react";
import Header from "./Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormikNewPostForm from "../CreateBlogPost/FormikNewPostForm";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";


const BlogPost = (props: any) => {
  const userPost = props.location.blogpost;
  const post = {
    title: userPost.blogpost_title,
    description:
      "Multiple lines of text what's most interesting in this post's contents.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU",
    imgText: "main image description",
    linkText: "Continue reading…",
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
          <MainFeaturedPost post={post} />
          <br />
          <Container>
            {console.log(props)}
            {userPost.blogpost_content}
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
