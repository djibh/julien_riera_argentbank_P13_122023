import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";

export default function Accounts() {
  return (
    <AccountsStyled>
      <header>
        <h1>USERNAME</h1>
        <Button content="Edit name" />
      </header>
      <div>
        <section className="account">
          <div>
            <h3>Argent Bank Checking (x8349)</h3>
            <p>$2,082.79</p>
            <p>Available balance</p>
          </div>
          <div>
            <Button content="View transactions" />
          </div>
        </section>
        <section className="account">
          <div>
            <h3>Argent Bank Checking (x8349)</h3>
            <p>$2,082.79</p>
            <p>Available balance</p>
          </div>
          <div>
            <Button content="View transactions" />
          </div>
        </section>
        <section className="account">
          <div>
            <h3>Argent Bank Checking (x8349)</h3>
            <p>$2,082.79</p>
            <p>Available balance</p>
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
    margin-bottom: ${theme.spacing.xl};
  }

  .account {
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0 auto;
    margin-bottom: 2rem;
    border: 1px solid black;
    background-color: ${theme.colors.white};
    padding: ${theme.spacing.lg};
    text-align: left;
  }
`;
