import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import { grey } from '@material-ui/core/colors';
// import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
// import Fab from '@material-ui/core/Fab';
import { Paper } from '@material-ui/core';
import { TextareaAutosize, ThemeProviderm, TextField, Grid } from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {Edit} from '../reducers/index';


const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    // padding: theme.spacing(2),
  },
  MuiDialogContent:{
    dividers:{
    padding:'0.5em',
    }
  }
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
    
  },
}))(MuiDialogActions);

export default function EditModal({rows}) {
  
  const [open, setOpen] = React.useState(false);
  const [amount, setAmount] = React.useState("");
  const [notes, setnote] = React.useState("");
  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAmount = (e) => {
      if(e.target.name=='notes')
      {
        setnote({ notes: e.target.value});
        // console.log(notes);
      }
      else{
        setAmount({ amount: e.target.value});
        // console.log(amount);
      } 
  };
  const handleSubmit= ()=>{
    console.log("In Edit Submit",notes, amount);
    dispatch(Edit({rows, notes, amount}));
  }
  console.log("In Edit", rows);
  return (
    <div>
      <Button variant="outlined"  startIcon= {<EditIcon />} onClick={handleClickOpen}>
          Edit
      </Button>
      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} style={{backgroundColor: 'transparent',}}>
        <Paper style={{width:'28vw'}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Edit Invoice
        </DialogTitle>
        <DialogContent dividers style={{ padding:'0.5em'}}>
            {/* {children} */}
            <div>
              <form>
                <Grid container>
                <Grid item xs={4} style={{margin:'1em'}}>  
                  <Typography>
                     <p>Invoice Amount </p> 
                     <p>
                         Notes:
                     </p>
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                    <p><TextField  name="amount" fullWidth onChange={handleAmount}/></p>
                    <p><TextField  name="notes" fullWidth multiline rows="4" onChange={handleAmount}/></p>
                    {/* <TextField variant="outlined" multiline rows="4" name="search"  /> */}
                </Grid>
                </Grid>
              </form>
            </div>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose} style={{color:'#14AFF1',marginRight:'10vw' }}>
            Cancel
          </Button>
          <Button variant="outlined"  >
            Reset
          </Button>
          <Button onClick={handleSubmit} style={{backgroundColor:'#14AFF1', }} >
          Save
          </Button>
        </DialogActions>
        </Paper>
      </Dialog>
    </div>
  );
}