//Dependencies
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//Styles
import { Container, Title, ArrowDown } from "./style";

const HeroMain: NextPage = () => {
  return (
    <Container id="home">
      <Title role="title">We Are Creatives</Title>
      <ArrowDown>
        <Link href="#about" passHref>
          <Image
            src="/components/icon-arrow-down.svg"
            width={36}
            height={114}
            alt="Arrow down"
            aria-label="goes to about session about"
            role="link"
          />
        </Link>
      </ArrowDown>
    </Container>
  );
};

export default HeroMain;
