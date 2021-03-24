import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      borderColor: '#282c34',
      borderRadius: 3,
      border: 0,
      color: 'white',
      padding: '0 30px',
    },
 
  });
  const useStyl = makeStyles({
    root: {
        backgroundColor: '#1B1F38',
        padding: '0 30px',
        color: 'white',
        padding: '0 30px',
    },
  });
  const HomePageHeader = () => {
    return (
      <header className="header">
        <h2>Invoice List</h2>
      </header>
    );
  };
export default function Popup() {
    const classes = useStyles();
    const Dialogclass = useStyl();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
//   <span style= {{color: 'white'}}>
  return (
    <>
      <HomePageHeader />
      <div id="add-modal">
      <Button   startIcon={<AddIcon />} onClick={handleClickOpen} classes={{root: classes.root}}>
        Add 
      </Button>
      <Dialog  style={{ backgroundColor: 'transparent'}} open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className={Dialogclass.root}>         
        <DialogTitle id="form-dialog-title"> Add Invoice
        <Button startIcon={<CloseIcon />} onClick={handleClose} />
        <hr /></DialogTitle>
        <DialogContent>
        <form action="" method=""  noValidate autoComplete="off">
            <Grid container >
                <Grid>
                    <div>
                    <label className="modal">Customer Name</label>
                    <input required label="Customer Name" type="text" name="CustName"  ></input>
                    </div>
                    

                <TextField  className="modal" required variant="outlined" label="Customer Name" type="text" name="CustName" Value="name" data-validators="isRequired"/>
                <TextField  className="modal" required variant="outlined" label="Customer No." type="text" name="CustNo" Value="CustNo" data-validators="isRequired"/>
                <TextField  className="modal" required variant="outlined" label="Invoice No." type="number" name="InvoiceNo" Value="InvoiceNo" data-validators="isRequired" />
                <TextField  className="modal" required variant="outlined" label="Invoice Amount" type="number" name="InvoiceAmount" Value="InvoiceAmount" data-validators="isRequired" />
                </Grid> 
                <Grid>

                </Grid>

            </Grid>
        </form>
         <hr/>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleClose} color="primary" align="left" >
            Cancel
          </Button>
          <Button variant="outlined" onClick={handleClose} color="primary" align="center" >
            Add
          </Button>
          <Button variant="outlined" onClick={handleClose} color="primary" align="center" >
           Clear
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    </>
  );
}

