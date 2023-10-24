import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";

export default function Accounts() {
  return (
    <AccountsStyled>
      <header>
        <h1>
          Welcome back
          <br /> Tony Jarvis{" "}
        </h1>
        <Button content="Edit name" />
      </header>
      <div>
        <section className="account">
          <div>
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available balance</p>
          </div>
          <div>
            <Button content="View transactions" />
          </div>
        </section>
        <section className="account">
          <div>
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available balance</p>
          </div>
          <div>
            <Button content="View transactions" />
          </div>
        </section>
        <section className="account">
          <div>
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available balance</p>
          </div>
          <div>
            <Button content="View transactions" />
          </div>
        </section>
      </div>
    </AccountsStyled>
  );
}

const AccountsStyled = styled.main`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundDark};

  header {
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacing.xl};

    h1 {
      display: block;
      font-size: 2em;
      margin-block-start: 0.67em;
      margin-block-end: 0.67em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
  }

  .account {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-bottom: ${theme.spacing.xl};
    border: 1px solid black;
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.lg};
    text-align: left;

    &-title {
      margin: 0;
      padding: 0;
      font-size: ${theme.fonts.size.S0};
      font-weight: ${theme.fonts.weight.regular};
    }

    &-amount {
      margin: 0;
      font-size: 2.5rem;
      font-weight: ${theme.fonts.weight.bold};

      &-description {
        margin: 0;
      }
    }
  }
`;
