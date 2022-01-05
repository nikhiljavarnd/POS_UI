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
  Radio,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Slide,
  useScrollTrigger,
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

export default function ToppingModal({ open, handleClose, pizza }) {
  const classes = useStyles();

  const [pizzaQuantity, setPizzaQuantity] = useState(1);
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

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
        <Grid container>
          <Grid item xs mr={4}>
            <Typography variant="h6">{pizza.name}</Typography>
            <Box sx={{ border: "1px solid grey", borderRadius: "8px" }}>
              <CardMedia
                className={classes.media}
                image={pizza.image}
                title={pizza.name}
              />
            </Box>
            <Typography variant="p">{pizza.description}</Typography>
            <Grid container mt={2}>
              <Grid item>
                <Typography variant="p">
                  <b>{`Price: ${pizza.price}`}</b>
                </Typography>
              </Grid>
              <Grid item xs={6}></Grid>
              <Grid item xs align="right">
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
          <Divider orientation="vertical" flexItem></Divider>
          {/* Second Half */}
          <Grid item xs>
            <Box
              style={{
                maxHeight: "60vh",
                overflowY: "auto",
                overflowX: "hidden",
              }}
            >
              <Stack mr={2}>
                <Grid container m={2}>
                  <Grid item xs>
                    Serves
                  </Grid>
                  <Grid item xs align="right">
                    (select a size)
                  </Grid>
                </Grid>

                {/* Serves Part */}
                <Grid container direction="row" alignItems="center">
                  <Grid item xs ml={2}>
                    <Radio
                      checked={selectedValue === "a"}
                      onChange={handleChange}
                      value="a"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                    <Typography variant="p">Regular(7")</Typography>
                  </Grid>
                  <Grid item xs align="right">
                    $285
                  </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center">
                  <Grid item xs ml={2}>
                    <Radio
                      checked={selectedValue === "b"}
                      onChange={handleChange}
                      value="b"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "B" }}
                    />
                    <Typography variant="p">Regular(7")</Typography>
                  </Grid>
                  <Grid item xs align="right">
                    <Typography variant="p">$285</Typography>
                  </Grid>
                </Grid>

                <Grid container m={2}>
                  <Grid item xs>
                    Add Toppings
                  </Grid>
                  <Grid item xs align="right">
                    (optional)
                  </Grid>
                </Grid>

                <FormGroup>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Paneer Cubes"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Peperoni"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Peperoni"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Peperoni"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Peperoni"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                  <Grid container direction="row" alignItems="center">
                    <Grid item xs ml={3}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Peperoni"
                      />
                    </Grid>
                    <Grid item xs align="right">
                      $285
                    </Grid>
                  </Grid>
                </FormGroup>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
          mt={4}
        >
          <Button variant="contained">Add to Cart</Button>
        </Grid>
      </Box>
    </Modal>,
    document.querySelector("#modal")
  );
}
