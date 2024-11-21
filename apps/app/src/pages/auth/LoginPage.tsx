import {
  Box,
  Card,
  CardActions,
  CardContent,
  Divider,
  Grid2,
  Typography,
} from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import MicrosoftIcon from '@mui/icons-material/Microsoft';

import { Button, InputField, Link, theme } from '@repo/ui';
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
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant='h3' color='secondary' fontWeight={700}>
            Connect
          </Typography>
          <Typography variant='h3' fontWeight={700}>
            Sponsors.com
          </Typography>
        </Box>

        <Card
          sx={{
            borderRadius: '16px',
            minWidth: 500,
            background:
              'linear-gradient(270.1deg, #191153 0.77%, rgba(56, 38, 185, 0.42) 99.92%)',
            border: '1px solid #fff',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              padding: '2rem 1.5rem 3.5rem',
              wordSpacing: '2px',
            }}
          >
            <Box sx={{ marginBottom: '1.5rem' }}>
              <Typography variant='h4' sx={{ fontWeight: 700 }}>
                Login
              </Typography>

              <Typography
                variant='body1'
                sx={{ fontSize: '1.1rem', mt: '1rem' }}
              >
                To Find & Close Your Sponsors
              </Typography>
            </Box>

            <Grid2 container spacing={2}>
              <Grid2 size={{ xs: 6, md: 6 }}>
                <Button
                  fullWidth
                  sx={{
                    background: '#fff',
                    textTransform: 'capitalize',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: '8px',
                  }}
                >
                  <Typography
                    variant='body1'
                    color='primary'
                    fontWeight={500}
                    fontSize='16px'
                  >
                    Login With Google
                  </Typography>
                  <GoogleIcon fontSize='small' />
                </Button>
              </Grid2>
              <Grid2 size={{ xs: 6, md: 6 }}>
                <Button
                  fullWidth
                  sx={{
                    background: '#fff',
                    textTransform: 'capitalize',
                    justifyContent: 'space-between',
                    padding: '14px 20px',
                    borderRadius: '8px',
                  }}
                >
                  <Typography
                    variant='body1'
                    color='primary'
                    fontWeight={500}
                    fontSize='16px'
                  >
                    Login With Microsoft
                  </Typography>
                  <MicrosoftIcon fontSize='small' />
                </Button>
              </Grid2>
            </Grid2>

            <Grid2
              container
              alignItems='center'
              sx={{
                paddingX: '3rem',
                opacity: 0.5,
                my: '1rem',
              }}
            >
              <Grid2 size={{ xs: 5, md: 5 }}>
                <Divider sx={{ borderColor: '#fff', pt: '2px' }} />
              </Grid2>
              <Grid2 size={{ xs: 2, md: 2 }}>
                <Typography variant='body1' fontSize='1rem'>
                  or
                </Typography>
              </Grid2>
              <Grid2 size={{ xs: 5, md: 5 }}>
                <Divider sx={{ borderColor: '#fff', pt: '2px' }} />
              </Grid2>
            </Grid2>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <InputField type='email' placeholder='Email' />
              <InputField type='password' placeholder='Password *' />
            </Box>
          </CardContent>
          <CardActions
            sx={{
              bgcolor: theme.palette.secondary.main,
              justifyContent: 'center',
            }}
          >
            <Button
              component={Link}
              href='/forgot'
              sx={{
                color: '#fff',
                textTransform: 'capitalize',
                padding: 0,
                fontWeight: 600,
                fontSize: '16px',
              }}
            >
              Forgot Password
            </Button>
          </CardActions>
        </Card>

        <Box
          sx={{
            mt: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.8rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={() => {
              localStorage.setItem(CONNECT_SPONSOR_TOKEN, 'jwt-token-123');
            }}
            component={Link}
            href={ROUTE_PATHS.DASHBOARD}
            variant='contained'
            color='secondary'
            sx={{ px: '3rem', py: '1rem', fontWeight: 600 }}
          >
            Login App
          </Button>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='body1' fontWeight={600} fontSize='1.1rem'>
              Don’t you have an account?
            </Typography>
            <Button
              sx={{
                textTransform: 'capitalize',
                color: '#FFA51F',
                fontSize: '1.1rem',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
