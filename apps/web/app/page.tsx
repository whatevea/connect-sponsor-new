import { Box, Typography, Link } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: '#191153',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '24px 48px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' color='secondary'>
            Get
          </Typography>
          <Typography variant='h5' color='text.primary'>
            Sponsored.AI
          </Typography>
        </Box>

        <Link
          variant='h6'
          href={process.env.NEXT_PUBLIC_DASHBOARD_URL || ''}
          rel='noopener noreferrer'
          target='_blank'
          sx={{
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            textDecoration: 'none',
            color: '#fff',
            '&:hover': {
              color: '#FFA51F',
            },
          }}
        >
          Login
        </Link>
      </Box>
    </Box>
  );
}
