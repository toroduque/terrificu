import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Logo from "components/Logo";
import Menu from "./Menu";
import * as styled from "./styled";

class Header extends Component {
    state = {
        isMenuOpen: false
    }

    setIsMenuOpen = () => {
        this.setState( prevState => ({ isMenuOpen: !prevState.isMenuOpen }))
    }

    render() {
        const { isMenuOpen } = this.state

        return (
            <styled.HeaderWrapper>
                <Link to="/">
                    <Logo/>
                </Link>
                <Menu
                    onClick={this.setIsMenuOpen}
                    isMenuOpen={isMenuOpen}
                />
            </styled.HeaderWrapper>
        );
    }
}

export default Header;
