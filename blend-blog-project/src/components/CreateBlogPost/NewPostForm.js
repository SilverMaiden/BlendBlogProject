import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.mode === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
      width: "25%"
    },
}))

export default function NewPostForm() {
    const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Create New Post
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="title"
            name="title"
            label="title"
            style ={{width: '50%'}}
            autoComplete="Blog Title"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="content"
            name="content"
            label="content"
            id="filled-textarea"
            multiline
            variant="filled"
            fullWidth
            style ={{width: '50%'}}
            autoComplete="Write post here..."
          />
        </Grid>
        <Grid item xs={12}>
        <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Submit Post
            </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}