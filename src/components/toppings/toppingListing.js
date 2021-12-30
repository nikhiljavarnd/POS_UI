import React from "react";
import { connect } from "react-redux";


import AddToppingModal from "./addToppingModal";

const ToppingListing = (props) => {
  return (
    <React.Fragment> 
      <h1>Toppings to be added!</h1>
      
      <AddToppingModal/> 
    </React.Fragment>
  );
};

export default connect()(ToppingListing);
// comment

