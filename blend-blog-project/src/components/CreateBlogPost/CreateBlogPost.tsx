import React from "react";
import Header from "../Blog/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormikNewPostForm from "./FormikNewPostForm";
import Footer from "../Blog/Footer";
import MainFeaturedPost from "../Blog/MainFeaturedPost";
import Container from "@material-ui/core/Container";

export default function CreateBlogPost(props: any) {
  const mainFeaturedPost = {
    title: "Title of a longer featured blog post",
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
      <Container maxWidth="lg">
        <Header />
        <MainFeaturedPost post={mainFeaturedPost} />
        <FormikNewPostForm />
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </React.Fragment>
  );
}
