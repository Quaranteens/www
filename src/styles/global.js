import { createGlobalStyle } from "styled-components"
import navTogglerIconPath from '../images/navbar-toggler-icon.svg';

export const GlobalStyle = createGlobalStyle`
  /* BOOTSTRAP OVERRIDES */

  .navbar-toggler {
    border-color: white !important;
  }

  .navbar-toggler-icon {
    background-image: url("${navTogglerIconPath}") !important;
  }

  .navbar-nav {
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .navbar a {
    color: white;
    transition: transform 0.25s;
  }

  .navbar a:hover {
    color: white;
    text-decoration: none;    
  }

  .navbar-light .navbar-nav .nav-link {
    color: white !important;
  }

  .navbar, .navbar-nav .dropdown-menu {
    background: #2f8dff;
    color: white;
    font-size: 1.25rem;
    padding: 5px;
    z-index: 999;
  }

  .dropdown-toggle:after {
    transition: vertical-align 0.3s;
  }

  .dropdown-toggle:hover:after {
    vertical-align: 0;
  }

  .navbar-nav .dropdown-item:focus, .navbar-nav .dropdown-item:hover {
    color: unset;
    text-decoration: unset;
    background-color: unset;
  }

  @media only screen and (min-width: 768px) {
    .navbar {
      border-radius: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    .navbar-nav {
      align-items: flex-start !important;
    }
  }

  /* CUSTOM STYLES */

  html, body {
    height: 100%; 
  }

  body {
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.global.color};
    
    transition: background 0.2s ease-out;
  }
  
  a {
    color: ${props => props.theme.global.link};
  }
  
  a:hover {
    color: ${props => props.theme.global.linkHover};
  }

  .hvr-underline-from-center {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }

  .hvr-underline-from-center:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: white;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before, .hvr-underline-from-center[aria-current="page"]:before {
    left: 0;
    right: 0;
  }
`;