import React from "react";
import { connect } from "react-redux";
import { Container, Grid, Typography } from "@mui/material";
import PizzaCard from "./pizzaCard";

const pizzaArray = [
  {
    _id: "1",
    name: "MARGHERITA [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Margherit.jpg",
    price: 350.0,
  },
  {
    _id: "2",
    name: "DOUBLE CHEEZE MARGHERITA [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
    price: 350.0,
  },
  {
    _id: "3",
    name: "FARM HOUSE [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
    price: 350.0,
  },
  {
    _id: "4",
    name: "PEPPY PANEER [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
    price: 350.0,
  },
  {
    _id: "5",
    name: "MEXICAN GREEN WAVE [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
    price: 350.0,
  },
  {
    _id: "6",
    name: "DELUXE VEGGIE [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg",
    price: 350.0,
  },
  {
    _id: "7",
    name: "VEG EXTRAVEGANZA [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Veg_Extravaganz.jpg",
    price: 350.0,
  },
  {
    _id: "8",
    name: "CORN N CHEEZE [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
    price: 350.0,
  },
  {
    _id: "9",
    name: "CORN N CHEEZE [BIG 10'']",
    description:
      " Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn | Capsicum | Onion | Serves 2-3.",
    image: "https://www.dominos.co.in/files/items/Corn_&_Cheese.jpg",
    price: 350.0,
  },
];

const Listing = (props) => {
  return (
    <Container>
      <Typography variant="h6" color="secondary">
        Vegetarian Pizza
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {pizzaArray?.map((pizza) => (
          <Grid item xs={12} sm={6} md={4} key={pizza._id}>
            <PizzaCard pizza={pizza} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default connect()(Listing);
