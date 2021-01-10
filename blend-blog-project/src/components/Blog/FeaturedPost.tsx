import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditIcon from '@material-ui/icons/Edit';

const cardImage = "https://source.unsplash.com/random";

const useStyles = makeStyles({
  card: {
    display: 'flex',
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

  return (
    <Grid item xs={12} md={6}>
      <Link to={`/blog/${post.id}`} style={{textDecoration:"none"}}>
      <CardActionArea component="a" >
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
            <Link to={`/blog/edit/${post.id}`}><EditIcon /></Link>
            <DeleteOutlineIcon />

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
            <CardMedia className={classes.cardMedia} image={cardImage} title={post.imageTitle} />
          </Hidden>
        </Card>
      </CardActionArea>
      </Link>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.object,
};

export default FeaturedPost;