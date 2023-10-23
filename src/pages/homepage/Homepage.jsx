import styled from "styled-components";
import Hero from "./Hero";
import Features from "./Features";
import Footer from "../../components/Footer";

export default function Homepage() {
  return (
    <HomepageStyled>
      <Hero />
      <Features />
      <Footer />
    </HomepageStyled>
  );
}

const HomepageStyled = styled.main``;
