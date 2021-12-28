import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#982121",
    fontSize: "16px",
    fontWeight: 600,
    "&:hover": {
      color: "#e32929",
    },
  },
  logoDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));

const MenuLink = ({ route, linkName, clickHandler, ...props }) => {
  const classes = useStyles();
  return (
    <Link to={route} className={classes.link} onClick={clickHandler}>
      <div className={classes.logoDiv}>{props.children}</div>
      {linkName}
    </Link>
  );
};

export default MenuLink;
