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
import AddForm from "./addform";

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

class CustomizedDialogs extends React.Component {
  state={
      open: false,
      btn: true,
      data:[],
  }
  // const [open, setOpen] = React.useState(false);
  // const [btn, setBtn] = React.useState(true);

  handleClickOpen = () => {
    this.setState({open:true});
  };

   handleClose = () => {
    this.setState({open:false});
  };
  handleSubmit1=(e)=>{
    console.log("from  BADA papa ",e);
  }
  handleSubmit=(e)=>{
      console.log("from papa ",e);
      this.handleSubmit1(e);
  }

  handleBtn=(e) =>{
    console.log(e);
    this.setState({btn:e});
  }
  // clearBtn =(e) =>{
  //   <AddForm  clearBtn={this.clearBtn}/>;
  // }
  render(){
    return (
      <div>
        <Button
          startIcon={<AddIcon />}
          variant="outlined"
          color="secondary"
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
              <AddForm  handleBtn={this.handleBtn}  handleSubmit={this.handleSubmit}/>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button
              color="primary"
              variant="contained"
              type="submit"
              disabled={this.state.btn}
              onClick={this.handleSubmit1}
            >
              Add
            </Button>
            <Button  color="primary" onClick={this.clearBtn}>
                clear
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default CustomizedDialogs;
