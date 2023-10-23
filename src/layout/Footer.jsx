import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>Copyright 2023 Argent Bank</FooterStyled>;
}

const FooterStyled = styled.footer`
  padding-block: 2em;
  border-top: 2px solid rgb(204, 204, 204);
  text-align: center;
  color: #888;
`;
