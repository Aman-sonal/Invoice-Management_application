import React, { useEffect} from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import Table2 from "./table2";

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

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Correspondence({rows, length}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [rowKey, setRowKey]= React.useState([]);
  const [btn , setBtn]= React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
    useEffect(()=>{
        let temp=[];
        temp.push(rows);
        setRowKey({rowKey :temp});
        if(rows.length>0)
            setBtn(false);
        else
        setBtn(true);
    },[rows])
  return (
    <div>
      <Button variant="outlined" disabled={btn} onClick={handleClickOpen}>
        View Correspondence
      </Button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        styles={{width:"1658px"}}
      >
        <div style={{ display: "flex" }}>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            View Correspondence ({rowKey.length})
          </DialogTitle>
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <div style={{ display: "flex", marginLeft:"110px"}}>
              <div style={{fontSize:"15px", paddingRight:'10px'}}>View</div>
              <PopupState variant="popover" popupId="demo-popup-menu" style={{paddingLeft :"15px"}}>
                {(popupState) => (
                  <React.Fragment>
                    <Button
                      variant="contained"
                      color="primary"
                      {...bindTrigger(popupState)}
                    >
                      Template 1
                    </Button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem onClick={popupState.close}>Template 2</MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
          </DialogTitle>
        </div>
        <DialogContent dividers>
            <div style={{margin:"5px"}}>
                <small style={{color:"#C0C6CA", letterSpacing: "0.36px",textAlign: "left",
                font: "normal normal normal 15px Ubuntu"}}><span style={{ margin:"10px"}}>Subject : </span><span style={{color:"#FFFFFF", textAlign:"right"}}>Invoice Details - (Account Number)</span><br /></small></div>
           <div style={{margin:"15px"}}><small> <span style={{ margin:"10px", color:"#C0C6CA"}}> Dear sir/Madam,<br /></span></small></div> 
                   <div style={{margin:"15px"}}><small style={{color:"#C0C6CA",margin:"10px"}}>Greetings!!<br /></small> </div>
                       <div style={{margin:"15px", color:"#C0C6CA"}}>
                       This is to remind you that there are one or more open invoices on your account. Lease provide at your earliest convenience an update on thr payment details or clarify the reason
                        for this delay . If you have an specific issue with the invoice(s). <br />Please let us know so that we can address it to the correct department.
                        <br /> Please find the details of the invoices below:
                        </div> 
                        {<Table2  rowKey={rows} />}
                    <div style={{margin:"15px", color:"#C0C6CA"}}>
                        <br />Total Amount to be Paid :K <br />
                        <small> In case you have already made a payment for the above items, please send us the details to ensure the payment is posted <br />
                        Let us know if we can be of any further assisstance. Looking forward to hearing from you</small>
                    </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{color:'#14AFF1'}}>
            Cancel
          </Button>
          <Button  style={{backgroundColor:'#14AFF1', }}>
            Download
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default Correspondence;
