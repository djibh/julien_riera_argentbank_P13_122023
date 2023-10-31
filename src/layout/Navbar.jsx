import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { MdAccountCircle } from "react-icons/md";
import logo from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../utils/authSlice";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const signOut = () => {
    dispatch(logout());
    navigate("/");
    window.location.reload();
  };

  return (
    <NavbarStyled>
      <nav>
        <Link>
          <img src={logo} alt="logo" />
        </Link>

        {token ? (
          <div className="sign-out__nav-item">
            <MdAccountCircle />
            <Link onClick={signOut} className="sign-in__nav-item">
              <PiSignOutBold />
              Sign out
            </Link>
          </div>
        ) : (
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
  padding: 0em ${theme.spacing.xl};

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      max-width: 200px;
    }

    a {
      display: grid;
      text-decoration: none;
      font-weight: ${theme.fonts.weight.bold};
      color: ${theme.colors.primaryFontColor};

      &:hover {
        text-decoration: underline;
      }
    }

    & .sign-in__nav-item,
    .sign-out__nav-item {
      display: flex;
      align-items: center;
      gap: ${theme.spacing.xs};
    }
  }
`;
