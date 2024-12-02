import { Typography, Box } from '@mui/material';
import HorizontalCard from '../components/HorizontalCard';
import AdCardColl from '../components/AdCardColl';
export default function FeaturedSponsorshipOpportunitiesPage() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" width={"100%"} >
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY: 2 }}>
                Featured Sponsorship  <span style={{ color: '#FFA51F' }}>Oppurtunities</span>
            </Typography>
            <Box>
                <AdCardColl />

            </Box>
            <Typography fontWeight="800" variant="h2" sx={{ marginTop: 12, mb: 3, width: "55%", textAlign: "center", lineHeight: 1.3 }}>
                Check Out The Generous Offers From <span style={{ color: '#FFA51F' }}>Our Partners
                </span> Below
            </Typography>
            <HorizontalCardColl />
        </Box >
    );
}


const HorizontalCardColl = () => {
    const demoList = [
        { image: "/icons/images/adcreative_half.png", title: "Adcreative.ai", subtitle: "Generate Conversion-Focused Ad Creatives And Social Media Posts In a Matter Of Seconds Using Artificial Intelligence. Get Your Free Trial Here." },
        { image: "icons/images/pocket_half.png", title: "Spocket", subtitle: "A dropshipping platform that helps you find products to sell online." },
        { image: "/icons/images/exploding_half.png", title: "Exploding Topics", subtitle: "A complete e-commerce platform that lets you start, grow, and manage a business." },
        { image: "/icons/images/Vector.png", title: "Inflow", subtitle: "A dropshipping app that allows you to easily import products into your Shopify store." },
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg", title: "Printful", subtitle: "A print-on-demand service that allows you to create and sell custom products." },
        { image: "https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg", title: "AliExpress", subtitle: "A popular online retail service based in China that is owned by the Alibaba Group." }
    ]

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} sx={{ width: "80%", marginTop: 3, }}>
            {demoList.map((item, index) => (
                <HorizontalCard key={index} image={item.image} title={item.title} subtitle={item.subtitle} />
            ))}
        </Box>
    )
}