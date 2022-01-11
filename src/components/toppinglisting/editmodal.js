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

export default function EditModal(props) {
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
      <Button onClick={handleOpen}>
        <Icon className="edit-icon"
          variant="contained"
          sx={{ marginRight: 1.2, marginBottom: 1.2 }} style={{ fontSize: "24px" }}>
          edit_circle
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
              <h1>Edit Topping</h1>
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
                      placeholder={props.values}
                    />
                    <TextFieldWrapper
                      label="Price"
                      name="price"
                      type=""
                      placeholder={props.values}
                    />
                    <Button
                      type="submit"
                      variant="contained"
                      disabled={isSubmitting}
                      style={buttonStyle}
                    >
                      Edit Topping
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



