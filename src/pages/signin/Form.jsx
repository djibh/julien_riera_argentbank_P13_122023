import Button from "../../components/Button";
import Input from "../../components/Input";
import styled from "styled-components";
import { theme } from "../../theme";

export default function Form({ icon, title, handleSubmit }) {
  return (
    <FormStyled onSubmit={handleSubmit} className="signin__form" method="POST">
      {icon && icon}
      {title && <h1>{title}</h1>}
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
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  padding: ${theme.spacing.xl};
  text-align: center;

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
