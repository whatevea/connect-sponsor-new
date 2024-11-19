import { Navigate, Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { CONNECT_SPONSOR_TOKEN } from '../../constants';

export default function ProtectedLayout() {
  if (!localStorage.getItem(CONNECT_SPONSOR_TOKEN)) {
    return <Navigate to='/login' replace />;
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          padding: { xs: '20px', md: '25px 25px 25px 60px ' },
          marginLeft: { xs: '0', md: '250px' },
        }}
      >
        <Navbar />
        <Box sx={{ marginTop: '30px' }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
