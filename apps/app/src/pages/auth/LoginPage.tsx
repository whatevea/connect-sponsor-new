import { Box } from '@mui/material';
import { Button, Link } from '@repo/ui';
import { CONNECT_SPONSOR_TOKEN } from '../../constants';
import { ROUTE_PATHS } from '../../routes/paths';

export default function LoginPage() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <Button
        onClick={() => {
          localStorage.setItem(CONNECT_SPONSOR_TOKEN, 'jwt-token-123');
        }}
        component={Link}
        href={ROUTE_PATHS.DASHBOARD}
        variant='contained'
        color='primary'
      >
        Login
      </Button>
    </Box>
  );
}
