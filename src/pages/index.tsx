//Dependencies
import type { NextPage } from "next";
import Head from "next/head";

//Components
import HeroMain from "@components/HeroMain";
import TextAndImage from "@components/TextAndImage";
import TextAndImageV2 from "@components/TextAndImageV2";

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
  textAndImagesV2: {
    section1: {
      textAndImage1: {
        image: {
          desk: "./components/TextAndImages/image-graphic-design-desk.jpg",
          mobile: "./components/TextAndImages/image-graphic-design-mobile.jpg",
        },
        title: "Graphic Design",
        titleColor: "#25564b",
        text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients attention.",
        textColor: "#25564b",
      },
      textAndImage2: {
        image: {
          desk: "./components/TextAndImages/image-photography-desk.jpg",
          mobile: "./components/TextAndImages/image-photography-mobile.jpg",
        },
        title: "Photography",
        titleColor: "#25564b",
        text: "Increase your credibility by getting the most stunning, high-quality photos that improve your business image.",
        textColor: "#25564b",
      },
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
              id={"about-" + index}
              props={item}
              order={index % 2 == 0 ? -1 : 0}
            />
          );
        })}
      {Object.values(props.textAndImagesV2)
        .filter((section) => section)
        .map((section, index) => {
          return <TextAndImageV2 key={index} props={section} />;
        })}
    </>
  );
};

export default Home;
