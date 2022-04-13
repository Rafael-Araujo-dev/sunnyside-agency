//Dependencies
import { NextPage } from "next";
import Image from "next/image";

//Styles
import { Container, Title, Items, Item, Commentary, Info, Author, Job } from "./style";

interface Properties { 
    props: {
        [key: string]: {
            image?: string;
            commentary?: string;
            author?: string;
            job?: string;
        }
    }
}

const Testimonials : NextPage<Properties> = ({ props }) => {
    return (
        <Container>
            <Title>Client Testimonials</Title>
            <Items>
                {
                    Object.values(props)
                    .filter((item) => item)
                    .map((item, index) => {
                        return (
                            <Item key={index}>
                                {item.image && <Image src={item.image} width={100} height={100} alt={"photo of "+item.author} />}
                                <Commentary>
                                    {item.commentary}
                                </Commentary>
                                <Info>
                                    <Author>{item.author}</Author>
                                    <Job>{item.job}</Job>
                                </Info>
                            </Item>
                        )
                    })
                }
            </Items>
        </Container>
    )
}

export default Testimonials;