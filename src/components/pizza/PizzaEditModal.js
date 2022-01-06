import React from "react";
import { Formik, Form } from "formik";
import TextFieldWrapper from "../common/formFields/textFieldWrapper";
import { Grid, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Icon } from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  p: 0,
};

function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl fullWidth variant="standard" sx={{ m: 0, minWidth: 160 }}>
        <InputLabel >Size</InputLabel>
        <Select
          

          value={age}
          onChange={handleChange}
          label="Size"
        >
          
          <MenuItem value={10}>Regular</MenuItem>
          <MenuItem value={20}>Medium</MenuItem>
          <MenuItem value={30}>Large</MenuItem>
        </Select>
      </FormControl>
      
    </div>
  );
}


export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const paperStyle = {
    padding: 0,
    height: "45vh",
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
          <h1>Update Pizza</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <TextFieldWrapper
                  label="Pizza Name"
                  name="name"
                  placeholder=""
                />
                                
                <TextFieldWrapper
                  label="Price"
                  name="price"
                  type="number"
                />

                <SelectVariants/>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={isSubmitting}
                  style={buttonStyle}
                >
                  Update
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