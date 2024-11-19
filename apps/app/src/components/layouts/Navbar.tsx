import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from '@repo/ui';
import { ROUTE_PATHS } from '../../routes/paths';
import { useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', route: ROUTE_PATHS.DASHBOARD },
  { label: 'Profile', route: ROUTE_PATHS.PROFILE },
  { label: 'Settings', route: ROUTE_PATHS.SETTINGS },
] satisfies Record<'label' | 'route', string>[];

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <AppBar
      position='static'
      sx={{
        minHeight: '60px',
        backgroundColor: 'rgba(255, 255, 255, 0.10)',
        boxShadow: 'none',
        border: '1px solid #FFFFFF33',
        borderRadius: '16px',
        padding: '8px 18px 8px 33px !important',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Toolbar
        sx={{
          width: '100%',
          height: '100%',
          minHeight: '100% !important',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 !important',
        }}
      >
        <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '32px' }}>
          {navItems.map(({ label, route }) => (
            <Link
              key={label}
              variant='subtitle2'
              sx={{
                fontWeight: 500,
                fontSize: '17px',
                cursor: 'pointer',
                color: pathname === route ? '#FFA51F' : '#fff',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                '&:hover': {
                  color: '#FFA51F',
                },
              }}
              href={route}
            >
              {label}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
