import { 
  Box, 
  Typography, 
  Container, 
  TextField, 
  Button, 
  Link,
  Paper 
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AdCard from '../components/AdCard';
import { InsertEmoticon } from '@mui/icons-material';

export default function DashboardPage() {
  return (
    <div>
 <Typography variant='h5'>Download the 1,000+ most active YouTube sponsors in 30 languages </Typography>
    <SponsorSection/>
 <Typography variant='h5' sx={{marginTop:2}}>Download the historical Sponsorship Databases. </Typography>
 <SponsorSection/>
 <MidSection/>
 <BottomSection/>
<AdCardColl/>
     </div>
  );
}

const SponsorSection =()=>{
const demoList=[
  { name: "Google Document", date: "2023/2/23" }
]
return(
<Box
sx={{
  borderRadius: '15px',
  border: '1px solid',
  borderColor: '#FFFFFF',
  backgroundImage: 'linear-gradient(#191153, #382689)',
  padding:5,
  marginTop:5
}}
>
<Typography sx={{ fontSize:'26px' }}>
All Files
</Typography>
<Box
    sx={{
      marginTop:4,
      '& .MuiTypography-root': {
        fontSize: '20px',
      },
    }}
  >
    <Box display="flex" justifyContent="space-between">
      <Typography variant="body1" fontWeight="bold" color="#FFA51F" flex={2 / 3}>
        Download Sponsors
      </Typography>
      <Typography variant="body1" fontWeight="bold" color="#FFA51F" flex={1 / 3}>
        Date
      </Typography>
    </Box>
    
      {demoList.map((item) => (
    <Box
    mt={2}
    bgcolor="rgba(255, 255, 255, 0.1)"
    borderRadius={2}
    p={2}
    color="#CAC4C4"
  >
    <Box display="flex" justifyContent="space-between" key={item.name} sx={{
          '& .MuiTypography-root': {
            fontSize: '18px',
          },
        }}>
          <Typography variant="body1" flex={2/3}>{item.name}</Typography>
          <Typography variant="body1" flex={1/3}>{item.date}</Typography>
        </Box>
    </Box>
      ))
      }
    <Box mt={2} color="#fff">
      <Typography variant="body1" marginY={2}>
      This content is for Pro plan & Enterprise members only        </Typography>
      <Typography variant="body1">
        Please{' '}
        <Link href="#" underline="hover" color="#FFA51F">
          Click Here
        </Link>{' '}
        to gain access.
      </Typography>
    </Box>
  </Box>
</Box>
)
}

const MidSection = () => {
  const [affiliateLink, setAffiliateLink] = useState('');

  return (
    <Container maxWidth="md">
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          color: 'white', 
 
          borderColor: '#FFFFFF',
          gap: 3 ,
          lineHeight: 1.5,
        }}
      >
        <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY:2 }}>
          Give <span style={{ color: '#FFA51F' }}>ConnectSponsors.Com</span> to your friends!
        </Typography>

        <Paper 
          elevation={3}
          sx={{ 
            width: '100%', 
            background: 'linear-gradient(to right, #191153, #382689)', 
            color: 'white', 
            textAlign: 'center', 
            border: '1px solid',
            borderRadius :2,
            paddingY:3,
            '& .MuiTypography-root': {
              lineHeight: '24px',
            },
            
          }}
        >
          <Typography variant="h5" sx={{ fontSize : "33px" ,marginY:3}}>
            <span style={{ color: '#FFA51F' }}>Connect</span>Sponsors.com
          </Typography>
          
          <Typography variant="h5" sx={{ my: 1 ,fontSize:"22px" ,fontWeight:500 }}>
            Give 50% Off Year 1, Earn 50% Commissions for Life—Double After Year 1!
          </Typography>
          
          <Typography variant="body2" sx={{ p: 1 ,fontSize:"16px" }}>
            Offer your friends 50% off their first year of ConnectSponsors.com on both our Startup and Pro plans. Earn $124.25/month or $1248.50/year for Year 1, and double that in commissions for every year after.
          </Typography>
          
          <Box 
            sx={{ 
              backgroundColor: 'rgba(255,255,255,0.1)', 
              p: 2, 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 1 ,
                '& .MuiTypography-root': {
                  fontSize: '15px',
                },
            }}
          >
            <Typography>
              So after the first year, you'll be earning $248.50/month or $2498.50/year for as long as your referral stays!
            </Typography>
            
            <Typography>
              This is one of the most generous affiliate programs available—but it won't last forever. Lock in your spot now and start building lifetime recurring revenue.
            </Typography>
            
            <Typography>
              Affiliates are already seeing long-term success, generating consistent passive income from our program. Don't miss your chance to secure lifetime earnings from your referrals.
            </Typography>
          </Box>
          
          <Typography fontWeight="bold" sx={{ mt: 2 ,fontSize:"20px" }}>
            Your affiliate link
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1,justifyContent:"center" }}>
            <TextField 
              variant="outlined" 
              value={affiliateLink}
              onChange={(e) => setAffiliateLink(e.target.value)}
              placeholder='https://Get ConnectSponsors.com/c/YTVS49'
              sx={{ 
                width: "50%",
                '& .MuiOutlinedInput-root': { 
                  backgroundColor: 'white' ,
                  borderRadius: '12px',
                  color: 'black',
                } 
              }}
            />
            <Button 
              variant="contained" 
              sx={{ 
                backgroundColor: '#FFA51F', 
                '&:hover': { backgroundColor: '#FFA51F' } 
              }}
            >
              Copy
            </Button>
            <EditIcon />
          </Box>
          
          <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
            {[<FacebookIcon />, <PinterestIcon />, <TwitterIcon />, <LinkedInIcon />].map((Icon, index) => (
              <Box key={index} sx={{ mx: 1 }}>
                {Icon}
              </Box>
            ))}
          </Box>
              </Paper>
      </Box>
    </Container>
  );
};

const BottomSection=()=>{
  return (
    <Box 
    sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      color: 'white', 
      gap: 3 ,
      lineHeight: 1.5,
    }}
  >

    <Box sx={{width:"60%",padding:"10px", textAlign:"center" , '& .MuiOutlinedInput-root': { 
      lineHeight: 1.5
}}}>
    <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY:2 }}>
    These sponsorship partners have actively contacted us to be your 
    
    <span style={{ color: '#FFA51F' }}> long term sponsors</span>
    </Typography>

    <Typography variant="body1" sx={{ fontSize: '20px', marginY:2 }}>
    For better deals with our featured sponsorship partners: Feel free to contact them and mention that you came from “ConnectSponsors.com” (we take 0% of your negotiated deals)
      </Typography>
      <Typography>
      Your account does not have access to our Featured sponsorship partners
      </Typography>
      <Typography>
      <Link style={{ color: '#FFA51F' }}>

      Click here  
      </Link>
       to gain access. 
      </Typography>
    </Box>
  </Box>

  )
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
        <Box display="grid" sx={{margin:8}} gridTemplateColumns="repeat(3, 1fr)" >
          {demoList.map((item, index) => (
            <AdCard bgcolor={item.bgcolor} key={index} subtitle={item.subtitle} image={item.image} title={item.title} />
          ))}
        </Box>
  )
}