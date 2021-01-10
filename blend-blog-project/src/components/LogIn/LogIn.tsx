import React, { useState } from "react";
//Implement loader if time allows
//import Loader from 'react-loader-spinner';
import { Link as DOMLink, useHistory } from "react-router-dom";
import PropTypes from "prop-types";

// Maybe move redux content into Formik component
import { Form, FormikProps } from "formik";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  },
}));

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

const LogIn = (props: FormikProps<FormValues>) => {
  const classes = useStyles();
  const [fields, setFields] = useState({
    email: "",
    password: "",
    valid: true,
  });

  const {
    errors,
    touched,
    isSubmitting,
    getFieldHelpers,
    getFieldProps,
    ...rest
  } = props;

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
            Log in
          </Typography>
          {/* FORM STARTS HERE */}
          <Form className={classes.form}>
            {/* Email Text Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              {...getFieldProps("email")}
              onChange={props.handleChange}
              value={props.values.email}
              autoComplete="email"
              autoFocus
              error={Boolean(errors.email && touched.email)}
            />
            {/* Shows error message to users if given invalid email */}
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
            {/* Email Text Field */}
            <TextField
              margin="normal"
              required
              fullWidth
              error={Boolean(errors.password && touched.password)}
              name="password"
              value={props.values.password}
              onChange={props.handleChange}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}

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
              Log in
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
          {/* FORM ENDS HERE */}
        </div>
      </Grid>
    </Grid>
  );
};
//withFormik is applied to this component in '../actions/FormikLogInForm.tsx'
export default LogIn;
