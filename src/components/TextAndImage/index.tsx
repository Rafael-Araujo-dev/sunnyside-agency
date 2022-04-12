//Dependencies
import type { NextPage } from "next";

//Styles
import {
  Container,
  Content,
  Title,
  TextContainer,
  Link,
  ImageContainer,
} from "./style";

interface Properties {
  props: {
    title?: string;
    titleColor?: string;
    text?: string;
    textColor?: string;
    link?: string;
    linkColor?: string;
    linkColorHover?: string;
    image?: {
      desk?: string;
      mobile?: string;
    };
  };
  order?: number;
  id?: string;
}

const TextAndImage: NextPage<Properties> = ({ props, order, id }) => {
  return (
    <Container id={id}>
      <ImageContainer
        bgDesk={props.image?.desk}
        bgMobile={props.image?.mobile}
      />
      <Content order={order}>
        <Title color={props.titleColor}>{props.title}</Title>
        {props.text && (
          <TextContainer color={props.textColor}>{props.text}</TextContainer>
        )}
        {props.link && (
          <Link href={props.link} color={props.linkColor} colorHover={props.linkColorHover}>
            Learn More
          </Link>
        )}
      </Content>
    </Container>
  );
};

export default TextAndImage;
