import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>Copyright 2023 Argent Bank</FooterStyled>;
}

const FooterStyled = styled.footer`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding-block: 2em;
  text-align: center;
  color: #888;
`;
