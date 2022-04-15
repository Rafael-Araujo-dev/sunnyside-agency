//Dependencies
import type { NextPage } from "next";
import { useState, useEffect } from "react";
//Styles
import { Container, Column, Content, Title, TextContainer } from "./style";

interface Properties {
  props: {
    [key: string]: {
      title?: string;
      titleColor?: string;
      text?: string;
      textColor?: string;
      link?: string;
      linkColor?: string;
      image?: {
        desk?: string;
        mobile?: string;
      };
    };
  };
}

const TextAndImageV2: NextPage<Properties> = ({ props }) => {

  return (
    <Container>
      {Object.values(props)
        .filter((item) => item)
        .map((item, index) => {
          return (
            <Column
              key={index}
              bgDesk={item.image?.desk}
              bgMobile={item.image?.mobile}
              data-aos={index==1?"fade-left":"fade-right"}
            >
              <Content>
                <Title color={item.titleColor} data-aos="fade-in">{item.title}</Title>
                <TextContainer color={item.textColor} data-aos="fade-up">
                  {item.text}
                </TextContainer>
              </Content>
            </Column>
          );
        })}
    </Container>
  );
};

export default TextAndImageV2;
