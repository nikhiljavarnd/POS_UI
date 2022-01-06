import React from "react";
import ToppingListing from "../toppings/toppingListing";
import ProfileCard from "../ProfileCard/ProfileCard";
import PizzaListing from "../pizza/PizzaListing";
import { Grid } from "@material-ui/core";

function AdminDashboard(props) {
  return (
    <React.Fragment>
      <ProfileCard />
      <Grid container style={{ justifyContent: "center" }}>
        <Grid md={7} style={{ border: "1px solid #ffb80e", margin: "20px" }}>
          <PizzaListing />
        </Grid>
        <Grid md={4} style={{ border: "1px solid #ffb80e", margin: "20px" }}>
          <ToppingListing />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdminDashboard;
