import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { connect } from "react-redux";

import MenuLink from "./menuLink";

import { logout } from "../../redux/actions/authActions";

const authToken = localStorage.getItem("authToken");

const Header = (props) => {
  const [linkName, setLinkName] = useState(authToken ? "Logout" : "Login");

  const { logout } = props;

  const logoutUser = () => {
    setLinkName("Login");
    logout();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: "#1d3557" }}>
        <Toolbar variant="regular">
          <MenuLink route="/" linkName="Pizza Order" />
          <MenuLink route="/toppings" linkName="Toppings CRUD" />
          <MenuLink
            route="/login"
            linkName={linkName}
            clickHandler={authToken ? logoutUser : null}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default connect(null, { logout })(Header);
