import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Signin() {
  return (
    <SigninStyled>
      <section className="wrapper">
        <FaUserCircle className="form__icon" />
        <h1>Sign in</h1>
        <form className="signin__form">
          <div className="input-comp">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className="input-comp">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button>Sign in</button>
        </form>
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

  .input-comp {
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacing.md};
    text-align: start;
    font-weight: ${theme.fonts.weight.bold};

    & input {
      padding: ${theme.spacing.xs};
      font-size: ${theme.fonts.size.S1};

      &:focus {
        outline: none;
        border: 2px solid ${theme.colors.primary};
        border-radius: ${theme.borderRadius.subtle};
      }
    }
  }

  .input-remember {
    display: flex;

    & label {
      margin-left: ${theme.spacing.xxs};
    }
  }

  button {
    width: 100%;
    padding: ${theme.spacing.xs};
    font-size: ${theme.fonts.size.S1};
    font-weight: ${theme.fonts.weight.bold};
    margin-top: ${theme.spacing.md};
    border-color: ${theme.colors.primary};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
  }
`;
