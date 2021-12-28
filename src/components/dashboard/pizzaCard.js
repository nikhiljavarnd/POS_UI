import * as React from "react";
import { connect } from "react-redux";
import {
  Typography,
  Tooltip,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Box,
} from "@mui/material/";
import ToppingModal from "./toppingModal";
import { Formik, Form } from "formik";

import DropdownWrapper from "../common/formFields/dropdownWrapper";

const PizzaCard = ({ pizza }) => {
  const sizeOptions = [
    {
      name: "Regular",
      value: 0,
    },
    {
      name: "Medium",
      value: 1,
    },
    {
      name: "Large",
      value: 2,
    },
  ];
  const FORM_INITIAL_VALUES = {
    size: "",
    qty: "",
  };

  const onSubmit = (values, { setSubmitting }) => {};

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="380"
        image={pizza.image}
      />
      <CardContent>
        <Tooltip title={pizza.name} placement="bottom-start" arrow>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="secondary"
            noWrap
          >
            {pizza.name}
          </Typography>
        </Tooltip>
        <Typography variant="body2" color="secondary">
          {pizza.description}
        </Typography>
        <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={onSubmit}>
          {({ values, isSubmitting }) => {
            return (
              <Form>
                <DropdownWrapper
                  name="size"
                  options={sizeOptions}
                  label="Select Size"
                />
              </Form>
            );
          }}
        </Formik>
      </CardContent>
      <CardActions color="secondary">
        <Typography
          variant="body2"
          color="secondary"
          sx={{ flexGrow: 1, paddingLeft: 1.2 }}
        >
          {`Price: ${pizza.price}`}
        </Typography>

        <ToppingModal />
      </CardActions>
    </Card>
  );
};

export default connect()(PizzaCard);
