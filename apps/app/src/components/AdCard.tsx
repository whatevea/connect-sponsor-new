import { Box, Typography, Paper } from '@mui/material';

const AdCard = ({ image, title, subtitle,bgcolor }: { image: string;  bgcolor: string; title: string; subtitle: string }) => {
  return (
    <Paper
      sx={{
        m: 4,
        width: 420,
        height: 484,
        border: 1,
        borderColor: '#FFA51F',
        borderRadius: 4,
        overflow: 'hidden'
      }}
    >
      <Box
        sx={{
          height: '50%',
          borderBottom: 1,
          borderColor: '#FFA51F',
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bgcolor
          // bgcolor: '#E0CDFF'
        }}
      >
        <Box
          component="img"
          src={image}
          alt="Spocket Logo"
          sx={{
            width: '66%'
          }}
        />
      </Box>

      <Box sx={{ height: '50%' }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          sx={{ m: 4, color:"#151515" }}
        >
          {title}
        </Typography>

        <Typography sx={{ px: 4 ,color:"#333333"}}>
          {subtitle}
        </Typography>
      </Box>
    </Paper>
  );
};

export default AdCard;