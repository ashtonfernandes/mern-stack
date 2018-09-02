import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        // need super to call the parent's class constructor
        super(props);
        this.state = {
            isOpen: false
        };
    }

    // es6 arrow function toggle to change the state of the navbar from open to close and vice versa
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" className="mb-5">
                    {/* To go back home */}
                    <NavbarBrand href="/">MERN Stack</NavbarBrand>
                    {/* hamburger menu */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        {/* Align link to right */}
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/ashtonfernandes/mern-stack">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default AppNavbar;