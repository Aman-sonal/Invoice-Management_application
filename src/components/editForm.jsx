// import React from 'react';
// import Button from '@material-ui/core/Button';

// import 'date-fns';

// class EditForm extends React.Component {
//         state = {
//         formData : { 
//                    inv_amt:'',
//                    notes:''
//                  },
//         submitted: false,
//     }

//     handleChange = (event) => {
//       console.log(event.target.value);
//         const { formData } = this.state;
//         formData[event.target.name] = event.target.value;
//         this.setState({ formData });
//     }

//     handleSubmit = (e) => {
//         // this.setState({ submitted: true }, () => {
//         //     setTimeout(() => this.setState({ submitted: false }), 5000);
//         // });
//     }

//     render() {
//         const { formData,  submitted } = this.state;
//         return (
//             <div>
//               <ValidatorForm
//                 ref="form"
//                 onSubmit={this.handleSubmit} style={{padding:'5px', display: "flex"}}
//             >
//                <div  style={{display: "block"}}>
//                 <div style={{display:"flex"}}>
//                 <span style={{fontSize: "15px", paddingRight: "10px"}}>Invoice Amount</span><TextValidator
//                       variant="outlined"
//                       size="small"
//                       onChange={this.handleChange}
//                       name="inv_amt"
//                       value={formData.inv_amt}
//                       validators={['required', 'isNumber']}
//                       errorMessages={['this field is required', 'Please Enter valid Amount']}
//                   />
//                 </div>
//                 <div style={{display:"flex", paddingTop:"20px"}}>
//                   <span style={{fontSize: "15px", paddingRight: "70px"}}>Notes:</span>
//                   <TextareaAutosize id="outlined-basic" label="Notes" variant="outlined" rowsMin={10} style={{padding:'20px', display: "block"}} onChange={this.handleChange} />
//                 </div>
//                </div>
//             </ValidatorForm>
//             </div>
//         );
//     }
// }
// export default  EditForm;