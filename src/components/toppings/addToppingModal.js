import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../common/formFields/textFieldWrapper";
import { Grid, Paper, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import * as Yup from "yup";
import { Icon } from "@material-ui/core";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  
  
  p: 0,
};

const AddTopping = () => {
  const paperStyle = {
    padding: 20,
    height: "40vh",
    width: 280,
    margin: "20px auto",
  };
  const initialValues = {
    topping: "",
    price: "",
  };
  const validationSchema = {
    topping: "",
    price: "",
  };
  const buttonStyle = { margin: 20 };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <h1>Add Topping</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <TextFieldWrapper
                  label="Topping Name"
                  name="topping"
                  placeholder=""
                />
                <TextFieldWrapper
                  label="Price"
                  name="price"
                  type=""
                />
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  style={buttonStyle}
                >
                  Add Topping
                </Button>
              </Form>
            )}
          </Formik>
          
        </Grid>
      </Paper>
    </Grid>
  );
};


export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      
        <Icon className="add-icon" onClick={handleOpen}
        variant="contained"
        sx={{ marginRight: 1.2, marginBottom: 1.2 }} style={{ fontSize: "35px" }}>
                  add_circle
                </Icon>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <AddTopping />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}



