import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Tooltip,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  Button,
} from "@mui/material/";
import ToppingModal from "./toppingModal";

const PizzaCard = ({ pizza }) => {
  const [open, setOpen] = useState(false);
  const [pizzaData, setPizzaData] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addDataToToppingModal = (pizza) => {
    setPizzaData(pizza);
    console.log(pizza);
    handleOpen();
  };

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
      </CardContent>
      <CardActions color="secondary">
        <Typography
          variant="body2"
          color="secondary"
          sx={{ flexGrow: 1, paddingLeft: 1.2 }}
        >
          {`Price: ${pizza.price}`}
        </Typography>
        <Button
          onClick={() => addDataToToppingModal(pizza)}
          variant="contained"
          sx={{ marginRight: 1.2, marginBottom: 1.2 }}
        >
          Add
        </Button>

        <ToppingModal open={open} handleClose={handleClose} pizza={pizzaData} />
      </CardActions>
    </Card>
  );
};

export default connect()(PizzaCard);
