import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from 'react-redux';
import { deleteBlogPost } from '../../redux/actions/blogpostActions';
const cardImage = "https://source.unsplash.com/random";

const useStyles = makeStyles({
  card: {
    display: "flex",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
});

const FeaturedPost = (props: any) => {
  const classes = useStyles();
  const { post } = props;

  const state = {
    pathname: `/blog/${post.id}`,
    blogpost: post
  }

  const dispatch = useDispatch();
  const history = useHistory();
  const handleDelete = () => {
    //Going to use react-confirm-alert
    confirmAlert({
      title: 'Confirm to delete',
      message: `Are you sure you want to delete this post? There's no getting it back.`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteBlogPost(post.id, history))
        },
        {
          label: 'No',
          onClick: () => alert('Click No')
        }
      ]
    });
    }

  return (
    <Grid item xs={12} md={6}>
      <Link to={state} style={{ textDecoration: "none" }}>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
                <Link to={`/blog/edit/${post.id}`}>
                  <EditIcon />
                  {console.log(typeof post.id)}
                </Link>
                <DeleteOutlineIcon onClick={handleDelete}/>

                <Typography component="h2" variant="h5">
                  {post.blogpost_title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.blogpost_content}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
            </div>
            <Hidden xsDown>
              <CardMedia
                className={classes.cardMedia}
                image={cardImage}
                title={post.imageTitle}
              />
            </Hidden>
          </Card>
        </CardActionArea>
      </Link>
    </Grid>
  );
};

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

export default FeaturedPost;
