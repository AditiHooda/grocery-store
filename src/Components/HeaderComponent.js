import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            //react fragment <React.Fragment> or <>
            <>
                <Navbar dark expand="md" className="nav">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span>Home</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/category">
                                        <span>Category</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/products">
                                        <span>Products</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/deal">
                                        <span>Deal</span>
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span>Conatct Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                        <NavbarBrand className="mr-auto text-center" href="/home">
                            <img src="assets/images/logo.png" height='30' width='41'
                                alt="Groco" />
                        </NavbarBrand>
                        <Nav navbar>

                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-search fa-lg"></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-shopping-cart fa-lg"></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className="fa fa-user fa-lg"></span>
                                </NavLink>
                            </NavItem>
                        </Nav>

                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;