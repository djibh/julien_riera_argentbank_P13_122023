import styled from "styled-components";
import { theme } from "../theme";
import capitalize from "../utils/capitalize";

export default function Input({ label, type, id, className }) {
  // if no ID provided, use type value
  if (!id) {
    id = type;
  }

  if (!label) label = capitalize(type);

  return (
    <InputStyled className={className}>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
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
`;
