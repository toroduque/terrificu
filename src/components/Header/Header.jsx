/* eslint-disable */

import React, { Component } from "react";
import Image from "../Image";
import Menu from "./MenuIcon";
import * as styled from "./styled";

class Header extends Component {
    state = {
        isMenuOpen: false
    }

    setIsMenuOpen() {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }

    render() {
        return (
            <styled.HeaderWrapper>
                <Image />
                <Menu
                    onClick={() => this.setIsMenuOpen()}
                    isMenuOpen={this.state.isMenuOpen}
                />
            </styled.HeaderWrapper>
        );
    }
}

export default Header;
