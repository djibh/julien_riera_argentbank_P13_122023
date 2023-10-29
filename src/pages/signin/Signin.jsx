import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";
import Form from "./Form";
import { useNavigate } from "react-router-dom";

export default function Signin() {
  const navigate = useNavigate();

  const postUserData = (event) => {
    event.preventDefault();
    navigate("/accounts");
  };

  return (
    <SigninStyled>
      <Form
        handleSubmit={postUserData}
        icon={<FaUserCircle className="form__icon" />}
        title={"Sign in"}
      />
    </SigninStyled>
  );
}

const SigninStyled = styled.main`
  display: grid;
  place-items: center;
  background-color: ${theme.colors.backgroundDark};
  padding-block: 3em;
  min-height: 75vh;

  .form__icon {
    font-size: 5rem;
  }

  h1 {
    text-align: center;
    font-size: ${theme.fonts.size.S3};
  }
`;
