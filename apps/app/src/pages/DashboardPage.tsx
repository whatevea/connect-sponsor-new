import {
    Box,
    Typography,
    Container,
    TextField,
    Button,
    Link,
    Paper
} from '@mui/material';
import { useState } from 'react';
import AdCardColl from '../components/AdCardColl';

export default function DashboardPage() {
    return (
        <div>
            <Typography variant='h4' marginTop={5}>Download the 1,000+ most active YouTube sponsors in 30 languages </Typography>
            <SponsorSection />
            <Typography variant='h5' sx={{ marginTop: 2 }}>Download the historical Sponsorship Databases. </Typography>
            <SponsorSection />
            <MidSection />
            <BottomSection />
            <AdCardColl />
        </div>
    );
}

const SponsorSection = () => {
    const demoList = [
        { name: "Google Document", date: "2023/2/23" }
    ]
    return (
        <Box
            sx={{
                borderRadius: '15px',
                border: '1px solid',
                borderColor: '#FFFFFF',
                backgroundImage: 'linear-gradient(to left, #191153, #382689)',
                padding: 5,
                marginTop: 2
            }}
        >
            <Typography sx={{ fontSize: '26px', fontWeight: '600' }}>
                All Files
            </Typography>
            <Box
                sx={{
                    marginTop: 4,
                    '& .MuiTypography-root': {
                        fontSize: '20px',
                    },
                }}
            >
                <Box display="flex" justifyContent="space-between">
                    <Typography variant="body1" fontWeight="500" color="#FFA51F" flex={2 / 3}>
                        Download Sponsors
                    </Typography>
                    <Typography variant="body1" fontWeight="500" color="#FFA51F" flex={1 / 3}>
                        Date
                    </Typography>
                </Box>

                {demoList.map((item) => (
                    <Box
                        mt={2}
                        bgcolor="rgba(255, 255, 255, 0.1)"
                        borderRadius={4}
                        p={3}
                        color="#CAC4C4"
                    >
                        <Box display="flex" justifyContent="space-between" key={item.name} sx={{
                            '& .MuiTypography-root': {
                                fontSize: '18px',
                            },
                        }}>
                            <Typography variant="body1" flex={2 / 3}>{item.name}</Typography>
                            <Typography variant="body1" flex={1 / 3}>{item.date}</Typography>
                        </Box>
                    </Box>
                ))
                }
                <Box mt={2} color="#fff" display={"none"}>
                    <Typography variant="body1" marginY={2}>
                        This content is for Pro plan & Enterprise members only
                    </Typography>
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
                    gap: 3,
                    lineHeight: 1.5,
                }}
            >
                <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginTop: 7, marginBottom: 2 }}>
                    Give <span style={{ color: '#FFA51F' }}>ConnectSponsors.Com</span> to your friends!
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        width: '70%',
                        background: 'linear-gradient(to left, #191153, #382689)',
                        color: 'white',
                        textAlign: 'center',
                        border: '1px solid',
                        borderRadius: 2,
                        paddingY: 3,
                        '& .MuiTypography-root': {
                            lineHeight: '24px',
                            textAlign: 'center',
                        },

                    }}
                >
                    <Typography variant="h5" sx={{ fontSize: "33px", marginY: 3 }}>
                        <span style={{ color: '#FFA51F' }}>Connect</span>Sponsors.com
                    </Typography>

                    <Typography variant="h5" sx={{ my: 1, fontSize: "22px", fontWeight: 500 }}>
                        Give 50% Off Year 1, Earn 50%
                        <Typography variant="h5" sx={{ my: 1, fontSize: "22px", fontWeight: 500 }}>

                            Commissions for Life—Double After Year 1!
                        </Typography>
                    </Typography>

                    <Typography variant="body2" sx={{ p: 1, fontSize: "16px", lineHeight: 2 }}>
                        Offer Your Friends 50% Off Their First Year Of ConnectSponsors.com On Both Our Startup And Pro Plans. Earn $124.25/Month Or $1248.50/Year For Year 1, And Double That In Commissions For Every Year After.                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            '& .MuiTypography-root': {
                                fontSize: '15px',
                                lineHeight: 1.8,
                            },
                        }}
                    >
                        <Typography>
                            So After The First Year, You'll Be Earning $248.50/Month Or $2498.50/Year For As Long As Your Referral Stays!
                        </Typography>
                        <Typography>
                            This Is One Of The Most Generous Affiliate Programs Available—But It Won't Last Forever. Lock In Your Spot Now And Start Building Lifetime Recurring Revenue.                        </Typography>

                        <Typography paddingX={3}>
                            Affiliates Are Already Seeing Long-Term Success, Generating Consistent Passive Income From Our Program. Don't Miss Your Chance To Secure Lifetime Earnings From Your Referrals.                        </Typography>
                    </Box>

                    <Typography fontWeight="600" sx={{ mt: 2, fontSize: "20px" }}>
                        Your Affiliate link
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, justifyContent: "center" }}>
                        <TextField
                            variant="outlined"
                            value={affiliateLink}
                            onChange={(e) => setAffiliateLink(e.target.value)}
                            placeholder='https://Get ConnectSponsors.com/c/YTVS49'
                            sx={{
                                width: "65%",
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 4,
                                    backgroundColor: 'white',
                                    color: 'black',
                                }
                            }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                marginLeft: 1,
                                borderRadius: 4,
                                backgroundColor: '#FFA51F',
                                '&:hover': { backgroundColor: '#FFA51F' },
                                fontWeight: 500,
                                border: '1px solid white',
                            }}
                        >
                            Copy
                        </Button>
                        <Box component="img" src="/icons/pencil.svg" alt="copy" sx={{ width: '30px', height: '30px' }} />
                    </Box>

                    <Box display="flex" justifyContent="center" alignItems="center" gap={1} sx={{ mt: 2 }}>
                        {['facebook.svg', 'pinterest.svg', 'twitter.svg', 'linkedin.svg'].map((icon, index) => (
                            <Box key={index} sx={{ mx: 1 }}>
                                <Box component="img" src={`/icons/${icon}`} alt={icon.replace('.svg', '')} sx={{ width: '30px', height: '25px' }} />
                            </Box>))}
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
};

const BottomSection = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                gap: 3,
                lineHeight: 1.5,
            }}
        >

            <Box sx={{
                width: "90%", padding: "10px", margin: 3, textAlign: "center", '& .MuiOutlinedInput-root': {
                    lineHeight: 1.5,
                    textAlign: "center"
                }
            }}>
                <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '28px', marginY: 2, lineHeight: 1.2 }}>
                    These sponsorship partners have actively contacted us to be your

                    <span style={{ color: '#FFA51F' }}> long term sponsors </span>
                </Typography>

                <Typography variant="body1" sx={{ fontSize: '18px', marginY: 2, lineHeight: 1.3 }}>
                    For Better Deals With Our Featured Sponsorship Partners: Feel Free To Contact Them And Mention That You Came From "ConnectSponsors.com" (We Take 0% Of Your Negotiated Deals)
                </Typography>
                <Typography lineHeight={2} fontSize={16}>
                    Your account does not have access to our Featured sponsorship partners
                    <p>
                        <Link style={{ color: '#FFA51F' }}>
                            Click here &nbsp;
                        </Link>
                        to gain access.
                    </p>
                </Typography>
            </Box>
        </Box>

    )
}