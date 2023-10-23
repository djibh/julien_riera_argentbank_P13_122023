import { FaUserCircle } from "react-icons/fa";
import styled from "styled-components";

export default function Signin() {
  return (
    <SigninStyled>
      <section className="wrapper">
        <FaUserCircle className="form__icon" />
        <h1>Sign in</h1>
        <form className="signin__form">
          <div className="input-comp">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Entrez votre email" />
          </div>
          <div className="input-comp">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Mot de passe" />
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
  background-color: #12002b;
  padding-block: 3em;
  color: #2c3e50;

  .wrapper {
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;

    & .form__icon {
      font-size: 2rem;
    }
  }

  h1 {
    text-align: center;
    font-size: 1.5rem;
  }

  .input-comp {
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    text-align: start;
    font-weight: bold;
  }

  button {
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: #00bc77;
    background-color: #00bc77;
    color: #fff;
  }
`;
