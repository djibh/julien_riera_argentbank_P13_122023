import styled from "styled-components";
import background from "../../assets/img/bank-tree.jpeg";

export default function Hero() {
  return (
    <HeroStyled>
      <section className="hero-content">
        <h2 className="sr-only">Promoted Content</h2>
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </HeroStyled>
  );
}

const HeroStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background-image: url("${background}");
  background-position: 0 -300px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important; /* 1 */
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important; /* 2 */
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important; /* 3 */
  }

  .hero-content {
    position: absolute;
    right: 5em;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;

    & .subtitle {
      font-weight: bold;
      font-size: 1rem;
      margin: 0;
    }

    & .text {
      margin-bottom: 0;
      font-size: 0.9rem;
    }
  }
`;
