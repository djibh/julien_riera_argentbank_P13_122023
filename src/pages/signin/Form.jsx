import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Form() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/accounts");
  };

  return (
    <FormStyled onSubmit={handleSubmit} className="signin__form">
      <Input type={"email"} />
      <Input type={"password"} />
      <Input
        label={"Remember me"}
        type={"checkbox"}
        id={"remember-me"}
        className={"input-remember"}
      />
      <Button content={"Sign in"} className={"sign-in__button"} />
    </FormStyled>
  );
}

const FormStyled = styled.form`
  .input-remember {
    flex-direction: row-reverse;
    justify-content: start;
    font-weight: ${theme.fonts.weight.medium};

    & label {
      margin-left: ${theme.spacing.xxs};
    }
  }

  .sign-in__button {
    width: 100%;
    margin-top: ${theme.spacing.md};
  }
`;
