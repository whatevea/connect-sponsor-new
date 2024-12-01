import {
    Box,
    Button,
    Typography,
    TextField,
} from '@mui/material';

const AccountPage = () => {
    return (
        <Box sx={{ backgroundColor: '#191153', color: 'white', p: 1 }}>
            {/* Tabs Section */}
            <Box sx={{ display: 'flex', gap: 2, fontSize: '1.125rem' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        backgroundColor: '#FFA51F',
                        borderRadius: 4,
                        p: 1.5,
                        px: 5,
                    }}
                >
                    <Typography>Account</Typography>
                    <img
                        src="https://placehold.co/20x25/white/FFA51F"
                        alt="Account Icon"
                    />
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        border: '2px solid',
                        borderColor: 'white',
                        borderRadius: 4,
                        background: 'linear-gradient(to right, #3826B96B, transparent)',
                        p: 1.5,
                        px: 7,
                    }}
                >
                    <Typography>Billing</Typography>
                    <img
                        src="https://placehold.co/20x25/white/FFA51F"
                        alt="Billing Icon"
                    />
                </Box>
            </Box>

            {/* Forms Section */}
            <Box sx={{ display: 'flex', gap: 5, py: 5 }}>
                {/* Personal Information Section */}
                <Box
                    sx={{
                        width: '50%',
                        background: 'linear-gradient(to right, #3826B96B, transparent)',
                        borderRadius: '10px',
                        p: 5,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        Change Personal Information
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ fontStyle: 'italic', color: 'gray.300', mt: 1 }}
                    >
                        If you change the email address, make sure to confirm it afterward.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 3, mt: 3 }}>
                        <Box>
                            <Box
                                sx={{
                                    height: 85,
                                    width: 85,
                                    p: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    border: '1px solid #FFA51F',
                                }}
                            >
                                <img
                                    src="https://placehold.co/77x77/FFA51F/white"
                                    alt="Avatar Icon"
                                    style={{ borderRadius: '50%' }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography>Full Name</Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        borderRadius: 4,
                                        p: 1.5,
                                        backgroundColor: "white",
                                        outline: "none",
                                        input: { color: "black" },
                                        '& .MuiInput-underline:before': {
                                            borderBottom: 'none',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottom: 'none',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                            borderBottom: 'none',
                                        }
                                    }}

                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FFA51F',
                                        borderRadius: '10px',
                                        px: 3,
                                    }}
                                >
                                    Update
                                </Button>
                            </Box>
                            <Typography marginTop={2}>Email</Typography>
                            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        borderRadius: 4,
                                        p: 1.5,
                                        backgroundColor: "white",
                                        outline: "none",
                                        input: { color: "black" },
                                        '& .MuiInput-underline:before': {
                                            borderBottom: 'none',
                                        },
                                        '& .MuiInput-underline:after': {
                                            borderBottom: 'none',
                                        },
                                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                            borderBottom: 'none',
                                        }
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: '#FFA51F',
                                        borderRadius: '10px',
                                        px: 3,
                                    }}
                                >
                                    Update
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Password Section */}
                <Box
                    sx={{
                        width: '50%',
                        background: 'linear-gradient(to right, #3826B96B, transparent)',
                        borderRadius: '10px',
                        p: 5,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        Change Password
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'gray.300' }}>
                        On your next login, you will use the new password.
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="New Password (6 characters minimum)"
                            variant="standard"
                            sx={{
                                width: "80%",
                                borderRadius: 4,
                                p: 1.5,
                                mb: 2,
                                backgroundColor: "white",
                                outline: "none",
                                input: { color: "black" },
                                '& .MuiInput-underline:before': {
                                    borderBottom: 'none',
                                },
                                '& .MuiInput-underline:after': {
                                    borderBottom: 'none',
                                },
                                '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                    borderBottom: 'none',
                                }
                            }}
                            type="password"
                        />
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="Confirm Password"
                                variant="standard"
                                sx={{
                                    width: "80%",
                                    borderRadius: 4,
                                    p: 1.5,
                                    backgroundColor: "white",
                                    outline: "none",
                                    input: { color: "black" },
                                    '& .MuiInput-underline:before': {
                                        borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottom: 'none',
                                    },
                                    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    }
                                }}
                                type="password"
                            />
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FFA51F',
                                    borderRadius: '10px',
                                    px: 3,
                                }}
                            >
                                Update
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* Assistance Section */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#302964',
                    borderRadius: '10px',
                    p: 5,
                    boxShadow: 3,
                }}
            >
                <Box sx={{ flex: 3, pr: 2 }}>
                    <Typography variant="h6" fontWeight="bold">
                        Need Assistance?
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ mt: 1, color: 'gray.300', lineHeight: 1.5 }}
                    >
                        You can cancel your subscription at any time. Please note that
                        canceling will delete all your brands, projects, and settings
                        within AdCreative.ai.
                    </Typography>
                </Box>

                <Box sx={{ flex: 1, textAlign: 'right' }}>
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: '#FFA51F',
                            borderRadius: '20px',
                            px: 4,
                            py: 1.5,
                        }}
                    >
                        Cancel Subscription
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AccountPage;
