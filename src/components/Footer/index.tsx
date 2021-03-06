//Dependencies
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

//Styles
import { Container, Wrapper, Nav, Socials, Social, Credits } from "./style";

const Footer: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <Link href="#home" passHref>
          <Image
            src="/components/Footer/logo-dark.svg"
            width={186}
            height={36}
            alt="Sunnyside logo"
          />
        </Link>
        <Nav>
          <Link href="#about" passHref>
            About
          </Link>
          <Link href="#services" passHref>
            Services
          </Link>
          <Link href="#projects" passHref>
            Projects
          </Link>
        </Nav>
        <Socials id="contact">
          <Social>
            <Link href="#facebook" passHref>
              <Image
                src="/components/Footer/icon-facebook.svg"
                width={20}
                height={20}
                alt="Facebook logo"
              />
            </Link>
          </Social>
          <Social>
            <Link href="#instagram" passHref>
              <Image
                src="/components/Footer/icon-instagram.svg"
                width={20}
                height={20}
                alt="Instagram logo"
              />
            </Link>
          </Social>
          <Social>
            <Link href="#twitter" passHref>
              <Image
                src="/components/Footer/icon-twitter.svg"
                width={20}
                height={20}
                alt="Twitter logo"
              />
            </Link>
          </Social>
          <Social>
            <Link href="#pinterest" passHref>
              <Image
                src="/components/Footer/icon-pinterest.svg"
                width={20}
                height={20}
                alt="Pinterest logo"
              />
            </Link>
          </Social>
        </Socials>
      </Wrapper>
      <Credits>
        Made with <span>&hearts;</span> by
        <Link
          href="https://www.linkedin.com/in/rafael-ribeiro-araujo/"
          passHref
        >
          <a target="_blank">Rafael Ara??jo</a>
        </Link>
      </Credits>
    </Container>
  );
};

export default Footer;
