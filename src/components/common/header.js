import React, { useState } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core";
import {
  Typography,
  IconButton,
  Container,
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalPizzaIcon from "@mui/icons-material/LocalPizza";

import MenuLink from "./menuLink";

import { logout } from "../../redux/actions/authActions";

const authToken = localStorage.getItem("authToken");

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "linear-gradient(45deg, #ff8f1f 30%, #ffb80e 90%)",
  },
}));

const Header = (props) => {
  const [linkName, setLinkName] = useState(authToken ? "Logout" : "Login");

  const { logout } = props;

  const logoutUser = () => {
    setLinkName("Login");
    logout();
  };

  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <MenuLink route="/" linkName="APNA PIZZA">
                <LocalPizzaIcon />
              </MenuLink>
            </Typography>

            <Box sx={{ flexGrow: 1, display: "flex" }}>
              <MenuLink route="/admin" linkName="Admin Dashboard" />
            </Box>

            <IconButton aria-label="add to shopping cart">
              <ShoppingCartIcon
                color="secondary"
                sx={{
                  "&:hover": {
                    color: "#e32929",
                  },
                }}
              />
            </IconButton>
            <MenuLink
              route="/login"
              linkName={linkName}
              clickHandler={authToken ? logoutUser : null}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default connect(null, { logout })(Header);
