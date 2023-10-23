import styled from "styled-components";
import FeatureItem from "../../components/FeatureItem";
import { features } from "../../data/featuresList";

export default function Features() {
  return (
    <FeaturesStyled>
      {features.map(({ id, icon, title, content }) => {
        return (
          <FeatureItem key={id} icon={icon} title={title} content={content} />
        );
      })}
    </FeaturesStyled>
  );
}

const FeaturesStyled = styled.section`
  display: flex;
  justify-content: space-evenly;
  padding: 3em 2em;
`;
