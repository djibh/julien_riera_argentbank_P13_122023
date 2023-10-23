import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>Copyright 2023 Argent Bank</FooterStyled>;
}

const FooterStyled = styled.footer`
  padding-block: 2em;
  text-align: center;
  color: #888;
`;
