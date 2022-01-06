import React from "react";
import "./ProfileCard.css";
import { Grid, Typography, Button } from "@material-ui/core";
import Switch from "@mui/material/Switch";
import pizzaImg from "./img/pizza.png";

const label = { inputProps: { "aria-label": "Switch demo" } };

function ProfileCard() {
  return (
    <div>
      <Grid container className="pizza-card">
        <img src={pizzaImg} className="pizza-img" alt="pizza" />

        <Grid item xs={4}>
          <Typography variant="subtitle1">Name: Nikhil Medappa</Typography>
          <Grid>
            <Typography variant="subtitle1">Phone: 8169029499</Typography>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1">
            Email: nikhilkarineravanda@gmail.com
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" style={{ padding: "5px 30px" }}>
            Edit
          </Button>
          <Grid style={{ marginTop: "10px" }}>
            <Typography variant="subtitle1">
              Veg only
              <Switch {...label} defaultChecked />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default ProfileCard;
