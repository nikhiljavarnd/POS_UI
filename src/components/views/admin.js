import React from "react";
import ToppingListing from "../toppings/toppingListing";
import ProfileCard from "../ProfileCard/ProfileCard";

function AdminDashboard(props) {
  return (
    <React.Fragment>
      <ProfileCard />
      <ToppingListing />
    </React.Fragment>
  );
}

export default AdminDashboard;
