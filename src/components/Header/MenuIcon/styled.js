/* eslint-disable */
import styled from 'styled-components';

export const MenuIconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 1.75rem;
    cursor: pointer;
    z-index: 2;
`

export const Top = styled.div`
    width: ${props => props.isMenuOpen ? '2.17rem' : '2rem'};
    height: 0.2rem;
    background-color: ${props => props.isMenuOpen ? '#635AFC' : '#979797'};
    transform: ${props => props.isMenuOpen ? 'rotate(45deg)' : 'none'};
    transform-origin: top left;
    transition: 0.2s;
`
export const Mid = styled.div`
    width: ${props => props.isMenuOpen ? '0rem' : '2rem'};
    height: 0.2rem;
    background-color: ${props => props.isMenuOpen ? '#635AFC' : '#979797'};
    transition: 0.2s;
`
export const Bot = styled.div`
    width: ${props => props.isMenuOpen ? '2.17rem' : '2rem'};
    height: 0.2rem;
    background-color: ${props => props.isMenuOpen ? '#635AFC' : '#979797'};
    transform: ${props => props.isMenuOpen ? 'rotate(-45deg)' : 'none'};
    transform-origin: bottom left;
    transition: 0.2s;
`

export const MenuWrapper = styled.div`
    display: inline-block;
`

export const LinksWrapper = styled.div`
    position: absolute;
    background-color: white;
    padding: 1.6rem;
    top: 0;
    left:0;
    width: 100%;
    box-shadow: 0 1.2rem 2.4rem rgba(0,0,0,0.12);
    opacity: ${props => props.isMenuOpen ? 1 : 0};
    pointer-events: ${props => props.isMenuOpen ? "all" : "none"};
    transition: 0.4s;
    transform: scaleY(${props => props.isMenuOpen ? 1 : 0.2});
    transform-origin: top;

    .menu-title {
        color: ${props => props.isMenuOpen ? "#505050" : "white"};
        font-family: 'Montserrat';
        font-size: 1.2rem;
        font-weight: bold;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        margin: 0 0 3.2rem 0;
        transition: 0.2s;
    }
`

export const MenuLink = styled.p`
    font-family: 'Montserrat';
    font-size: 1.8rem;
    font-weight: 300;
    color: #505050;
    margin: 0 0 1.6rem 0;
`
