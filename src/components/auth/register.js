import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../common/formFields/textFieldWrapper";
import { Grid, Paper, Button } from "@mui/material";

const Register = () => {
  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto",
  };
  const initialValues = {
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
          <h1>Register</h1>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ values, isSubmitting }) => (
              <Form>
                <TextFieldWrapper
                  label="Name"
                  name="username"
                  placeholder="Full Name"
                />

                <TextFieldWrapper
                  label="Phonenumber"
                  name="phonenumber"
                  placeholder="Phone Number"
                />
                <TextFieldWrapper
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="example@domain.com"
                />
                <TextFieldWrapper
                  label="Password"
                  name="password"
                  type="password"
                />
                <TextFieldWrapper
                  label="Confirm Password"
                  name="confirmPassword"
                  type="text"
                /> 
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  style={buttonStyle}
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          Already Registered ? <Link to="/login"> Login Here</Link>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Register;
