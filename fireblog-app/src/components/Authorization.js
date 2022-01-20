import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { Formik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@mui/styles";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { Form } from "react-bootstrap";
import blokPng from "../assets/blok.png";
import loadingGif from "../assets/loading.gif";
import googlePng from "../assets/google.png";
const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    "& .MuiPaper-root": {
      borderRadius: "30px",
      boxShadow: "10px 10px 5px 0px rgba(0,0,0,0.75);",
      height: "fit-content",
      marginTop: 30,
      maxWidth: "500px",
    },
  },
  image: {
    backgroundImage: "url(https://picsum.photos/1600/900)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    paddingTop: "40px",
  },
  paper: {
    margin: "32px 64px",
  },
  avatar: {
    margin: "auto",
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    backgroundColor: "#046582",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "16px",
  },
  submit: {
    margin: "24px 0 16px",
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#046582",
    },
  },
  header: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  loadingGif: {
    width: 75,
  },
  loadingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  googleImg: {
    width: 75,
    marginLeft: 10,
  },
  googleBtn: {
    backgroundColor: "white",
    fontWeight: "bold",
  },
}));

const ValidationSchema = Yup.object().shape({
  email: Yup.string("Enter your email")
    .email("Invalid email address")
    .required("Required"),
  password: Yup.string("Enter your password").required("password required"),
});

const LoginAndRegisterForm = (props) => {
  // console.log(props);
  const { loginWithGoogle } = useAuth();

  const handleGoogleProvider = () => {
    loginWithGoogle();
  };
  const { handleBlur, handleChange, errors, values, touched, isSubmitting } =
    props;
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid container justifyContent="center" className={classes.image}>
        <Grid item component={Paper} elevation={6} square xs={12} sm={8} md={6}>
          <Grid className={classes.paper}>
            <img src={blokPng} className={classes.avatar} alt="candela" />

            <Typography className={classes.header} component="h1" variant="h5">
              ── {props.method} ──
            </Typography>
            <Form className={classes.form}>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={handleChange}
                onBlur={handleBlur}
                autoFocus
                value={values.email}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              {isSubmitting ? (
                <div className={classes.loadingContainer}>
                  <img
                    src={loadingGif}
                    alt="Loading"
                    className={classes.loadingGif}
                  />
                </div>
              ) : (
                <div>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className={classes.submit}
                  >
                    {props.method}
                  </Button>
                  <Button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "white",
                      fontWeight: "bold",
                    }}
                    fullWidth
                    variant="contained"
                    onClick={handleGoogleProvider}
                    className={classes.googleBtn}
                  >
                    <p style={{ color: "black", marginRight: "5px" }}>Width</p>

                    <img
                      src={googlePng}
                      alt="google"
                      className={classes.googleImg}
                    />
                  </Button>
                </div>
              )}
            </Form>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Authorization = (props) => {
  const navigate = useNavigate();
  const { signup, login, currentUser } = useAuth();
  const [method] = useState(props.method);
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values, actions) => {
          //   if (method === "Login") {
          //     login(values.email, values.password)
          //       .then(() => {
          //         toastSuccessNotify(`${method} Successfully performed!`);
          //         history.push("/");
          //         actions.setSubmitting(false);
          //       })
          //       .catch((error) => {
          //         toastErrorNotify(error.message);
          //         actions.setSubmitting(false);
          //         actions.resetForm();
          //       });
          //   } else {
          //     signup(values.email, values.password)
          //       .then(() => {
          //         toastSuccessNotify(`${method} Successfully performed!`);
          //         history.push("/");
          //         actions.setSubmitting(false);
          //       })
          //       .catch((error) => {
          //         toastErrorNotify(error.message);
          //         actions.setSubmitting(false);
          //         actions.resetForm();
          //       });
          //   }
        }}
        component={(props) => (
          <LoginAndRegisterForm method={method} {...props} />
        )}
      ></Formik>
    </div>
  );
};

export default Authorization;