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
import { Icon } from "@material-ui/core";

import AddToppingModal from "./addToppingModal"

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
                align="right"
                style={{
                  fontWeight: "bolder",
                  fontSize: "22px",
                  color: "#787878",
                }}
              >
                Price
              </TableCell>
              
                < TableCell align="right">
              <div className="add-items">
                <AddToppingModal />
                
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>

              <TableCell align="right">
                <Icon className="edit-icon">edit_circle</Icon>
              </TableCell>
              <TableCell align="center">
                <Icon className="del-icon">delete_circle</Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
      );
    }



export default connect()(ToppingListing);
