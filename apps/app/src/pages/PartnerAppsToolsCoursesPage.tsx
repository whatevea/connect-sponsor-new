import { Typography,Box } from '@mui/material';
import AdCard from '../components/AdCard';
export default function PartnerAppsToolsCoursesPage() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" width={"100%"} >
       <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY: 2 }}>
       Partner apps, 
        
         <span style={{ color: '#FFA51F' }}>tools </span>
        
       &
        <span style={{ color: '#FFA51F' }}> courses </span>
        </Typography>
        <AdCardColl/>
    </Box>
  );
}
const AdCardColl=()=>{
  const demoList=[{
    bgcolor:'#E0CDFF', subtitle:'Spocket: A dropshipping platform that helps you find products to sell online.', image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        },
        {
          bgcolor:'#FFCDFF', subtitle:'Shopify: A complete e-commerce platform that lets you start, grow, and manage a business.', image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        },
        {
          bgcolor:'#CDFFCD', subtitle:'Oberlo: A dropshipping app that allows you to easily import products into your Shopify store.', image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        },
        {
          bgcolor:'#CDFFFF', subtitle:'Printful: A print-on-demand service that allows you to create and sell custom products.',image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        },
        {
          bgcolor:'#FFFFCD', subtitle:'AliExpress: A popular online retail service based in China that is owned by the Alibaba Group.', image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        },
        {
          bgcolor:'#FFDCDC', subtitle:'BigCommerce: A leading e-commerce platform that helps businesses grow online.',image:'https://upload.wikimedia.org/wikipedia/commons/6/69/Spocket_Logo_2019.svg', title:'Spocket'
        }
      ]     
       return (
        <Box display="grid" sx={{margiX:8}} gridTemplateColumns="repeat(3, 1fr)" >
          {demoList.map((item, index) => (
            <AdCard bgcolor={item.bgcolor} key={index} subtitle={item.subtitle} image={item.image} title={item.title} />
          ))}
        </Box>
  )
}
