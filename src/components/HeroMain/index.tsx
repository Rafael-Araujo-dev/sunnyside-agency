//Dependencies
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//Styles
import { Container, Wrapper, Title, ArrowDown, Bottom } from "./style";

const HeroMain: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Title>We Are Creatives</Title>
        <ArrowDown>
          <Link href="#about-0" passHref>
            <Image
              src="/components/icon-arrow-down.svg"
              width={36}
              height={114}
              alt="Arrow down"
            />
          </Link>
        </ArrowDown>
      </Wrapper>
    </Container>
  );
};

export default HeroMain;
