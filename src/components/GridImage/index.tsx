//Dependencies
import { NextPage } from "next";

//Styles
import { Grid, Item } from "./style";

interface Properties {
    props: {
        [key: string]: {
            desk?: string;
            mobile?: string;
        }
    }
}

const GridImage: NextPage<Properties> = ({ props }) => {
    return (
        <Grid>
            {
                Object.values(props)
                .filter((item) => item)
                .map((item, index) => {
                    return (
                        <Item key={index} desk={item.desk} mobile={item.mobile} />            
                    )
                })
            }
        </Grid>
    )
}

export default GridImage;