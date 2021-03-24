export const initialState= {
    deleteKey:[],
    tableData:[],
    open: false,
      btn: true,
    formData: {
        cust_name: "",
        cust_no: "",
        inv_no: "",
        inv_amt: "",
        date: new Date(),
        notes: "",
      },
}
export const Reducer=(state=initialState, action)=>{
    return state;
}