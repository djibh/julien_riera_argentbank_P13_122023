import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";

export default function Account() {
  return (
    <AccountStyled>
      <div>
        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
        <p className="account-amount">$2,082.79</p>
        <p className="account-amount-description">Available balance</p>
      </div>
      <div>
        <Button content="View transactions" />
      </div>
    </AccountStyled>
  );
}

const AccountStyled = styled.section`
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

  .account-title {
    margin: 0;
    padding: 0;
    font-size: ${theme.fonts.size.S0};
    font-weight: ${theme.fonts.weight.regular};
  }

  .account-amount {
    margin: 0;
    font-size: 2.5rem;
    font-weight: ${theme.fonts.weight.bold};

    &-description {
      margin: 0;
    }
  }
`;
