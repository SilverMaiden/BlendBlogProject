import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from '../Blog/Header';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Form from "@material-ui/core/FormGroup";

import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Footer from '../Blog/Footer';
import NewPostForm from './NewPostForm';
import MainFeaturedPost from '../Blog/MainFeaturedPost';

export default function CreateBlogPost(props: any) {
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text what's most interesting in this post's contents.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwZQ_Fc8p7OHV7r01bZeZrhfZlHRfnKL2O3Q&usqp=CAU',
    imgText: 'main image description',
    linkText: 'Continue reading…',
  };
  

  let blogposts = useSelector((state: any) => state.blogpostReducer.allBlogPosts);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Header />
        <MainFeaturedPost post={mainFeaturedPost} />
        <NewPostForm />



      </Container>
      <Footer title="Footer" description="Something here to give the footer a purpose!" />
    </React.Fragment>
  );
}

