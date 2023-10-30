import styled from "styled-components";
import { theme } from "../../theme";
import Button from "../../components/Button";
import Account from "./Account";
import Loader from "../../components/Loader";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Accounts() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const [isLoading, setisLoading] = useState(true);

  setTimeout(() => {
    setisLoading(false);
  }, 1000);

  const mock = [
    {
      id: 1,
      accountType: "Argent Bank Checking",
      accountNumber: "x8349",
      accountBalance: "2082.79",
      accountInfo: "Available Balance",
    },
    {
      id: 2,
      accountType: "Argent Bank Savings",
      accountNumber: "x67124",
      accountBalance: "10,928.42",
      accountInfo: "Available Balance",
    },
    {
      id: 3,
      accountType: "Argent Bank Credit Card",
      accountNumber: "x5201",
      accountBalance: "184.30",
      accountInfo: "Current Balance",
    },
  ];

  useEffect(() => {
    if (!token) {
      navigate("/signin");
    }
  }, [token, navigate]);

  return (
    <AccountsStyled>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <h1>
              Welcome back
              <br /> Tony Jarvis{" "}
            </h1>
            <Button content="Edit name" />
          </header>
          <div>
            {mock.map(
              ({
                id,
                accountType,
                accountNumber,
                accountBalance,
                accountInfo,
              }) => {
                return (
                  <Account
                    key={id}
                    number={accountNumber}
                    title={accountType}
                    balance={accountBalance}
                    description={accountInfo}
                  />
                );
              }
            )}
          </div>
        </>
      )}
    </AccountsStyled>
  );
}

const AccountsStyled = styled.main`
  text-align: center;
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.backgroundDark};
  min-height: 80vh;

  > :first-child {
    display: grid;
    /* justify-content: center; */
    place-items: center;
  }

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
