import React from 'react';
import * as styled from './styled'

const Menu = ({ onClick, isMenuOpen }) => (
    <styled.MenuWrapper>
        <styled.LinksWrapper isMenuOpen={isMenuOpen}>
            <h4 className="menu-title">Menu</h4>

            <styled.MenuLink>About</styled.MenuLink>
            <styled.MenuLink>Source Code</styled.MenuLink>
            <styled.MenuLink>Contact</styled.MenuLink>
        </styled.LinksWrapper>

        <styled.CloseIconWrapper onClick={onClick} isMenuOpen={isMenuOpen}>
            <styled.Top isMenuOpen={isMenuOpen}/>
            <styled.Mid isMenuOpen={isMenuOpen}/>
            <styled.Bot isMenuOpen={isMenuOpen}/>
        </styled.CloseIconWrapper>
    </styled.MenuWrapper>
)

export default Menu
