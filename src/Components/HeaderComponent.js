import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            searchText: null
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    onClick() {
        let searchInput = document.getElementById('searchInput');
        let searchText = searchInput.value;
        this.setState({
            searchText: searchText
        })
    }

    render() {
        return (
            //react fragment <React.Fragment> or <>
            <>
                <Navbar dark expand="md" className="nav">
                    <div className="container">
                        <Nav navbar>
                            <NavbarBrand className="mr-auto text-center" href="/home">
                                <h1>Groco</h1>
                                {/* <img src="assets/images/logo.png" height='30' width='41'
                                alt="Groco" /> */}
                            </NavbarBrand>
                            <NavItem className='d-flex p-3'>
                                <div className="btn-group search">
                                    <input type="text" placeholder="Search for products" className="searchinput" id='searchInput' />
                                    <NavLink className="nav-link" to="/products">
                                        <span className="fa fa-search fa-lg" onClick={() => this.onClick()}></span>
                                    </NavLink>
                                </div>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile">
                                    <span className="fa fa-user fa-lg"></span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/cart">
                                    <span className="fa fa-shopping-cart fa-lg">My Basket</span>
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