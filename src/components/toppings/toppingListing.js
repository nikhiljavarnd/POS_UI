importReactfrom"react";
import{connect}from"react-redux";
import{
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
}from"@material-ui/core";
import{Icon}from"@material-ui/core";


functioncreateData(name,price){
  return{name,price };
}

constrows=[
  createData("Black olives",350.0),
  createData("Crisp Capsicum",350.0),
  createData("Golden corn",350.0),
  createData("Fresh Tomato",350.0),
  createData("Chunky Chicken",350.0),
  createData("Zesty Chicken",350.0),
  createData("Hot N Spicy Chicken",350.0),
  createData("Extra Cheese",350.0),
];

constToppingListing=(props)=>{
  return(


    <>
      <TableContainercomponent={Paper}>
        <Tablesx={{minWidth: 650}}aria-label="simple table">
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
              
                <TableCellalign="right">
              <divclassName="add-items">
                <IconclassName="add-icon"style={{fontSize: "35px"}}>
                  add_circle
                </Icon>
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row)=>(
            <TableRow
              key={row.name}
              sx={{"&:last-child td, &:last-child th": {border: 0}}}
            >
              <TableCellcomponent="th"scope="row">
                {row.name}
              </TableCell>
              <TableCellalign="right">{row.price}</TableCell>

              <TableCellalign="right">
                <IconclassName="edit-icon">edit_circle</Icon>
              </TableCell>
              <TableCellalign="center">
                <IconclassName="del-icon">delete_circle</Icon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
      );
    }



exportdefaultconnect()(ToppingListing);

