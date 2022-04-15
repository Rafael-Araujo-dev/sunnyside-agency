//Dependencies
import { NextPage } from "next";
import Image from "next/image";
import { useEffect } from "react";

//Styles
import {
  Container,
  Wrapper,
  Title,
  Items,
  Item,
  Commentary,
  Info,
  Author,
  Job,
} from "./style";

interface Properties {
  props: {
    [key: string]: {
      image?: string;
      commentary?: string;
      author?: string;
      job?: string;
    };
  };
}

const Testimonials: NextPage<Properties> = ({ props }) => {
  useEffect(()=> {
    window.addEventListener('resize', ()=> {
        window.innerWidth,
        window.innerHeight
    })
  }, [])

  let viewport = {}
  
  return (
    <Container>
      <Wrapper>
        <Title data-aos="fade-in">Client Testimonials</Title>
        <Items>
          {Object.values(props)
            .filter((item) => item)
            .map((item, index) => {
              return (
                <Item key={index} data-aos={
                  index==0 && "fade-right" ||
                  index==1 && "fade-up" ||
                  index==2 && "fade-left"
                }
                >
                  {item.image && (
                    <Image
                      src={item.image}
                      width={100}
                      height={100}
                      alt={"photo of " + item.author}
                    />
                  )}
                  <Commentary>{item.commentary}</Commentary>
                  <Info>
                    <Author>{item.author}</Author>
                    <Job>{item.job}</Job>
                  </Info>
                </Item>
              );
            })}
        </Items>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
