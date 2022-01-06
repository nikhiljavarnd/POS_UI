import React from "react";

import { Formik, Form } from "formik";
import TextFieldWrapper from "../common/formFields/textFieldWrapper";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const paperStyle = {
    padding: 0,
    height: "40vh",
    width: 280,
    margin: "auto",
  };
  const initialValues = {
    topping: "",
    price: "",
  };
  const validationSchema = {
    topping: "",
    price: "",
  };
  const buttonStyle = { margin: 40 };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Button onClick={handleOpen} sx={{ marginLeft: 1.2, marginBottom: 1.2 }}>
        <Icon
          className="add-icon"
          variant="contained"
          style={{ fontSize: "40px" }}
        >
          add_circle
        </Icon>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid align="center" style={paperStyle}>
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
                    <TextFieldWrapper label="Price" name="price" type="" />
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
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
