import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { FaFacebookSquare, FaTwitterSquare, FaEnvelopeSquare, FaDiscord, FaTwitch } from "react-icons/fa";
import Logo from "./logo"
import ThemeToggler from "./ThemeToggler";

const HeaderContainer = styled.div`
  padding: 1.45rem 1.0875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

const HomeLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #2f8dff;

  &:hover {
    color: #2f8dff;
    text-decoration: none;
  }

  & > * {
    padding: 10px;
  }

  & > h1 {
    font-family: 'Libre Baskerville', serif;
  }

  & > h1.hvr-underline-from-center:before {
    background: #2f8dff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SocialIcon = styled(OutboundLink)`
  & > svg {
    font-size: 2rem;
    margin: 0 5px;
    color: #2f8dff;
  }
`;

const Header = () => (
  <header>
    <HeaderContainer>
      <HomeLink to="/">
        <Logo/>
        <h1 className="hvr-underline-from-center">Quaranteen University</h1>
      </HomeLink>
        
      <SocialLinks>
        <SocialIcon href="https://discord.gg/mhH65sR" target="_blank">
          <FaDiscord/>
        </SocialIcon>
        <SocialIcon href="https://www.facebook.com/quaranteenu" target="_blank">
          <FaFacebookSquare/>
        </SocialIcon>
        <SocialIcon href="https://twitter.com/QuaranteenU" target="_blank">
          <FaTwitterSquare/>
        </SocialIcon>
        <SocialIcon href="https://www.twitch.tv/QuaranteenU" target="_blank">
          <FaTwitch/>
        </SocialIcon>
        <SocialIcon href="mailto:admissions@quaranteen.university?subject=Virtual Commencement 2020" target="_blank">
          <FaEnvelopeSquare/>
        </SocialIcon>
        <ThemeToggler />
      </SocialLinks>
    </HeaderContainer>

    <Navbar className="container" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="mr-auto">
          <Link className="hvr-underline-from-center" to="/about">
            About Us
          </Link>
          <Link className="hvr-underline-from-center" to="/#faqs">
            FAQs
          </Link>
          <Link className="hvr-underline-from-center" to="/courses">
            Courses
          </Link>
          <Link className="hvr-underline-from-center" to="/livestream">
            Livestream
          </Link>

          <NavDropdown title="Events" alignRight>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/register">
                QU Commencement
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item as="button">
              <Link className="hvr-underline-from-center" to="/academy">
                QUA Graduation
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default Header;