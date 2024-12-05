import {
    Box,
    Typography,
    Card,
    CardMedia,
} from '@mui/material';

const HorizontalCard: React.FC<{ image: string; title: string; subtitle: string }> = ({ image, title, subtitle }) => {
    return (
        <Card
            sx={{
                width: '100%',
                display: 'flex',
                paddingBottom: 2,
                paddingTop: 2,
                borderRadius: 4,
                backgroundColor: 'white'
            }}
        >
            <Box
                sx={{
                    width: '12%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <CardMedia
                    component="img"
                    sx={{
                        width: 50,
                        height: 50
                    }}
                    image={image}
                    alt="Messenger Logo"
                />
            </Box>
            <Box
                sx={{
                    width: '85%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 1
                }}
            >
                <Typography
                    sx={{
                        color: '#151515',
                        fontSize: '22px',
                        fontWeight: 600,
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        color: 'black',
                        fontSize: '16px',
                        lineHeight: '1.5'
                    }}
                >
                    {subtitle}        </Typography>
            </Box>
        </Card>
    );
};

export default HorizontalCard;

