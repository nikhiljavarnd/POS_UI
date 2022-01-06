import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import React from "react";

import AddPizzaModal from "./AddPizzaModal";
import Deletetopping from "../toppings/deletetopping";
import EditPizzaModal from "../pizza/PizzaEditModal";

function createData(name, size, price) {
  return { name, size, price };
}

const rows = [
  createData("MARGHERITA [BIG 10'']", "Large", 350.0),
  createData("DOUBLE CHEEZE MARGHERITA [BIG 10'']", "Large", 350.0),
  createData("FARM HOUSE [BIG 10'']", "Medium", 350.0),
  createData("PEPPY PANEER [BIG 10'']", "Medium", 350.0),
  createData("MEXICAN GREEN WAVE [BIG 10'']", "Regular", 350.0),
  createData("DELUXE VEGGIE [BIG 10'']", "Medium", 350.0),
  createData("VEG EXTRAVEGANZA [BIG 10'']", "Regular", 350.0),
  createData("CORN N CHEEZE [BIG 10'']", "Medium", 350.0),
];

function PizzaListing() {
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
                Pizza name
              </TableCell>
              <TableCell
                align="left"
                style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  color: "#787878",
                }}
              >
                Size
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
              <TableCell align="center">
                <AddPizzaModal/>
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
                <TableCell component="th" scope="row" placeholder={row.size}>
                  {row.size}
                </TableCell>
                <TableCell align="center" placeholder={row.price}>
                  {row.price}
                </TableCell>
                <TableCell align="center">
                  <EditPizzaModal />
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
}

export default PizzaListing;