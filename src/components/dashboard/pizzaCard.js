import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pizzaImage from "../../images/1.jpg";
import ToppingModal from "./toppingModal";

export default function PizzaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={pizzaImage}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Crowded House [BIG 10'']
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Extra Cheese | Paneer Cubes | Black Olive | Red Paprika | Golden Corn
          | Capsicum | Onion | Serves 2-3.
        </Typography>
      </CardContent>
      <CardActions>
        ₹ 545
        <ToppingModal />
      </CardActions>
    </Card>
  );
}
