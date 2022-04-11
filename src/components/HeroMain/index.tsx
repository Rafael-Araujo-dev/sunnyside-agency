//Dependencies
import type { NextPage } from "next";

//Styles
import { Container, Wrapper, Title, ArrowDown, Bottom } from "./style";

const HeroMain: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>We Are Creatives</Title>
        <ArrowDown>
          <img src="./components/icon-arrow-down.svg" width="100%" />
        </ArrowDown>
      </Wrapper>
    </Container>
  );
};

export default HeroMain;
