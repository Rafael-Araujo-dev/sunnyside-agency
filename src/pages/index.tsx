//Dependencies
import type { NextPage } from "next";
import Head from "next/head";

//Components
import Navbar from "@components/Navbar";
import HeroMain from "@components/HeroMain";
import TextAndImage from "@components/TextAndImage";
import TextAndImageV2 from "@components/TextAndImageV2";
import Testimonials from "@components/Testimonials";
import GridImage from "@components/GridImage";
import Footer from "@components/Footer";

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
      link: "#about",
      linkColor: "#FFF3C0",
      linkColorHover: "#F5D408",
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
      link: "#about-1",
      linkColor: "#F8DAD3",
      linkColorHover: "#FE7769",
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
  testimonials: {
    testimonials1: {
      image: "/components/Testimonial/image-emily.jpg",
      commentary:
        "We put our trust in Sunnyside and they delivered, making sure our needs were meet and deadlines were always hit.",
      author: "Emily R.",
      job: "Marketing Director",
    },
    testimonials2: {
      image: "/components/Testimonial/image-thomas.jpg",
      commentary:
        "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience.",
      author: "Thomas S.",
      job: "Chief Operating Officer",
    },
    testimonials3: {
      image: "/components/Testimonial/image-jennie.jpg",
      commentary:
        "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      author: "Jennie F.",
      job: "Business Owner",
    },
  },
  gridImage: {
    image1: {
      desk: "./components/GridImage/image-gallery-milkbottles-desk.jpg",
      mobile: "./components/GridImage/image-gallery-milkbottles-mobile.jpg",
    },
    image2: {
      desk: "./components/GridImage/image-gallery-orange-desk.jpg",
      mobile: "./components/GridImage/image-gallery-orange-mobile.jpg",
    },
    image3: {
      desk: "./components/GridImage/image-gallery-cone-desk.jpg",
      mobile: "./components/GridImage/image-gallery-cone-mobile.jpg",
    },
    image4: {
      desk: "./components/GridImage/image-gallery-sugarcubes-desk.jpg",
      mobile: "./components/GridImage/image-gallery-sugar-cubes-mobile.jpg",
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

      <Navbar />

      <HeroMain />

      <main>
        <section id="about">
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
        </section>
        <section id="services">
          {Object.values(props.textAndImagesV2)
            .filter((section) => section)
            .map((section, index) => {
              return <TextAndImageV2 key={index} props={section} />;
            })}
        </section>
        <Testimonials props={props.testimonials} />
        <section id="projects">
          <GridImage props={props.gridImage} />
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Home;
