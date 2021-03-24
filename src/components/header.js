import React  from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler,Collapse, NavItem, Jumbotron,
     Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { Button } from '@material-ui/core';
// import Collapse from '@material-ui/core/Collapse';

import {NavLink} from 'react-router-dom';
export default class Header extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isAddOpen: false,
            isEditOpen:false,
            isDeleteOpen:false,
            isNavOpen: false
        };
    }
     toggleNav =() => {
         this.setState({
            isNavOpen : !this.state.isNavOpen
         });
     }
     toggleAddModal=() =>{
        this.setState({
            isAddOpen: !this.state.isAddOpen
        });
      }

      handleLogin = (event) =>{
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
            + " Remember: " + this.remember.checked);
        event.preventDefault();

    }

    render(){
        return(
            <React.Fragment> 
                <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} />
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                                <Button variant="outlined" color="secondary" >Predict</Button>
                            </NavItem>
                            <NavItem>
                                <Button variant="outlined" color="secondary">View Correspondence</Button>
                            </NavItem>
                            <NavItem>
                                <Button variant="outlined" onClick={this.toggleAddModal} color="secondary"><span className="fal fa-plus-square fa-md"></span>Add</Button>
                            </NavItem>
                        </Nav>
                </Collapse>
                </div>
            </Navbar>
                <Modal isOpen={this.state.isAddOpen} toggle={this.toggleAddModal}>
                    <ModalHeader toggle={this.toggleAddModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}