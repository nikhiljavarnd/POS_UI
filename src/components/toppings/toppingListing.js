import React from "react";
import { connect } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

import AddToppingModal from "./addToppingModal";
import Edittopping from "./Edittopping";
import Deletetopping from "./deletetopping";

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData("Black olives", 350.0),
  createData("Crisp Capsicum", 350.0),
  createData("Golden corn", 350.0),
  createData("Fresh Tomato", 350.0),
  createData("Chunky Chicken", 350.0),
  createData("Zesty Chicken", 350.0),
  createData("Hot N Spicy Chicken", 350.0),
  createData("Extra Cheese", 350.0),
];

const ToppingListing = (props) => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{
                  fontWeight: "bolder",
                  fontSize: "25px",
                  color: "#787878",
                }}
              >
                Toppings
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  color: "#787878",
                }}
              >
                Price
              </TableCell>

              <TableCell align="right">
                <AddToppingModal />
              </TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" placeholder={row.name}>
                  {row.name}
                </TableCell>
                <TableCell align="center" placeholder={row.price}>
                  {row.price}
                </TableCell>

                <TableCell align="right">
                  <Edittopping />
                </TableCell>
                <TableCell align="center">
                  <Deletetopping />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default connect()(ToppingListing);
