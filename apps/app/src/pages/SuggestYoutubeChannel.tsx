import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Stack,
} from '@mui/material';

export default function SuggestYoutubeChannelPage() {
    return (
        <Container
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                padding: 1
            }}
        >
            <Stack spacing={2}>
                <Typography variant='h5'>Suggest Youtube Channels </Typography>
                <Typography sx={{ marginY: 2 }}>Suggest a YouTube channel you'd like us to track and stay updated on. Simply provide the channel's name, URL, and category.</Typography>


                <Box sx={{ display: { xs: 'block', sm: 'flex' }, gap: 3 }}>
                    <Box sx={{ width: { xs: '90%', sm: '50%' } }}>
                        <Typography color="inherit" my={1}>
                            Channel Name
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
                            Channel URL
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
                </Box>
                <Box sx={{ display: { xs: 'block', sm: 'flex' }, gap: 3 }}>
                    <Box sx={{ width: { xs: '90%', sm: '50%' } }}>
                        <Typography color="inherit" my={1}>
                            Category
                            <Typography
                                component="span"
                                sx={{
                                    color: '#E9901A',
                                    ml: 1,
                                }}>

                                Optional
                            </Typography>
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
                            Your Email
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
                </Box>

                <Box>
                    <Typography color="inherit" my={1}>
                        Why Should We Track This Channel?
                        <Typography
                            component="span"
                            sx={{
                                color: '#E9901A',
                                ml: 1,
                            }}>

                            Optional
                        </Typography>
                    </Typography>
                    <TextField
                        fullWidth
                        multiline
                        rows={10}
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

                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>


                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#E9901A',
                            borderRadius: 6,
                            px: 5,
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
