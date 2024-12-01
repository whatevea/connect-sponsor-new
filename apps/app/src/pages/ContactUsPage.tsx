
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Stack,
} from '@mui/material';

export default function ContactUsPage() {
    return (
        <Container
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                padding: 3
            }}
        >
            <Stack spacing={2}>
                <Typography variant="h4" color="inherit">
                    Open a ticket
                </Typography>

                <Typography variant="body1" color="inherit">
                    Can't find what you are looking for? Fill in the form below and contact our support team
                </Typography>

                <Box sx={{ display: { xs: 'block', sm: 'flex' }, gap: 2 }}>
                    <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                        <Typography color="inherit" my={1}>
                            Name
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Type Here"
                            variant="outlined"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    color: "black"

                                }
                            }}
                        />
                    </Box>

                    <Box sx={{ width: { xs: '100%', sm: '50%' } }}>
                        <Typography color="white" my={1}>
                            Reply to Email
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Type Here"
                            variant="outlined"
                            sx={{
                                backgroundColor: 'white',
                                borderRadius: 2,
                                '& .MuiOutlinedInput-root': {
                                    borderRadius: 2,
                                    color: "black"

                                }
                            }}
                        />
                        <Typography mt={1}>
                            Your account's email address: ltvspot@reserchway.co
                        </Typography>
                    </Box>
                </Box>

                <Box>
                    <Typography color="inherit" my={1}>
                        Message
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={10}
                        placeholder="For assistance regarding your sites, please provide the site's name together with your question(s)."
                        variant="outlined"
                        sx={{
                            backgroundColor: 'white',
                            borderRadius: 2,
                            '& .MuiOutlinedInput-root': {
                                borderRadius: 2,
                                color: "black"
                            }
                        }}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Typography color="inherit">
                        For More Detail, Review Our{' '}
                        <Typography
                            component="span"
                            sx={{
                                color: '#E9901A',
                                textDecoration: 'underline',
                                cursor: 'pointer',
                                '&:hover': {
                                    textDecoration: 'underline'
                                }
                            }}
                        >
                            Privacy Policy
                        </Typography>
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#E9901A',
                            borderRadius: 6,
                            '&:hover': {
                                backgroundColor: '#D88019'
                            }
                        }}
                    >
                        Send
                    </Button>
                </Box>
            </Stack>
        </Container>
    );
}
