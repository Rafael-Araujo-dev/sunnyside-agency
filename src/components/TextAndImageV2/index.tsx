//Dependencies
import type { NextPage } from "next";

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
            >
              <Content>
                <Title color={item.titleColor}>{item.title}</Title>
                <TextContainer color={item.textColor}>
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
