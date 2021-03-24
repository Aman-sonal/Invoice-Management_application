import React from "react";
import { Typography, AppBar, Toolbar,Button, Paper } from "@material-ui/core";
import CustomizedDialogs from "./practice";
import EditModal from "./editmodal";
import EditForm from "./editForm";
import DeleteModal from "./deleteModal";
import Correspondence from "./correspondence";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

class Header3 extends React.Component {
    state={
      rows: [],
    };
    static getDerivedStateFromProps(props, state){
      console.log(props.data, state);
      return{
        rows:props.data
      }
    }
  render(){
    return (
      <Paper>
            <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1, display:"flex"}}>
              <Button variant="outlined">
                Predict
              </Button>
              <>
                <Correspondence rows={this.state.rows} length={this.state.rows.length}  />
              </>
            </Typography>
           <div style={{display:"flex"}}>
            <>
                <CustomizedDialogs>
                </CustomizedDialogs>
              </>
              <>
                <EditModal rows={this.state.rows} >
                </EditModal>
              </>
              <>
                <DeleteModal rows={this.state.rows} />
              </>
              <>
                <TextField  variant="outlined" name="search" placeholder="Search by Bill Number" style={{height: '1vh'}}><SearchIcon /></TextField>
              </>
           </div>
          </Toolbar>
        </Paper>
    );
  }
}
export default Header3;
