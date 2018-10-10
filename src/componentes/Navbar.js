import React, { Component } from 'react';
import {Navbar, NavItem} from 'react-materialize';

class NavBar extends Component {

    render() {

        return (
            <div className="nav-wrapper">
                <Navbar brand='BookBuster' left className="black">
                <NavItem href="/" right >Home</NavItem>
                </Navbar>
            </div>  
            
        );
    }
}

export default NavBar;


