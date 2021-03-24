import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { TextareaAutosize } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import "date-fns";
import axios from "axios";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#2A3E4C",
      },
    },
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

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
  
class CustomizedDialogs extends React.Component {
  state={
    formData: {
        cust_name: "",
        cust_no: "",
        inv_no: "",
        inv_amt: "",
        date: "2021-12-22",
        notes: "",
      },
      open: false,
      btn: true,
  }

  handleDate = (d) => {
    console.log(d);
    var date=d.toLocaleString().split(",");; 
    console.log(date[0]);
    var date1= this.state.formData;
    date1= date[0];
    this.setState({date1});
    console.log(this.state);
  };

  handleClickOpen = () => {
    this.setState({open:true});
  };

   handleClose = () => {
    this.setState({open:false});
  };

  handleBtn=(e) =>{
    console.log(e);
    this.setState({btn:e});
  }

  clearBtn=()=>{
      console.log("cleared");
      const{formData}= this.state;
      for(const m in formData)
      {
          console.log(m, formData[m]);
          var mi= m;
          this.setState({mi:''}); 
      }
    }

  handleChange = (e) => {
    if(e.target.value.length > 0) 
    {
      this.handleBtn(false);
    }
    else {this.handleBtn(true);
    }
    console.log(e.target.value);
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
    }
    handleSubmit=()=>{
        const{formData}= this.state;
        console.log(formData);
        axios.post(
        `http://localhost:8080/Summer_Internship_Backend/Add_invoice?name=${this.state.formData.cust_name}&number=${this.state.formData.cust_no}&ID=${this.state.formData.inv_no}&due=${this.state.formData.date}&amount=${this.state.formData.inv_amt}`,
        this.state.formData)
        .then((response) => {
        console.log("resp In Add", response);
      })
      .catch((e) => {
        console.log("error",e);
      });
    }
  render(){
    return (
      <div>
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          onClick={this.handleClickOpen}
        >
          Add
        </Button>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="customized-dialog-title"
          open={this.state.open}
          style={{ backgroundColor: "transparent" }}
        >
          <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
            Add Invoice
          </DialogTitle>
          <DialogContent dividers> 
            <div>
                <ValidatorForm
                    ref="form"
                    style={{ padding: "5px", display: "flex" }}
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
                        <span style={{ fontSize: "15px" }}>Due in Date</span>
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
                        onChange={this.handleChange}
                        />
                    </div>
                    </div>
                    </ValidatorForm>
                </div>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} style={{color:'#14AFF1',marginRight:'27vw' }}>
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              style={{backgroundColor:'#14AFF1'}}
              disabled={this.state.btn}
              onClick={this.handleSubmit}
            >
              Add
            </Button>
            <Button  style={{color:'#14AFF1'}} onClick={this.clearBtn}>
                clear
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default CustomizedDialogs;
