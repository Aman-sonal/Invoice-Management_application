import axios from "axios";
const data={
    type: '',
    playload: [{}]
};
const deletebutton = (state = data, action) => {
  switch (action.type) {
    case "edit":
    return console.log(action.payload)
            //   state.map(item=>{
            //    axios({
            //        method: "GET",
            //        url: "http://localhost:8080/1806233/edit_invoice",
            //        params: { ID: item},
            //      })
            // })
   

    case "Delete":
      return ( action.payload.map((item)=>
        axios({
          method: "GET",
          url: "http://localhost:8080/1806233/Delete_invoice",
          params: { ID: item },
      })
    )  );
default:
    return state  

    }

};
export default deletebutton;
