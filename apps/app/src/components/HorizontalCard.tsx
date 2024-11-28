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
        height: 112, 
        borderRadius: 4,
        backgroundColor: 'white' 
      }}
    >
      <Box 
        sx={{ 
          width: '16.666%', 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center' 
        }}
      >
        <CardMedia
          component="img"
          sx={{ 
            width: 64, 
            height: 64 
          }}
          image={image}
          alt="Messenger Logo"
        />
      </Box>
      <Box 
        sx={{ 
          width: '83.334%', 
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
            fontWeight:500,
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

