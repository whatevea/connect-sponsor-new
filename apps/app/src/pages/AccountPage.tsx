import {
    Box,
    Button,
    Typography,
    TextField,
} from '@mui/material';

const AccountPage = () => {
    return (
        <Box sx={{ backgroundColor: '#191153', color: 'white' }}>
            {/* Tabs Section */}
            <Box sx={{ display: 'flex', gap: 2, fontSize: '1.125rem' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        backgroundColor: '#FFA51F',
                        borderRadius: 4,
                        p: 1,
                        px: 3,
                    }}
                >
                    <Typography>Account</Typography>
                    <img
                        src="icons/images/account_icon.png"
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
                        p: 1,
                        px: 3,
                    }}
                >
                    <Typography>Billing</Typography>
                    <img
                        src="icons/images/billing_icon.png"
                        alt="Billing Icon"
                    />
                </Box>
            </Box>

            {/* Forms Section */}
            <Box sx={{ display: 'flex', gap: 2, py: 5 }}>
                {/* Personal Information Section */}
                <Box
                    sx={{
                        width: '50%',
                        background: 'linear-gradient(to right, #3826B96B, transparent)',
                        borderRadius: '10px',
                        border: "1px solid white",
                        p: 1,
                    }}
                >
                    <Typography variant="h6" fontWeight="bold" sx={{ ml: 3 }}>
                        Change Personal Information
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ color: 'gray.300', ml: 3, fontSize: '13px' }}
                    >
                        If you change the email address, make sure to confirm it afterward.
                    </Typography>

                    <Box sx={{ display: 'flex', gap: 1, mt: 3 }} >
                        <Box>
                            <Box
                                sx={{
                                    height: 75,
                                    width: 78,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                    border: '1px solid #FFA51F',
                                    mt: 2,
                                    ml: 2
                                }}
                            >
                                <img
                                    src="icons/images/max2.png"
                                    alt="Avatar Icon"
                                    style={{ borderRadius: '50%', padding: '10px', backgroundColor: '#FFA51F' }}
                                />
                            </Box>
                        </Box>

                        <Box sx={{ flex: 1 }}>
                            <Typography fontSize={18}>Full Name</Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1, p: 1 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        borderRadius: 4,
                                        p: 1,
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
                                        px: 2,
                                        fontSize: '15px',
                                    }}
                                >
                                    Update
                                </Button>
                            </Box>
                            <Typography marginTop={2} fontSize={18}>Email</Typography>
                            <Box sx={{ display: 'flex', gap: 1, mt: 1, p: 1 }}>
                                <TextField
                                    fullWidth
                                    size="small"
                                    variant="standard"
                                    sx={{
                                        width: "80%",
                                        borderRadius: 4,
                                        p: 1,
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
                                        px: 2,
                                        fontSize: '15px',
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
                        p: 2,
                        border: '1px solid #FFFFFF',

                    }}
                >
                    <Typography variant="h6" fontWeight="bold">
                        Change Password
                    </Typography>
                    <Typography sx={{ mt: 1, color: 'gray.300', fontSize: '13px' }}>
                        On your next login, you will use the new password.
                    </Typography>

                    <Box sx={{ mt: 3 }}>
                        <TextField
                            fullWidth
                            size="small"
                            placeholder="New Password (6 characters minimum)"
                            variant="standard"
                            sx={{
                                borderRadius: 4,
                                p: 1,
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
                                    p: 1,
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
                                    px: 2,
                                    fontSize: '15px',
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
                    p: 3,
                    boxShadow: 3,
                }}
            >
                <Box sx={{ flex: 3, pr: 2 }}>
                    <Typography fontSize={17} mb={2} fontWeight="bold">
                        Need Assistance?
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{ mt: 1, color: 'gray.300', lineHeight: 1.5, fontSize: '15px' }}
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
                            borderRadius: 8,
                            px: 3,
                            py: 1,
                            fontSize: '15px',
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
