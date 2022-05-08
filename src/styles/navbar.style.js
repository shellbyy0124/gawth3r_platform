import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.nav`
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    flex-direction: column;
`;

export const LeftNavbarContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5px;
    background-color: grey;
`;


export const RightNavbarContainer = styled.div`
    flex: 20%;
    display: flex;
    justify-content: center;
    background-color: darkgray;
`;


export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;


export const NavbarLinkContainer = styled.div`
    display: flex;
`;


export const NavbarLink = styled(Link)`
    color: lightgray;
    text-decoration: none;
    font-family: Arial, Helvetica, sans-serif;
    font-size: x-large;
    margin: 10px;
    &:hover {
        color: black;
        text-decoration: underline;
        font-size: 200%;
    }
`;


export const NavbarExtendedContainer = styled.div`
`;