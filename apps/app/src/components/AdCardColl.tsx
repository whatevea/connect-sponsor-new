import { Box } from '@mui/material';
import AdCard from './AdCard';
const AdCardColl = () => {
    const demoList = [{
        bgcolor: '#E0CDFF', subtitle: 'Spocket: A dropshipping platform that helps you find products to sell online.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    },
    {
        bgcolor: '#FFCDFF', subtitle: 'Shopify: A complete e-commerce platform that lets you start, grow, and manage a business.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    },
    {
        bgcolor: '#CDFFCD', subtitle: 'Oberlo: A dropshipping app that allows you to easily import products into your Shopify store.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    },
    {
        bgcolor: '#CDFFFF', subtitle: 'Printful: A print-on-demand service that allows you to create and sell custom products.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
    },
    {
        bgcolor: '#FFFFCD', subtitle: 'AliExpress: A popular online retail service based in China that is owned by the Alibaba Group.', image: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title: 'Spocket'
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
        }} gap={2}>
            {demoList.map((item, index) => (
                <AdCard bgcolor={item.bgcolor} key={index} subtitle={item.subtitle} image={item.image} title={item.title} />
            ))}
        </Box>)
}
export default AdCardColl;