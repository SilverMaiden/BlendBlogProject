import React, { useState } from "react";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Hidden from "@material-ui/core/Hidden";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux"; // -- Will need this for favoriting posts
import { findAllByDisplayValue } from "@testing-library/react";
import {addFavorite, deleteFavorite} from "../../redux/actions/blogpostActions";

const cardImage = "https://source.unsplash.com/random";


const defaultFavoriteVal: boolean = false;

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
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [favorite, setFavorite] = useState(defaultFavoriteVal);
  const { post } = props;
  let userFavorites = useSelector((state: any) => state.blogpostReducer.favorites);
  let userId = useSelector((state:any) => state.userReducer.id)

  const state = {
    pathname: `/blog/${post.id}`,
    blogpost: post,
    editMode: false
  };

  const isInFavorites = () => {
    if (favorite) {
      return (<StarIcon onClick={toggleFavorites}/>)
    } else {
      return (<StarOutlineIcon onClick={toggleFavorites}/>)
    }
  }
  const toggleFavorites = () => {
    // Pass the current users id, along with the blog post id
    if (favorite) {
      dispatch(deleteFavorite(userId, post.id, history));
    } else {
      dispatch(addFavorite(userId, post.id, history));
      
    }
    setFavorite(!favorite);

  }

  return (
    <Grid item xs={12} md={6}>
      {console.log(userId)}
      {isInFavorites()}
      <Link to={state} style={{ textDecoration: "none" }}>
        <CardActionArea component="a">
          <Card className={classes.card}>
            <div className={classes.cardDetails}>
              <CardContent>
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
