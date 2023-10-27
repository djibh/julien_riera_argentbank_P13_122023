import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";
import Form from "./Form";

export default function Signin() {
  return (
    <SigninStyled>
      <section className="wrapper">
        <FaUserCircle className="form__icon" />
        <h1>Sign in</h1>
        <Form />
      </section>
    </SigninStyled>
  );
}

const SigninStyled = styled.main`
  display: grid;
  place-items: center;
  background-color: ${theme.colors.backgroundDark};
  padding-block: 3em;

  .wrapper {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    padding: ${theme.spacing.xl};
    text-align: center;

    & .form__icon {
      font-size: 5rem;
    }
  }

  h1 {
    text-align: center;
    font-size: ${theme.fonts.size.S3};
  }
`;
