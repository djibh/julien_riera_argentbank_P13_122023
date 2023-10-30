import styled from "styled-components";
import { theme } from "../theme";
import capitalize from "../utils/capitalize";
import { useState } from "react";
// import { useSelector } from "react-redux";

export default function Input({ label, type, id, className, handleChange }) {
  const [value, setValue] = useState("");
  // if no ID provided, use type value
  !id && (id = type);
  // if no label provided, use type value and capitalize first letter
  !label && (label = capitalize(type));

  const updateValue = (event) => {
    setValue(event.target.value);
  };

  const handleInputBlur = () => {
    handleChange(value);
  };

  return (
    <InputStyled className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        value={value}
        onChange={updateValue}
        onBlur={handleInputBlur}
        type={type}
        id={id}
      />
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
