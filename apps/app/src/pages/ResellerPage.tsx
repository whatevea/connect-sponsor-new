
import {
    Box,
    Typography,
    Button,
    Avatar
} from '@mui/material';

export default function ResellerPage() {
    return (

        <Box
            sx={{
                width: '67%',
                display: 'flex',
                gap: 2,
                borderRadius: 4,
                border: '2px solid white',
                background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                paddingY: 3,
                paddingX: 2,
                marginTop: 8,
                color: 'white'
            }}
        >
            <Box>
                <Avatar
                    sx={{
                        width: 80,
                        height: 80,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Typography
                        sx={{
                            fontWeight: 800,
                            borderRadius: '9999px',
                            fontSize: '2.25rem', // equivalent to text-4xl
                            padding: '1.1rem 1rem',
                            backgroundColor: '#E9901A',
                            color: 'white',
                            display: 'inline-block'
                        }}
                    >
                        $
                    </Typography>
                </Avatar>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 'bold'
                    }}
                >
                    Start selling ConnectSponsors.com to your clients!
                </Typography>

                <Typography
                    sx={{
                        fontSize: 15,
                        lineHeight: 1.5,
                        paddingRight: 13,
                        fontWeight: 300,
                    }}
                >
                    If You're One Of Our Clients On The “Enterprise” Packages, You Can Tnvite Your Clients To Join ConnectSponsors.Com And Automatically Create Their Accounts. To Give Them An Even Bigger “wow” Factor, Consider Activating Aur Custom Branding & Custom Domain feature.
                </Typography>

                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 6,
                            backgroundColor: '#E9901A',
                            padding: '0.5rem 1.5rem',
                            fontSize: '1.125rem',
                            marginTop: 1,
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
