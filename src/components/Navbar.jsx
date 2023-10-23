import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";

export default function Navbar() {
  return (
    <NavbarStyled>
      <nav>
        <img src={logo} alt="logo" />
        <a href="./" className="sign-in__nav-item">
          <FaUserCircle />
          Sign in
        </a>
      </nav>
    </NavbarStyled>
  );
}

const NavbarStyled = styled.header`
  padding: 0em 2em;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 200px;
    }

    a {
      text-decoration: none;
      font-weight: bold;
      color: #2c3e50;

      &:hover {
        text-decoration: underline;
      }
    }

    & .sign-in__nav-item {
      display: flex;
      gap: 8px;
    }
  }
`;
