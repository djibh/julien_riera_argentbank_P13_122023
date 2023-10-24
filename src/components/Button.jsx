import React from "react";
import styled from "styled-components";
import { theme } from "../theme";

export default function Button({ content, handleClick, className }) {
  return (
    <ButtonStyled className={className} onClick={handleClick}>
      {content}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  /* width: 100%; */
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.size.S1};
  font-weight: ${theme.fonts.weight.bold};
  margin-top: ${theme.spacing.md};
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
