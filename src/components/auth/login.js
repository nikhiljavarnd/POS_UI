import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../common/formFields/textFieldWrapper";
import { Grid, Paper, Button } from "@mui/material";
import * as Yup from "yup";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const initialValues = {
    username: "",
    password: "",
  };
  const validationSchema = {
    username: "",
    password: "",
  };
  const buttonStyle = { margin: 20 };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <TextFieldWrapper
                  label="Username"
                  name="username"
                  placeholder="Username"
                />
                <TextFieldWrapper
                  label="Password"
                  name="password"
                  type="password"
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  style={buttonStyle}
                >
                  login
                </Button>
              </Form>
            )}
          </Formik>
          Not a User. Register <Link to="/register"> here</Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Login;
