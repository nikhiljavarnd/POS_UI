import React from "react";
import { connect } from "react-redux";
import PizzaCard from "./pizzaCard";

const Listing = (props) => {
  return (
    <React.Fragment>
      <h1>Dashboard & Pizza</h1>
      <PizzaCard />
    </React.Fragment>
  );
};

export default connect()(Listing);
