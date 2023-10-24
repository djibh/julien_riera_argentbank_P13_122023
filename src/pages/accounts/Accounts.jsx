import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";
import Account from "./Account";

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
        <Account />
        <Account />
        <Account />
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
`;
