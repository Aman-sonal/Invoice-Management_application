import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import {useDispatch} from 'react-redux';
import {Delete} from '../reducers/index';
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
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function DeleteModal({rows}) {
  const dispatch= useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
       <Button startIcon={<DeleteIcon />} variant="outlined"   onClick={handleClickOpen}>
        Delete
      </Button>
      <Dialog  onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} style={{backgroundColor: 'transparent'}}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
         Delete Record(s)?
        </DialogTitle>
        <DialogContent dividers>
            <div>
                You'll lose the records after this action. We can't recover <br />them once you delete.<br/>
                <br/>Are you Sure you want to <span id="del">permanently delete</span> them
            </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} style={{color:'#14AFF1',marginRight:'29vw' }}>
            Cancel
          </Button>
          <Button autoFocus variant="contained"  style={{backgroundColor:'#14AFF1', }} onClick={()=>dispatch(Delete(rows))}>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
