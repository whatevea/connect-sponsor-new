import { Box, Typography, Paper } from '@mui/material';

const AdCard = ({ image, title, subtitle, bgcolor }: { image: string; bgcolor: string; title: string; subtitle: string }) => {
    return (
        <Paper
            sx={{
                m: 1.2,
                border: 1,
                borderColor: '#FFA51F',
                borderRadius: 4,
                overflow: 'hidden'
            }}
        >
            <Box
                sx={{
                    height: '55%',
                    borderBottom: 1,
                    borderColor: '#FFA51F',
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor
                }}
            >
                <Box
                    component="img"
                    src={image}
                    alt="Spocket Logo"
                    sx={{
                        width: '66%',
                        py: 12
                    }}
                />
            </Box>

            <Box sx={{ height: '45%' }}>
                <Typography
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mx: 3, my: 2, color: "#151515" }}
                >
                    {title}
                </Typography>
                <Typography sx={{ px: 3, color: "#333333", fontSize: "17px", lineHeight: 1.5 }}>
                    {subtitle}
                </Typography>
            </Box>
        </Paper>
    );
};

export default AdCard;