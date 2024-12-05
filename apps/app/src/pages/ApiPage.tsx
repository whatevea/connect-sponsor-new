
import {
    Box,
    Typography,
    Button,
    Avatar
} from '@mui/material';

export default function ApiPage() {
    return (

        <Box
            sx={{
                width: '60%',
                display: 'flex',
                gap: 2,
                borderRadius: 4,
                border: '2px solid white',
                background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                paddingY: 3,
                paddingBottom: 3,
                paddingX: 3,
                color: 'white',
                marginTop: 8,
            }}
        >
            <Box>
                <Avatar
                    sx={{
                        width: 78,
                        height: 78,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src="/icons/images/closing_tag.png"
                        alt="closingTag.icon"
                        style={{
                            borderRadius: 4,
                            width: 48,
                            height: 32
                        }}
                    />
                </Avatar>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.3, paddingTop: 0.9 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold',
                    }}
                >
                    Sponsorships API for Developers
                </Typography>

                <Typography
                    sx={{
                        fontSize: 15,
                        lineHeight: 1.5,
                        fontWeight: 300,
                        paddingRight: 3,
                    }}
                >
                    ConnectSponsors.Com Offers A Public API That Lets You Directly Import Your Chosen Sponsorship Leads Into Your CRM Or Outreach Tool. To Start Building, Upgrade To Our Enterprise Plan And Create Your API Key Below.
                </Typography>

                <Typography
                    sx={{
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        paddingBottom: 0.5
                    }}
                >
                    For Technical Information, Please look At Our API Documentation.
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 6,
                            backgroundColor: '#E9901A',
                            padding: '0.5rem 1.3rem',
                            fontSize: '1.125rem',
                            '&:hover': {
                                backgroundColor: '#D88019'
                            }
                        }}
                    >
                        Coming Soon
                    </Button>
                </Box>

            </Box>
        </Box>
    );
}
