import axios from "axios";
const data={
    type: '',
    playload: [{}]
};

const deleteInvo =(d)=>{
  console.log(d);
  d.map((item)=>
  axios({
    method: "GET",
    url: "http://localhost:8080/Summer_Internship_Backend/Delete_invoice",
    params: { ID: item[0] },
}).catch((e) => {
 console.log(e);
}))
  return null;
};

const EditInvo =(d)=>{ console.log("In edit reducer",d);
  console.log("red Modal not", d.notes.notes);
        console.log("red Modal amo", d.amount.amount);             
        console.log("red Modal row ",d.rows[0][0]);             
                axios({
                    method: "GET",
                    url: "http://localhost:8080/Summer_Internship_Backend/EditInvoice",
                    params: { ID: d.rows[0][0],
                              amount: d.amount.amount,
                            notes: d.notes.notes},
                  }).then((response) => {
                    console.log("resp In edit",response);
                  }).catch((e) => {
                    console.log(e);
                  })
  return null;
}; 
const Reducers = (state = data, action) => {
  switch (action.type) {
    case "edit":
      return (EditInvo(action.payload) );
    case "Delete":
      return ( deleteInvo(action.payload))
default:
    return state  
    }

};
export default Reducers;
