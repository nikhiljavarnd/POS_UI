import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { Icon, Button } from "@material-ui/core";
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  border: '2px solid #000',
  bgcolor: "white",
  p: 4,
};

export default function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

const textField = {
    borderBottom: 'dashed',
 }

  return (
    <div>
        <Button variant="contained" style={{ padding: "5px 30px" }} onClick={handleOpen}>
            Edit  
          </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '44ch' },
      }}
      noValidate
      autoComplete="off"
    >
           <div>
        <TextField
          md={12}
          id="standard-required"
          label="Name"
          variant="standard"
          style={textField}
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <Icon
                  aria-label="toggle password visibility"
                  className="edit-icon" onClick={handleOpen}
                  variant="contained"
                  sx={{ marginRight: 1.2, marginBottom: 1.2 }} style={{ fontSize: "24px" }}>
                            edit_circle
                                  
                </Icon>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          
          id="standard"
          label="Phone no."
          variant="standard"
          style={textField}
        />
        <TextField
          
          id="standard-disabled"
          label="Email"
          variant="standard"
          style={textField}
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <Icon
                  aria-label="toggle password visibility"
                  className="edit-icon" onClick={handleOpen}
                  variant="contained"
                  sx={{ marginRight: 1.2, marginBottom: 1.2 }} style={{ fontSize: "24px" }}>
                            edit_circle
                                  
                </Icon>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="standard-password-input"
          label="Password"
          variant="standard"
          style={textField}
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <InputLabel htmlFor="">Change</InputLabel>
              </InputAdornment>
            ),}}
        />
        <TextField
          id="standard-read-only-input"
          label="DOB"
          type='date'
          variant="standard"
          style={textField}
          InputProps={{
            endAdornment: (
                <InputAdornment position="end">
                <Icon
                  aria-label="toggle password visibility"
                  className="edit-icon" onClick={handleOpen}
                  variant="contained"
                  sx={{ marginRight: 1.2, marginBottom: 1.2 }} style={{ fontSize: "24px" }}>
                            edit_circle
                                  
                </Icon>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </Box>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Grid align="center" style={paperStyle}>
                <h1>Name</h1>
                <h1>Phone no</h1>
                <h1>Email</h1>
                <h1>DOB</h1>
               
            </Grid>
          </Typography> */}
        </Box>
      </Modal>
    </div>
  );
}
