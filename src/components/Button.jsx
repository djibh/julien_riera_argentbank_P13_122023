import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { useSelector } from "react-redux";
import HamsterLoader from "./Loader";

export default function Button({ content, handleClick, className }) {
  // const { loading } = useSelector((state) => state.user);

  return (
    <ButtonStyled className={className} onClick={handleClick}>
      {content}
      {/* {loading ? <HamsterLoader /> : content} */}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: ${theme.fonts.size.S1};
  font-weight: ${theme.fonts.weight.bold};
  border-color: ${theme.colors.primary};
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
`;
