import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field, FormikProps} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import UserCard from '../UserCard/UserCard';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: 'url(https://source.unsplash.com/random)',
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.mode === 'light'
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
interface AllProps {
  status: any;
}

 // Shape of form values
 interface FormValues {
  email: string;
  password: string;
}

const LogIn = (props:FormikProps<FormValues>) => {

  
    const classes = useStyles();
    const [users, setUsers] = useState([]);


    return (
        <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Form className={classes.form}>

            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/" variant="body2">
                  {"Don't have an account? Sign up"}
                </Link>
              </Grid>
            </Grid>
            <Box sx={{ mt: 5 }}>
              <Copyright />
            </Box>
            </Form>
        </div>
        </Grid>
    </Grid>
    );
};



 // The type of props FormikUserForm receives
 interface FormikUserFormProps {
   stuff: FormValues;
}

const FormikUserForm = withFormik<FormikUserFormProps, FormValues>({
    mapPropsToValues: props => ({
          email: '',
          password: '',
    })
    ,validationSchema: Yup.object().shape({
        email: Yup.string().required(),
        password: Yup.string().required(),

    }),
    handleSubmit({email, password}: FormValues, {resetForm}) {
        console.log("yaaay it worked!");
        let values = {email, password}
        axios
            .post("http://localhost:8000/api/users/", values)
            .then(res => {
                //setStatus(res.data);
                //{console.log(res.data.password)}
                {console.log(res.data)}
                resetForm();
            })
            .catch(err => console.log(err.response));
    },
})(LogIn);

export default FormikUserForm;
