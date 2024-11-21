import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Box } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Link, MenuIcon } from '@repo/ui';
import { ROUTE_PATHS } from '../../routes/paths';

const navItems = [
  { label: 'Plans & Pricing', path: ROUTE_PATHS.PRICE },
  { label: 'Account', path: ROUTE_PATHS.ACCOUNT },
  { label: 'Team', path: ROUTE_PATHS.TEAM },
  { label: 'Faq', path: ROUTE_PATHS.FAQ },
  { label: 'Contact Us', path: ROUTE_PATHS.CONTACT_US },
  { label: 'Affiliate', path: ROUTE_PATHS.AFFILIATE },
  { label: 'Api', path: ROUTE_PATHS.API },
  { label: 'Reseller', path: ROUTE_PATHS.RESELLER },
];

export default function Navbar() {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState<boolean>(false);

  return (
    <AppBar
      position='static'
      sx={{
        minHeight: '79px',
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
          {navItems.map((item) => (
            <Link
              key={item.label}
              variant='subtitle2'
              sx={{
                fontWeight: 500,
                fontSize: '17px',
                cursor: 'pointer',
                color: location.pathname === item.path ? '#FFA51F' : '#fff',
                transition: 'all 0.2s ease-in-out',
                textDecoration: 'none',
                '&:hover': {
                  color: '#FFA51F',
                },
              }}
              href={item.path}
            >
              {item.label}
            </Link>
          ))}
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: 'auto',
            marginRight: '25px',
            width: { xs: '140px', lg: 'auto' },
          }}
        >
          <IconButton
            edge='end'
            color='inherit'
            aria-label='menu'
            // onClick={() => setAnchorEl(anchorEl === true ? false : true)}
            sx={{ p: '0', display: { xs: 'flex', lg: 'flex' } }}
          >
            <MenuIcon
              sx={{
                width: '30px',
                height: '25px',
              }}
            />
          </IconButton>
        </Box>
      </Toolbar>

      {/* Mobile Menu */}

      <Toolbar
        sx={{
          position: 'absolute',
          top: '110px !important',
          right: 0,
          zIndex: 999,
          minHeight: 'auto !important',
          height: anchorEl ? { xs: '500px', sm: '315px' } : '0',
          backgroundColor: '#191153',
          color: '#fff',
          width: { xs: 'calc(100% - 44px)', md: 'calc(100% - 335px)' },
          padding: anchorEl ? '16px ' : '0',
          borderRadius: '16px',
          overflow: 'auto',
          transition: 'all 0.5s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          margin: '0 25px',
          border: anchorEl ? '1px solid #ffffff2b' : '1px solid #ffffff0',
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.label}
            variant='subtitle2'
            onClick={() => setAnchorEl(false)}
            sx={{
              fontWeight: 500,
              fontSize: '17px',
              cursor: 'pointer',
              color: location.pathname === item.path ? '#FFA51F' : '#fff',
              textDecoration: 'none',
              '&:hover': {
                color: '#FFA51F',
              },
            }}
            href={item.path}
          >
            {item.label}
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
}
