import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: "none",
    color: "#f1faee",
    fontSize: "16px",
    fontWeight: 600,
    marginLeft: theme.spacing(16),
    "&:hover": {
      color: "#a8dadc",
    },
  },
}));

const MenuLink = ({ route, linkName, clickHandler }) => {
  const classes = useStyles();
  return (
    <Link to={route} className={classes.link} onClick={clickHandler}>
      {linkName}
    </Link>
  );
};

export default MenuLink;
