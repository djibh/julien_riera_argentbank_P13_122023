import styled from "styled-components";

export default function Footer() {
  return <FooterStyled>Copyright 2023 Argent Bank</FooterStyled>;
}

const FooterStyled = styled.footer`
  display: flex;
  justify-content: center;
  padding: 2rem 0 1.5rem;
  border-top: 2px solid #ccc;
  color: #888;
`;
