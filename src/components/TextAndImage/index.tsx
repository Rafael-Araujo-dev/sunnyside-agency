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
        data-aos={order==-1?"fade-left":"fade-right"}
      />
      <Content order={order}>
        <Title color={props.titleColor} data-aos="fade-in">{props.title}</Title>
        {props.text && (
          <TextContainer color={props.textColor} data-aos={order==0?"fade-left":"fade-right"}>{props.text}</TextContainer>
        )}
        {props.link && (
          <Link href={props.link} color={props.linkColor} colorHover={props.linkColorHover} data-aos="fade-in" data-aos-delay="250">
            Learn More
          </Link>
        )}
      </Content>
    </Container>
  );
};

export default TextAndImage;
