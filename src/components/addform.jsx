import React from "react";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextareaAutosize } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import axios from "axios";
// import { Add } from "../reducers/index";
// import { connect } from "react-redux";

function MaterialUIPickers({ date, handleDate }) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18")
  );

  const handleDateChange = (d) => {
    setSelectedDate(d);
    date = selectedDate;
    handleDate(date);
  };
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          name="selectedDate"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

class AddForm extends React.Component {
  state = {
    formData: {
      cust_name: "",
      cust_no: "",
      inv_no: "",
      inv_amt: "",
      date: new Date(),
      notes: "",
      snackbaropen: false,
      snackbarmsg: "",
    },
  };

  handleDate = (d) => {
    console.log(d);
    var date = d.toLocaleString().split(",");
    console.log(date[0]);
    var date1 = this.state.formData;
    date1 = date[0];
    this.setState({ date1 });
    console.log(this.state);
  };
  handleChange = (e) => {
    if (e.target.value.length > 0) {
      this.props.handleBtn(false);
    } else {
      this.props.handleBtn(true);
    }
    console.log(e.target.value);
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  };
  handleSubmit = () => {
    const { formData } = this.state;
    this.props.handleSubmit(formData);
    // axios({
    //   method: "POST",
    //   url: `http://localhost:8080/Summer_Internship_Backend/Add_invoice?name=${this.state.formData.cust_name}`,
    //   params: {
    //     // name: this.state.formData.cust_name,
    //     number: this.state.formData.cust_no,
    //     ID: this.state.formData.inv_no,
    //     due: this.state.formData.date,
    //     amount:this.state.formData.int_amt,
    //   },
    // })
      axios.post(
        `http://localhost:8080/Summer_Internship_Backend/Add_invoice?name=${this.state.formData.cust_name}`, 
        this.state
      ).then((response) => {
        console.log("resp In Add", response);
      })
      .catch((e) => {
        console.log("error",e);
      });
  };

  render() {
    const { formData } = this.state;
    const { handleSubmit } = this.props;
    return (
      <div>
        <ValidatorForm
          ref="form"
          style={{ padding: "5px", display: "flex" }}
          onSubmit={() => handleSubmit(formData)}
        >
          <div style={{ padding: "5px", display: "block" }}>
            <div style={{ display: "flex" }}>
              <span style={{ fontSize: "15px", padding: "5px" }}>
                Customer Name
              </span>
              <TextValidator
                onChange={this.handleChange}
                size="small"
                variant="outlined"
                name="cust_name"
                validators={["required", "isString"]}
                errorMessages={["this field is required", "Please Enter Name"]}
              />
            </div>

            <div style={{ display: "flex", padding: "5px" }}>
              <span style={{ fontSize: "15px" }}> Customer Number</span>
              <TextValidator
                onChange={this.handleChange}
                variant="outlined"
                size="small"
                name="cust_no"
                validators={["required", "isNumber"]}
                errorMessages={[
                  "this field is required",
                  "Please Enter Customer Number",
                ]}
              />
            </div>

            <div style={{ display: "flex", padding: "5px" }}>
              <span style={{ fintSize: "15px" }}> Invoice Number</span>
              <TextValidator
                variant="outlined"
                size="small"
                onChange={this.handleChange}
                name="inv_no"
                validators={["required", "isNumber"]}
                errorMessages={[
                  "this field is required",
                  "Please Valid Invoice  Number",
                ]}
              />
            </div>
            <div style={{ display: "flex", padding: "5px" }}>
              <span style={{ fontSize: "15px" }}>Invoice Amount</span>
              <TextValidator
                variant="outlined"
                size="small"
                onChange={this.handleChange}
                name="inv_amt"
                validators={["required", "isNumber", "isFloat"]}
                errorMessages={[
                  "this field is required",
                  "Please Amount  Number",
                ]}
              />
            </div>
          </div>
          <div style={{ paddingLeft: "20px", display: "block" }}>
            <div style={{ display: "flex", padding: "5px" }}>
              <span style={{ fontSize: "15px" }}>Date Picker</span>
              <MaterialUIPickers
                name="date"
                date={this.state.date}
                handleDate={this.handleDate}
              />
            </div>

            <div style={{ paddingLeft: "20px", display: "block" }}>
              <span style={{ fontSize: "15px" }}>Notes: </span>
              <TextareaAutosize
                id="outlined-basic"
                label="Notes"
                variant="outlined"
                rowsMin={10}
                name="notes"
                onChange={this.handleSubmit}
              />
            </div>
          </div>
        </ValidatorForm>
      </div>
    );
  }
}
export default AddForm;
