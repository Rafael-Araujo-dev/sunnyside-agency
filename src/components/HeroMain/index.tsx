//Dependencies
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

//Styles
import { Container, Title, ArrowDown } from "./style";

const HeroMain: NextPage = () => {
  return (
    <Container id="home">
      <Title>We Are Creatives</Title>
      <ArrowDown>
        <Link href="#about" passHref>
          <Image
            src="/components/icon-arrow-down.svg"
            width={36}
            height={114}
            alt="Arrow down"
          />
        </Link>
      </ArrowDown>
    </Container>
  );
};

export default HeroMain;
