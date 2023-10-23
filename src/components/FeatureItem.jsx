import styled from "styled-components";

export default function FeatureItem({
  icon,
  title = "Feature title",
  content = "Feature content",
}) {
  return (
    <FeatureItemStyled>
      <img src={icon} className="feature__icon" alt="feature-icon" />
      <h3 className="title">{title}</h3>
      <span className="content">{content}</span>
    </FeatureItemStyled>
  );
}

const FeatureItemStyled = styled.article`
  flex: 1;
  padding: 2.5rem;
  text-align: center;

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

  .title {
    margin-block: 1.5em;
    margin-bottom: 0.5rem;
    color: #222;
    font-size: 1.25rem;
  }

  .content {
  }
`;
