//Dependencies
import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Styles
import {
  Container,
  Wrapper,
  Desk,
  Items,
  MenuToggler,
  MenuMobile,
} from "./style";

const Navbar: NextPage = () => {
  const [active, setActive] = useState(false);

  return (
    <Container role="navigation">
      <Wrapper>
        <Link href="#home" passHref>
          <Image
            src="/components/Navbar/logo.svg"
            width={124}
            height={24}
            alt="Sunnyside logo"
            role="img"
          />
        </Link>
        <MenuToggler
          onClick={() => {
            setActive(!active);
          }}
        >
          <Image
            src="/components/Navbar/icon-hamburger.svg"
            width={24}
            height={18}
            alt="Menu icon"
            role="button"
            aria-label="controls menu display"
          />
        </MenuToggler>
        <MenuMobile className={active ? "show" : "hide"}>
          <Items role="menu">
            <Link href="#about" passHref>
              About
            </Link>
            <Link href="#services" passHref>
              Services
            </Link>
            <Link href="#projects" passHref>
              Projects
            </Link>
            <Link href="#contact" passHref>
              <a className="contact">Contact</a>
            </Link>
          </Items>
        </MenuMobile>
        <Desk>
          <Items role="menu">
            <Link href="#about-0" passHref>
              About
            </Link>
            <Link href="#services" passHref>
              Services
            </Link>
            <Link href="#projects" passHref>
              Projects
            </Link>
            <Link href="#contact" passHref>
              <a className="contact">Contact</a>
            </Link>
          </Items>
        </Desk>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
