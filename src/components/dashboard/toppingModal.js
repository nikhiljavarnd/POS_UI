import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  Modal,
  Box,
  Grid,
  Divider,
  Typography,
  CardMedia,
  Button,
  ButtonGroup,
  Stack,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  borderRadius: "5px",
  transform: "translate(-50%, -50%)",
  width: "60vw",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const useStyles = makeStyles((theme) => ({
  media: {
    height: 200,
    width: 200,
    margin: "auto",
  },
  box: {
    position: "absolute",
    top: "50%",
    left: "50%",
    borderRadius: "5px",
    transform: "translate(-50%, -50%)",
    width: "60vw",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
}));

export default function BasicModal({ open, handleClose, pizza }) {
  const classes = useStyles();

  const [pizzaQuantity, setPizzaQuantity] = useState(1);

  const addPizza = () => {
    setPizzaQuantity(pizzaQuantity + 1);
  };

  const removePizza = () => {
    setPizzaQuantity(pizzaQuantity - 1);
  };
  return ReactDOM.createPortal(
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <Typography variant="h6">{pizza.name}</Typography>
            <CardMedia
              className={classes.media}
              image={pizza.image}
              title={pizza.name}
            />
            <Typography variant="p">{pizza.description}</Typography>
            <Grid container spacing={3} mt={2}>
              <Grid item xs="auto">
                <Typography variant="p">
                  <b>{`Price: ${pizza.price}`}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs>
                <ButtonGroup
                  variant="contained"
                  aria-label="outlined primary button group"
                  size="small"
                >
                  <Button onClick={removePizza} disabled={pizzaQuantity < 2}>
                    -
                  </Button>
                  <Button variant="outlined">{pizzaQuantity}</Button>
                  <Button onClick={addPizza} disabled={pizzaQuantity >= 20}>
                    +
                  </Button>
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>

          <Divider orientation="vertical" flexItem />

          {/* Second Half */}
          <Grid item xs={6}>
            <Divider orientation="vertical" flexItem />
            <Stack>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  Serves
                </Grid>
                <Grid item xs={6} align="right">
                  (select a size)
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Modal>,
    document.querySelector("#modal")
  );
}
