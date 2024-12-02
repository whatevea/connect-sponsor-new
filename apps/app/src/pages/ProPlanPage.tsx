import { Typography, Box, Link } from '@mui/material';
const demoList = [
    { name: "Google Document", date: "2023/2/23" },
    { name: "YouTube Video", date: "2023/3/15" },
    { name: "Podcast Episode", date: "2023/4/10" },
    { name: "Blog Post", date: "2023/5/05" },
    { name: "Webinar Recording", date: "2023/6/20" }
]

export default function ProPlanPage() {
    return (
        <div>
            <Typography variant='h5'>Download the 1,000+ most active YouTube sponsors in 30 languages </Typography>

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
        </div>
    );
}
