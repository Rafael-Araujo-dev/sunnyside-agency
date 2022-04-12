//Dependencies
import type { NextPage } from "next";
import Image from "next/image";

//Styles
import { Container, Wrapper, Title, ArrowDown, Bottom } from "./style";

const HeroMain: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>We Are Creatives</Title>
        <ArrowDown>
          <Image src="./components/icon-arrow-down.svg" width="100%" alt="Arrow down"/>
        </ArrowDown>
      </Wrapper>
    </Container>
  );
};

export default HeroMain;
