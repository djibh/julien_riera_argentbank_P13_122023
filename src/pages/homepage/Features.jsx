import styled from "styled-components";
import FeatureItem from "../../components/FeatureItem";
import { features } from "../../data/featuresList";
import { theme } from "../../theme";

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
  padding: ${theme.spacing.xl};
`;
