import { Box, Card, CardActions, CardContent, Typography } from '@mui/material';
import { Button, Link } from '@repo/ui';
import { CONNECT_SPONSOR_TOKEN } from '../../constants';
import { ROUTE_PATHS } from '../../routes/paths';

export default function SignUpPage() {
    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                display: 'grid',
                placeItems: 'center',
            }}
        >
            <Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h4' color='secondary'>
                        Connect
                    </Typography>
                    <Typography variant='h4'>Sponsors.com</Typography>
                </Box>

                <Card
                    sx={{
                        borderRadius: '16px',
                        minWidth: 500,
                        background:
                            'linear-gradient(270.1deg, #191153 0.77%, rgba(56, 38, 185, 0.42) 99.92%)',

                        border: '1px solid #fff',
                        padding: '1rem',
                    }}
                >
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem',
                            textAlign: 'center',
                        }}
                    >
                        <Typography variant='h4' sx={{ fontWeight: 700 }}>
                            #1 most used tool to find & convert <br /> sponsorship
                            opportunities
                        </Typography>

                        <Typography variant='h6' lineHeight={1.5} color='text.secondary'>
                            Sign up & get free access to the 1,000+ most <br /> active Youtube
                            Sponsors in 30 languages
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small'>Learn More</Button>
                    </CardActions>
                </Card>

                <Button
                    onClick={() => {
                        localStorage.setItem(CONNECT_SPONSOR_TOKEN, 'jwt-token-123');
                    }}
                    component={Link}
                    href={ROUTE_PATHS.DASHBOARD}
                    variant='contained'
                    color='secondary'
                    sx={{ px: '3rem', fontWeight: 600 }}
                >
                    Login App
                </Button>

                <Box>
                    <Typography>Don’t you have an account?</Typography>
                    <Button>Sign up</Button>
                </Box>
            </Box>
        </Box>
    );
}
