import React, { useState } from 'react';
import NavbarComp from './Navbar';
import InvoiceTable from './table';
import Header3 from './usetable';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

// const mapStateToProps= state =>{
//     return {
//         deleteKey:state.deleteKey
//     }
// }

const Main = ()=> {
    const [data, setData]= useState({
        data:[]
      });
      const handleD=(e) =>{
        const temp =[];
        temp.push(e);
        setData({data:temp});
        console.log(data.data);
      } 
        return ( 
            <>
                <NavbarComp />
                <div style={{color:"white", margin:"10px", fontSize:"25px"}}>Invoice List</div>
                <Header3  data={data.data} />
                <InvoiceTable handleD={handleD}  />
            </>
         );
}
 
export default Main;