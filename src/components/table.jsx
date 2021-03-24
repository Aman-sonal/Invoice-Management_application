import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import "../utils/table.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CircularProgress, Typography, Check, TextField, Grid } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroll-component";
// import { ReactComponent as CheckBox } from "../assets/check_box_outline_blank-black-18dp.svg";
// import { ReactComponent as TickBox } from "../assets/check_box-black-18dp.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
// import Search from './Search';

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
    fontSize: "0.1em", 
  },
  Paper: {
    width: "100vw",
    // margin: "1em",
    height: "80vh",
    background: "#273D49CC",
  },
  TableHead: {
    borderBottom: "0.01px solid black",
    textAlign: "right",
    height:"1vh",
    font: "normal normal normal 18px/21px Ubuntu",
    color: "#97A1A9",
    textTransform: "capitalize",
    backgroundColor: "#273D49CC",
  },

  TableRows: {
    "&.tr $nth-child(even)": "background-color: #283A46",
    "&.tr $nth-child(odd)": 'backgroundColor: "#273D49CC",',
  },

  TableRow: {
    border: "none",
    textAlign: "center",
    font: "normal normal normal 20px/24px Ubuntu",
    color: "#FFFFFF",
    height:"1vh",
  },

  root: {
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  icon: {
    borderRadius:3,
    width: 16,
    height: 16,
    boxShadow:
      "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
    backgroundColor: "#f5f8fa",
    backgroundImage:
      "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
    "$root.Mui-focusVisible &": {
      outline: "2px auto rgba(19,124,189,.6)",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#ebf1f5",
    },
  },
});
const CheckBox = (props) => {
  const classes = useStyles();
  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
};

let debounceTimer = null;
function TableData({handleD}) {
  const classes = useStyles();
  
  const [delKey, setDelKey]= useState({
      deleteKey:[]
  });   

  let [pageCount, setPage] = useState(0);
  let [data, setData] = useState([]);
  let [isNext, isNextFunc] = useState(false);

  // const [checked, setChecked] = useState(false);
  // const [open, setOpen] = useState(true);

  useEffect( () => {fetchData(); } , []);
  const fetchData = async () =>  {
    await axios({
      method: "GET",
      url: "http://localhost:8080/Summer_Internship_Backend/Get_invoice",
      params: { pageCount: pageCount },
    })
      .then((response) => {
        console.log("In Fetch : "+ pageCount);
        setData([...data, ...response.data]);
        console.log(data.length);    
        isNextFunc(true);
        console.log(data);  
      })
      .catch((error) => {
        console.log(error);
      });
  };
    const deleteAll=()=>{
      const tableData= data;
      tableData.map(key =>{
        console.log(key);
      })
    }
    const handleDelete=(value)=>{
      for(let i=0;i<delKey.deleteKey.length;i+=1){
        if(delKey.deleteKey[i]===value){
          const r=delKey.deleteKey
          r.splice(i,1)
          setDelKey({deleteKey:r})
          handleD(delKey.deleteKey);
          return; 
        }
      }
      const d=delKey.deleteKey
      d.push(value)
      setDelKey({deleteKey:d});
      handleD(delKey.deleteKey);
    }

  function fetchMoreData() {
    setPage(pageCount + 1);
    setTimeout(() => {
      fetchData();
    }, 2000);
    // useEffect(pageCount);
  }
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setResults] = useState([]);

  const getSearchResults = (newSearchVal) => {
    axios
      .get("http://localhost:8080/1806228/SearchInvoice", {
        params: {
          ID: newSearchVal,
          limit: 10
        }
      })
      .then((response) => {
        // console.log("Response Data", response.data);
        setData([]);
        setData(response.data);
        console.log("In Search");
        console.log(response.data);
        console.log(data);
        isNextFunc(false);
        //useEffect();
      })
      .then((error) => {
        console.log("Error", error);
      });
  };



  // const handleSearchValueChange = () => {
  //         const newSearchVal = data;
  //           setSearchValue(newSearchVal);
  //           if (newSearchVal.trim().length >= 3) {
  //           clearTimeout(debounceTimer);
  //           debounceTimer = setTimeout(() => {
  //               getSearchResults(newSearchVal);
  //           }, 500);
  //           }
  //           if (newSearchVal === "") setResults([]);
  // };
  // fetchData();
  return (
    <Typography>
    
      <TableContainer id="Target" className={classes.Paper}>
        <InfiniteScroll
          dataLength={data.length}
          next={fetchMoreData}
          scrollableTarget="Target"
          hasMore={isNext}
          loader={
            <div
              style={{
                height: "80%",
                paddingLeft: "45%",
                overflow: "hidden",
              }}
            >
              <CircularProgress />
            </div>
          }
        >
          <Table
            classes={{ root: classes.table }}
            stickyHeader={true}
            aria-label="sticky table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                <CheckBox  onChange={deleteAll}/>
                </TableCell>
                <TableCell classes={{ root: classes.TableHead }}>
                  <Typography>Customer Name</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography>Customer&nbsp;#</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography> Sales Order ID </Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography>Invoice Amount</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography> Due date&nbsp;</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography>Predicted Payment Date&nbsp;</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography>Predicted Aging Bucket&nbsp;</Typography>
                </TableCell>
                <TableCell align="right" classes={{ root: classes.TableHead }}>
                  <Typography>Notes&nbsp;</Typography>
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody className="body">
                {data.map((row, index) => (
                  <TableRow
                    className={classes.TableRow} >
                            
                    <TableCell align="right" className={classes.TableRow}>
                      <Checkbox  value={row.invoice_id}  onChange={(e)=> handleDelete(e.target.value)}  />
                      {/* <TickBox onClick={onClickHandler} />*/}
                    </TableCell>

                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.TableRow}
                    >
                      <Typography> {row.name_customer} </Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography>{row.cust_number}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography> {row.invoice_id}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography>{row.total_open_amount}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography>{row.due_in_date}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography>--{/* {row.due_in_date} */}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography> --{/* {row.due_in_date} */}</Typography>
                    </TableCell>
                    <TableCell align="right" className={classes.TableRow}>
                      <Typography></Typography>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
    </Typography>
  );
}
export default TableData;