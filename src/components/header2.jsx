import React ,{useState}from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button,Modal,ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import Calendar from 'react-calendar';


class Header2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  
            isAddOpen: false,
            isEditOpen:false,
            isDeleteOpen:false
        };
        // this.toggleAddModal = this.toggleAddModal.bind(this);
        // this.handleAddSubmit = this.handleAddSubmit.bind(this);
    }
    toggleAddModal = () => {
        this.setState({
            isAddOpen: !this.state.isAddOpen
        });
      }
    handleAddSubmit=(e) =>{
          e.preventDefault();
          console.log(e.target.value);
      }
    render() { 
        return (  
            <>
               <Button variant="outline-primary">Primary</Button>
               <Button variant="outline-primary">View Correspondence</Button>
               <Button outline onClick={this.toggleAddModal}><span className="fal fa-plus-square fa-md"></span>Add</Button>
               <Button outline onClick={this.toggleEditOpen}><span className="fal fa-edit fa-md"></span>Edit</Button>
               <Modal isOpen={this.state.isAddOpen} toggle={this.toggleAddModal}
                  size="sm"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered >
                    <ModalHeader toggle={this.toggleAddModal}>Add Invoice</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleAddSubmit}>
                            <FormGroup>
                                <Label htmlFor="username">Customer Name</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.cust_name = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="number" className="m-3">Customer Number</Label>
                                <Input type="number" id="cust_number" name="cust_number"
                                    innerRef={(input) => this.cust_num = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="number">Invoice Number</Label>
                                <Input type="number" id="Inv_number" name="Inv_number"
                                    innerRef={(input) => this.Inv_number = input}  />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="number">Invoice Amount</Label>
                                <Input type="number" id="Inv_amt" name="Inv_amt"
                                    innerRef={(input) => this.Inv_amt = input}  />
                            </FormGroup>
                            {/* <Calendar1 /> */}
                            {/* <textarea> Notes</textarea> */}
                            <Button type="submit" value="submit" color="primary">Add</Button>
                            {/* <Button type="submit" value="submit" color="primary">Clear</Button>
                            <Button type="submit" value="submit" color="primary">Cancel</Button> */}
                        </Form>
                    </ModalBody>
                </Modal>    
            </>
        );
    }
}
export default Header2;