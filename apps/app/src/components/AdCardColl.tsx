import { Box } from '@mui/material';
import AdCard from './AdCard';
const AdCardColl = () => {
    const demoList = [{
        bgcolor: '#FFCDFF', subtitle: 'Spocket: A dropshipping platform that helps you find products to sell online.', image: 'icons/images/ad_creative_logo.png', title: 'Spocket'
    },
    {
        bgcolor: '#E0CDFF', subtitle: 'Shopify: A complete e-commerce platform that lets you start, grow, and manage a business.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    },
    {
        bgcolor: '#C2D8FF', subtitle: 'Oberlo: A dropshipping app that allows you to easily import products into your Shopify store.', image: 'icons/images/exploding_logo.png', title: 'Exploding Topics'
    },
    {
        bgcolor: '#FFE5BF', subtitle: 'Printful: A print-on-demand service that allows you to create and sell custom products.', image: 'icons/images/inflow_logo_full.png', title: 'InFlow'
    },
    {
        bgcolor: '#EDEDED', subtitle: 'AliExpress: A popular online retail service based in China that is owned by the Alibaba Group.', image: 'icons/images/revealbot_full.png', title: 'RevealBot'
    },
    {
        bgcolor: '#FFDCDC', subtitle: 'BigCommerce: A leading e-commerce platform that helps businesses grow online.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    }
    ]
    return (
        <Box display="grid" gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)"
        }} gap={0}>
            {demoList.map((item, index) => (
                <AdCard bgcolor={item.bgcolor} key={index} subtitle={item.subtitle} image={item.image} title={item.title} />
            ))}
        </Box>)
}
export default AdCardColl;