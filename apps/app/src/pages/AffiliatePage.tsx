import React, { useState } from 'react';
import {
    Box,
    Typography,
    Container,
    TextField,
    Button,
    Stack,
    Paper,
    IconButton,
    useMediaQuery,
    useTheme
} from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import FacebookIcon from '@mui/icons-material/Facebook';
import EditIcon from '@mui/icons-material/Edit';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AffiliatePage = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const [affiliateLink, setAffiliateLink] = useState('https://ConnectSponsors.com/c/YTVS49');

    const handleCopyLink = () => {
        navigator.clipboard.writeText(affiliateLink);
    };

    return (
        <Box
            sx={{
                backgroundColor: '#191153',
                color: 'white',
                py: 5,
                px: { xs: 2, md: 1 }
            }}
        >
            <Container maxWidth="xl">
                <Stack
                    direction={isMobile ? 'column' : 'row'}
                    spacing={5}
                    alignItems="stretch"
                >
                    {/* Left Column */}
                    <Stack
                        spacing={4}
                        sx={{
                            width: { xs: '100%', md: '50%' },
                            justifyContent: 'center'
                        }}
                    >
                        {/* Header Section */}
                        <Stack spacing={3}>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                gutterBottom
                            >
                                <Box component="span" color="#FFA51F">Affiliate</Box> Dashboard
                            </Typography>

                            {/* Email Input */}
                            <Stack spacing={2}>
                                <Box>
                                    <Typography variant="body1">
                                        Paypal Email
                                        <Typography variant="caption" color="gray" display="block">
                                            Used for payouts
                                        </Typography>
                                    </Typography>
                                    <Stack direction="row" spacing={1} alignItems="center">
                                        <TextField
                                            fullWidth
                                            placeholder="Type Email"
                                            variant="outlined"
                                            sx={{
                                                backgroundColor: 'white',
                                                borderRadius: 2,
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: 2
                                                }
                                            }}
                                        />
                                        <Box
                                            component="img"
                                            src="https://placehold.co/35x35/FFA51F/white"
                                            sx={{ borderRadius: 2, width: 35, height: 35 }}
                                        />
                                    </Stack>
                                </Box>

                                <Typography variant="body2" color="gray" sx={{ width: { xs: '100%', md: '75%' } }}>
                                    Sign up to our program and start earning money by bringing users to ConnectSponsors.com
                                </Typography>
                                <Box>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            display: 'inline',
                                            backgroundColor: '#FFA51F',
                                            color: 'white',
                                            borderRadius: 8,
                                            '&:hover': { backgroundColor: '#FFA51F' }
                                        }}
                                    >
                                        Start Earning Money
                                    </Button>
                                </Box>
                            </Stack>
                        </Stack>

                        {/* Earnings Section */}
                        <Stack spacing={3}>
                            <Typography variant="h4" fontWeight="bold">
                                Your Earning
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={2}
                                sx={{ width: '100%' }}
                            >
                                {['Total Earning', 'Upcoming Payouts'].map((title) => (
                                    <Paper
                                        key={title}
                                        sx={{
                                            flex: 1,
                                            p: 3,
                                            textAlign: 'center',
                                            background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                                            border: '1px solid rgba(255,255,255,0.2)'
                                        }}
                                    >
                                        <Typography variant="h6">{title}</Typography>
                                        <Typography variant="h4" fontWeight="bold">$0</Typography>
                                    </Paper>
                                ))}
                            </Stack>
                        </Stack>

                        {/* Analytics Section */}
                        <Stack spacing={3}>
                            <Typography variant="h4" fontWeight="bold">
                                Analytics
                            </Typography>
                            <Stack
                                direction={isMobile ? 'column' : 'row'}
                                spacing={2}
                            >
                                <Paper
                                    sx={{
                                        flex: 1,
                                        p: 3,
                                        textAlign: 'center',
                                        background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                                        border: '1px solid rgba(255,255,255,0.2)'
                                    }}
                                >
                                    <Typography variant="h6">Conversions</Typography>
                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            borderRadius: '50%',
                                            border: '4px solid #FFA51F',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '20px auto',
                                            fontSize: '4rem',
                                            fontWeight: 'bold'
                                        }}
                                    >
                                        0
                                    </Box>
                                    <Typography variant="body2" sx={{ px: 3 }}>
                                        Share your affiliate link above to start making passive income!
                                    </Typography>
                                </Paper>
                                <Stack spacing={2} sx={{ flex: 1 }}>
                                    {['Total Referrals', 'Currently in Trial', 'Expired Trial'].map((title) => (
                                        <Paper
                                            key={title}
                                            sx={{
                                                p: 2,
                                                textAlign: 'center',
                                                background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                                                border: '1px solid rgba(255,255,255,0.2)'
                                            }}
                                        >
                                            <Typography variant="h6">{title}</Typography>
                                            <Typography variant="h4" fontWeight="bold">0</Typography>
                                        </Paper>
                                    ))}
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>

                    {/* Right Column */}
                    <Stack
                        spacing={4}
                        sx={{
                            width: { xs: '100%', md: '50%' }
                        }}
                    >
                        <MidSection />
                        {/* Success Kit Section */}
                        <Stack
                            direction={isMobile ? 'column' : 'row'}
                            sx={{
                                border: '1px solid rgba(255,255,255,0.2)',
                                borderRadius: 2,
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://placehold.co/35x40/white/skyblue"
                                sx={{
                                    width: { xs: '100%', md: '50%' },
                                    objectFit: 'cover'
                                }}
                            />
                            <Box
                                sx={{
                                    width: { xs: '100%', md: '50%' },
                                    p: 3,
                                    background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)'
                                }}
                            >
                                <Typography variant="h4" fontWeight="bold" gutterBottom>
                                    Success kit
                                </Typography>
                                <Typography variant="body1">
                                    We wanted to make it as easy as possible to generate passive revenue with your Flodesk referrals.
                                    This simple kit equips you with everything you need to get rocking, rolling, and generating revenue.
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    );
};

export default AffiliatePage;

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


                <Paper
                    elevation={3}
                    sx={{
                        width: '100%',
                        background: 'linear-gradient(to right, #191153, #382689)',
                        color: 'white',
                        textAlign: 'center',
                        border: '1px solid',
                        borderRadius: 2,
                        paddingY: 3,
                        '& .MuiTypography-root': {
                            lineHeight: '24px',
                        },

                    }}
                >
                    <Typography variant="h5" sx={{ fontSize: "33px", marginY: 3 }}>
                        <span style={{ color: '#FFA51F' }}>Connect</span>Sponsors.com
                    </Typography>

                    <Typography variant="h5" sx={{ my: 1, fontSize: "22px", fontWeight: 500, p: 2 }}>
                        Give 50% Off Year 1, Earn 50% Commissions for Life—Double After Year 1!
                    </Typography>

                    <Typography variant="body2" sx={{ p: 1, fontSize: "16px" }}>
                        Offer your friends 50% off their first year of ConnectSponsors.com on both our Startup and Pro plans. Earn $124.25/month or $1248.50/year for Year 1, and double that in commissions for every year after.
                    </Typography>

                    <Box
                        sx={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
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

                    <Typography fontWeight="bold" sx={{ mt: 2, fontSize: "20px" }}>
                        Your affiliate link
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, p: 1, justifyContent: "center" }}>
                        <TextField
                            variant="outlined"
                            value={affiliateLink}
                            onChange={(e) => setAffiliateLink(e.target.value)}
                            placeholder='https://Get ConnectSponsors.com/c/YTVS49'
                            sx={{
                                width: "50%",
                                '& .MuiOutlinedInput-root': {
                                    backgroundColor: 'white',
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
