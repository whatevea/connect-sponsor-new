import { Typography,Box,Link } from '@mui/material';

export default function StartupPlanPage() {
  return (
    <div>
      <Typography variant='h5'>Download the 1,000+ most active YouTube sponsors in 30 languages </Typography>
      <Box
  sx={{
    borderRadius: '15px',
    border: '1px solid',
    borderColor: '#FFFFFF',
    backgroundImage: 'linear-gradient(#191153, #382689)',
    padding:5,
    marginTop:5
  }}
>
 <Typography sx={{ fontSize:'26px' }}>
  All Files
 </Typography>
 <Box
      sx={{
        marginTop:4,
        '& .MuiTypography-root': {
          fontSize: '20px',
        },
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1" fontWeight="bold" color="#FFA51F" flex={2 / 3}>
          Download Sponsors
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="#FFA51F" flex={1 / 3}>
          Date
        </Typography>
      </Box>
      <Box
        mt={2}
        bgcolor="rgba(255, 255, 255, 0.1)"
        borderRadius={2}
        p={2}
        color="#CAC4C4"
      >
        <Box display="flex" justifyContent="space-between"     sx={{
        '& .MuiTypography-root': {
          fontSize: '18px',
        },
      }}>
          <Typography variant="body1" flex={2/3}>Google Document</Typography>
          <Typography variant="body1" flex={1/3}>2023/123/12</Typography>
        </Box>
      </Box>
      <Box mt={2} color="#fff">
        <Typography variant="body1" marginY={2}>
          This content is for pro members only.
        </Typography>
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
