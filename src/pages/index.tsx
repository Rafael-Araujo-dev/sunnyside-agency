//Dependencies
import type { NextPage } from "next";
import Head from "next/head";

//Components
import HeroMain from "@components/HeroMain";
import TextAndImage from "@components/TextAndImage";

const props = {
  textAndImages: {
    textAndImage1: {
      image: {
        desk: "./components/TextAndImages/image-transform-desk.jpg",
        mobile: "./components/TextAndImages/image-transform-mobile.jpg",
      },
      title: "Transform your brand",
      titleColor: "#23303e",
      text: "We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.",
      textColor: "#818498",
      link: "#",
      linkColor: "#FFF3C0",
    },
    textAndImage2: {
      image: {
        desk: "./components/TextAndImages/image-stand-out-desk.jpg",
        mobile: "./components/TextAndImages/image-stand-out-mobile.jpg",
      },
      title: "Stand out to the right audience",
      titleColor: "#23303e",
      text: "Using a collaborative formula of designers, researches, photographers, videographers, and copywriters, we'll build and extend your brand in digital places.",
      textColor: "#818498",
      link: "#",
      linkColor: "#F8DAD3",
    },
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sunnyside - Agency</title>
        <meta name="description" content="" />
      </Head>

      <HeroMain />
      {Object.values(props.textAndImages)
        .filter((item) => item)
        .map((item, index) => {
          return (
            <TextAndImage
              key={index}
              props={Object(item)}
              order={index % 2 == 0 ? -1 : 0}
            />
          );
        })}
    </>
  );
};

export default Home;
