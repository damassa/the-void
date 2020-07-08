import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import LogoImg from '../../assets/void_crest.png';
import MenuIcon from '../../assets/icons/menu.png';


export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;

    @media only screen and (max-width: 768px) {
        position: fixed;
        flex-flow: column;
        align-items: center;
        justify-content: flex-start;
        height: 100vh;
        width: 100vw;
        top: 65px;
        right: ${props => props.Open ? 0 : "-101vw"};
        background-color: #0a0a0c;
        box-shadow: -2px 2px 2px 0px rgba(0,0,0,0.2);
        transition: 0.4s;
    }
`

export const Links = styled(NavLink)`
    position: relative;
    display: inline-flex;
    box-sizing: border-box;
    justify-content: center;
    color: #b09155;
    font-size: 16pt;
    text-decoration: none;

    
    &:after {
        position: absolute;
        content: " ";
        width: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-bottom: 1px solid #b09155;
        pointer-events: none;
        transition: 0.25s;
    }

    &.active:after {
        width: 100%;
    }

    &:hover:after {
        width: 100%;
    }


    @media screen and (max-width: 768px) {
        margin: 10px 0;
        font-size: 24px;
        &.active {
            font-weight: bold;
        }
        &:after {
            display: none;
        }
    }
`

export const Logo = styled(Link)`
    width: 50px;
    height: 50px;
    background-image: url(${LogoImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    @media only screen and (max-width: 768px) {
        margin-left: 20px;
    }
`

export const NavMobile = styled.div`
    display: none;
    width: 50px;
    height: 50px;
    margin-right: 10px;

    @media screen and (max-width: 768px) {
        display: flex;
        background-image: url(${MenuIcon});
        background-size: 40%;
        background-position: center;
        background-repeat: no-repeat;
    }
`