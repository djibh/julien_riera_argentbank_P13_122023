import styled from "styled-components";

export default function FeatureItem({
  icon,
  title = "Feature title",
  content = "Feature content",
}) {
  return (
    <FeatureItemStyled>
      <img src={icon} className="feature__icon" alt="feature-icon" />
      <h3>{title}</h3>
      <span>{content}</span>
    </FeatureItemStyled>
  );
}

const FeatureItemStyled = styled.article`
  text-align: center;
  max-width: 30%;

  .feature__icon {
    display: grid;
    margin: auto;
    place-items: center;
    padding: 1rem;
    max-width: 100px;
    aspect-ratio: 1;
    border: 10px solid #00bc77;
    border-radius: 50%;
  }

  h3 {
    margin-block: 1.5em;
  }
`;
