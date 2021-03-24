import React  from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "../utils/table.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {Typography } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";


const useStyles = makeStyles({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(97, 112, 123, 1)",
      outline: "1px solid slategrey",
    },
  },
  table: {
    // width: "85vw",
    // // margin: '0px 30px',
    justifyContent: 'center',
    fontSize: "0.0em", 
  },
  Paper: {
    width: "45vw",
    // margin: "1em",
    height: "20vh",
    background: "#273D49CC",
  },
  TableHead: {
    borderBottom: "0.01px solid black",
    textAlign: "left",
    height:"1vh",
    font: "normal normal normal 1px Ubuntu",
    color: "#97A1A9",
    backgroundColor: "#273D49CC",
  },

  TableRows: {
    "&.tr $nth-child(even)": "background-color: #283A46",
    "&.tr $nth-child(odd)": 'backgroundColor: "#273D49CC",',
  },

  TableRow: {
    border: "none",
    textAlign: "left",
    font: "normal normal normal 10px Ubuntu",
    color: "#FFFFFF",
    height:"1vh",
  },
});

function Table2({rowKey}) {
  const classes= useStyles();
  const {data, setData}= useState([]);
  console.log('table2 ->',rowKey);
  useEffect( () => {fetchData(); } , []);
  const fetchData =  () =>  {
     axios({
      method: "GET",
      url: `http://localhost:8080/Summer_Internship_Backend/corresponding_invoice/ID=${rowKey.invoice_id}`,
    })
      .then((response) => {
        setData([...data, ...response.data]);
        console.log('sdcfsdygvcd',data);  
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <TableContainer id="Target" className={classes.Paper}>
      <Table
        classes={{ root: classes.table }}
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            <TableCell classes={{ root: classes.TableHead }}>
              <Typography>Invoice Number</Typography>
            </TableCell>
            <TableCell align="right" classes={{ root: classes.TableHead }}>
              <Typography>PO Number</Typography>
            </TableCell>
            <TableCell align="right" classes={{ root: classes.TableHead }}>
              <Typography> Invoice Date</Typography>
            </TableCell>
            <TableCell align="right" classes={{ root: classes.TableHead }}>
              <Typography> Due Date</Typography>
            </TableCell>
            <TableCell align="right" classes={{ root: classes.TableHead }}>
              <Typography> Currency</Typography>
            </TableCell>
            <TableCell align="right" classes={{ root: classes.TableHead }}>
              <Typography>Open Amount&nbsp;($)</Typography>
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody className="body">
          {data.map((row, index) => (
            <TableRow
              className={classes.TableRow}>
              <TableCell
                component="th"
                scope="row"
                className={classes.TableRow}
              >
                <Typography> {row.inv_no} </Typography>
              </TableCell>
              <TableCell align="right" className={classes.TableRow}>
                <Typography>{row.po_no}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.TableRow}>
                <Typography> {row.inv_date}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.TableRow}>
                <Typography>{row.curr}</Typography>
              </TableCell>
              <TableCell align="right" className={classes.TableRow}>
                <Typography>{row.open_amt}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default Table2;