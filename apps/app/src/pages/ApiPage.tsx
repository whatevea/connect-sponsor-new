
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
                width: '66.666%',
                display: 'flex',
                gap: 2,
                borderRadius: 4,
                border: '2px solid white',
                background: 'linear-gradient(to right, rgba(56, 38, 185, 0.42), transparent)',
                paddingY: 4,
                paddingX: 2,
                color: 'white'
            }}
        >
            <Box>
                <Avatar
                    sx={{
                        width: 96,
                        height: 96,
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <img
                        src="https://placeholder.co/48x38/FFA51F/white"
                        alt="closingTag.icon"
                        style={{
                            borderRadius: 4,
                            width: 48,
                            height: 38
                        }}
                    />
                </Avatar>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontSize: '2rem',
                        fontWeight: 'bold'
                    }}
                >
                    Sponsorships API for Developers
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                    }}
                >
                    ConnectSponsors.com offers a public API that lets you directly import your chosen sponsorship leads into your CRM or outreach tool. To start building, upgrade to our Enterprise Plan and create your API key below.
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        fontSize: '1.125rem',
                        fontWeight: 'semibold'
                    }}
                >
                    For Technical Information, please look at our API documentation.
                </Typography>
                <Box>
                    <Button
                        variant="contained"
                        sx={{
                            borderRadius: 6,
                            backgroundColor: '#E9901A',
                            padding: '0.5rem 1.5rem',
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
