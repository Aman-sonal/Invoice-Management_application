import React, { Component } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {  Grid } from "@material-ui/core";
import companyLogo from "../assets/companyLogo.svg";
import HRCLogo from "../assets/logo.svg";


const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
      flexGrow: 1,
    },
    ProductName: {
      textAlign: "left",
      font: "normal normal bold 3vw/5vh Futura PT",
      letterSpacing: "0px",
      color: "#FFFFFF",
    },
    companylogo: {
      top: "5vh",
      width: "3vw",
      height: "5vh",
      opacity: "1",
    },
    hrcLogo: {
      justifyContent: "center",
      alignSelf: "center",
      top: "5vh",
      width: "11vw",
      height: "5vh",
      opacity: "1",
      padding: "10px",
    },
  })
);

function Navbar() {
  const classes = useStyles();

  return (
    <Grid
      container
      style={{ height: "10vh", margin: "0.5vh", padding: "1vw" }}
      alignItems="center"
      direction="row"
    >
      <Grid item sm={5}>
        <span style={{ width: "11vw" }}>
          <img
            src={companyLogo}
            alt="GroupLogo"
            className={classes.companylogo}
          />
          <strong className={classes.ProductName}>ABC Products</strong>
        </span>
      </Grid>
      <Grid item sm={7}>
        <img src={HRCLogo} alt="CompanyLogo" className={classes.hrcLogo} />
      </Grid>
      {/* <Header3 /> */}
    </Grid>
  );
}
export default Navbar;