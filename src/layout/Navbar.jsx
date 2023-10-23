import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import logo from "../assets/img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(true);

  return (
    <NavbarStyled>
      <nav>
        <Link>
          <img src={logo} alt="logo" />
        </Link>

        {isConnected && (
          <Link to="/signin" className="sign-in__nav-item">
            <FaUserCircle />
            Sign in
          </Link>
        )}
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
      align-items: center;
      gap: 8px;
    }
  }
`;
