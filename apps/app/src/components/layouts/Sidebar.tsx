import { useLocation } from 'react-router-dom';
import { Box, List, Typography } from '@mui/material';
import {
  Button,
  ContentIcon,
  DashboardIcon,
  Link,
  ProPlanIcon,
  SearchIcon,
  SidebarItem,
  SponsorshipIcon,
  ToolsIcon,
  YoutubeIcon,
} from '@repo/ui';
import { CONNECT_SPONSOR_TOKEN } from '../../constants';
import { ROUTE_PATHS } from '../../routes/paths';

export const sidebarData = [
  {
    label: 'Dashboard',
    icon: <DashboardIcon sx={{ fontSize: '18px' }} />,
    route: ROUTE_PATHS.DASHBOARD,
  },
  {
    label: 'Startup Plan',
    icon: <SearchIcon />,
    route: ROUTE_PATHS.STARTUP_PLAN,
  },
  { label: 'Pro Plan', icon: <ProPlanIcon />, route: ROUTE_PATHS.PRO_PLAN },
  {
    label: 'Featured Sponsorship Opportunities',
    icon: <SponsorshipIcon />,
    route: ROUTE_PATHS.FEATURED_SPONSORSHIP_OPPORTUNITIES,
  },
  {
    label: 'Featured Content Entrepreneurs',
    icon: <ContentIcon />,
    route: ROUTE_PATHS.FEATURED_CONTENT_OPPORTUNITIES,
  },
  {
    label: 'Partner apps, tools & courses',
    icon: <ToolsIcon />,
    route: ROUTE_PATHS.PARTNER_APPS_TOOLS_COURSES,
  },
  {
    label: 'Suggest Youtube Channel',
    icon: <YoutubeIcon />,
    route: ROUTE_PATHS.SUGGEST_YOUTUBE_CHANNEL,
  },
];

export default function Sidebar() {
  const location = useLocation();

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

      <List
        sx={{
          p: 0,
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
        }}
      >
        {sidebarData.map((item, index) => (
          <SidebarItem
            key={index}
            isActive={location.pathname === item.route}
            item={item}
          />
        ))}
      </List>

      <Box sx={{ width: '100%', mt: 'auto', padding: '0 20px' }}>
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
