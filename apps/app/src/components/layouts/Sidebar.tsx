import { Box, Typography } from '@mui/material';
import { CONNECT_SPONSOR_TOKEN } from '../../constants';
import { Button, Link } from '@repo/ui';

export default function Sidebar() {
  return (
    <Box
      sx={{
        width: '260px',
        height: 'calc(100vh - 50px)',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        boxShadow: 'none',
        border: '1px solid #FFFFFF33',
        borderRadius: '16px',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        padding: '44px 0 20px',
        position: 'fixed',
        top: 0,
        left: 0,
        overflowY: 'auto',
        margin: '25px 0 0 25px',
      }}
    >
      <Box sx={{ padding: '0 8px', marginBottom: '30px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' color='secondary'>
            Connect
          </Typography>
          <Typography variant='h5' color='text.primary'>
            Sponsors.com
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: '100%', mt: 'auto', padding: '0 10px' }}>
        <Button
          onClick={() => localStorage.removeItem(CONNECT_SPONSOR_TOKEN)}
          variant='outlined'
          component={Link}
          href='/login'
          sx={{ width: '100%' }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}
